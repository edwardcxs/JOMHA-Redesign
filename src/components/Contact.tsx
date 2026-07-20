import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import RotatingText from './RotatingText';

export default function Contact() {
  const animatedTitle = (
    <span className="inline-flex items-center gap-2 flex-wrap justify-center lg:justify-start">
      Contact
      <RotatingText
        texts={['US', 'JOMHA']}
        mainClassName="text-terracotta overflow-hidden justify-center"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
        splitBy="characters"
        auto
        loop
      />
    </span>
  );

  return (
    <Section id="contact" title={animatedTitle} subtitle="Find Us" index="11">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4 border-b border-richblack/10 pb-8">
              <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold tracking-superwide uppercase text-richblack/40 mb-1">Location</h4>
                <p className="text-base font-light text-richblack leading-relaxed">
                  1st Floor, Upper Blackberry Showroom<br />
                  Near Uditnagar Petrol Pump, Kachery Road<br />
                  Uditnagar, Rourkela
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-richblack/10 pb-8">
              <Phone className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold tracking-superwide uppercase text-richblack/40 mb-1">Reservations & Inquiries</h4>
                <p className="text-base font-light text-richblack leading-relaxed">
                  +91 82603 72068
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-richblack/10 pb-8">
              <Mail className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold tracking-superwide uppercase text-richblack/40 mb-1">Email</h4>
                <p className="text-base font-light text-richblack leading-relaxed">
                  jomhatribalcuisine@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-richblack/10 pb-8">
              <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
              <div>
                <h4 className="text-[10px] font-bold tracking-superwide uppercase text-richblack/40 mb-1">Dining Hours</h4>
                <p className="text-base font-light text-richblack leading-relaxed">
                  Mon-Sun 11:00AM - 10:30PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-auto min-h-[400px] w-full rounded-sm overflow-hidden border border-richblack/5 group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4780.194409892672!2d84.84120137625096!3d22.226818079739513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2019a5a732f8d5%3A0x10a0e566c4dc6eb9!2sJOMHA%20Tribal%20Cuisine%20Restaurant!5e1!3m2!1sen!2sin!4v1784354360242!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>
    </Section>
  );
}
