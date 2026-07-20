import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
}

export interface RotatingTextProps {
  texts: (string | { text: string; className?: string })[];
  transition?: any;
  initial?: any;
  animate?: any;
  exit?: any;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: "characters" | "words" | "lines" | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 28, stiffness: 130, mass: 0.3 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = true,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName = "",
    splitLevelClassName = "",
    elementLevelClassName = "",
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    next: () => setCurrentTextIndex((prev) => (prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1)),
    previous: () => setCurrentTextIndex((prev) => (prev === 0 ? (loop ? texts.length - 1 : prev) : prev - 1)),
    jumpTo: (index: number) => setCurrentTextIndex(Math.max(0, Math.min(index, texts.length - 1))),
  }));

  useEffect(() => {
    if (!auto) return;
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => {
        const nextIndex = prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1;
        if (onNext && nextIndex !== prev) onNext(nextIndex);
        return nextIndex;
      });
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [texts.length, rotationInterval, auto, loop, onNext]);

  // Use Intl.Segmenter to properly split unicode characters like Hindi/Odia
  const splitText = () => {
    const currentItem = texts[currentTextIndex];
    const text = typeof currentItem === 'string' ? currentItem : currentItem.text;
    if (splitBy === "characters") {
      if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        return Array.from(segmenter.segment(text)).map(s => s.segment);
      }
      return text.split("");
    }
    if (splitBy === "words") return text.split(" ");
    if (splitBy === "lines") return text.split("\n");
    return text.split(splitBy);
  };

  const elements = splitText();
  
  const currentItem = texts[currentTextIndex];
  const currentItemClassName = typeof currentItem === 'string' ? '' : (currentItem.className || '');

  return (
    <span className={`inline-flex items-center justify-center ${mainClassName}`}>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className={`flex items-center justify-center ${splitLevelClassName} ${currentItemClassName}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { transition: { staggerChildren: staggerDuration } },
            exit: { transition: { staggerChildren: staggerDuration, staggerDirection: staggerFrom === "last" ? -1 : 1 } }
          }}
        >
          {elements.map((char, i) => (
            <motion.span
              key={i}
              className={`inline-block ${elementLevelClassName}`}
              variants={{
                hidden: initial,
                visible: animate,
                exit: exit,
              }}
              transition={transition}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
