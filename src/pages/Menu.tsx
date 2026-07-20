/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import RotatingText from '../components/RotatingText';

const menuCategories = [
  { id: 'starter-veg', label: 'Starter Veg' },
  { id: 'starter-non-veg', label: 'Starter Non Veg' },
  { id: 'indian-bread', label: 'Indian Bread' },
  { id: 'greens', label: 'Greens' },
  { id: 'veg-main-course', label: 'Veg Main Course' },
  { id: 'non-veg-main-course', label: 'Non-Veg Main Course' },
  { id: 'rice', label: 'Rice' },
  { id: 'curry', label: 'Curry' },
  { id: 'thali', label: 'Thali' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'dessert', label: 'Dessert' },
  { id: 'jomha-special', label: 'Jomha Special' },
  { id: 'jomha-handi-special', label: 'Jomha Handi Special' },
  { id: 'jomha-patra-poda', label: 'Jomha Patra Poda' },
];

const menuData: Record<string, { title: string; description?: string; price?: string; tags?: string[] }[]> = {
  'starter-veg': [
    { title: 'Gobi Pakoda', description: 'Crispy cauliflower fritters infused with tribal spices.' },
    { title: 'Ragi Veg Manchurian', description: 'Healthy finger millet dumplings tossed in a savory sauce.' },
    { title: 'Mushroom Pakoda', description: 'Earthy forest mushrooms fried to a golden crisp.' },
    { title: 'Paneer Pakoda', description: 'Cottage cheese cubes coated in seasoned gram flour and deep-fried.' },
    { title: 'Mushroom Chilly', description: 'Spicy and tangy tossed mushrooms with green chilies and peppers.' },
    { title: 'Paneer Chilly', description: 'Classic Indo-Chinese style paneer tossed in fiery sauces.' },
    { title: 'Corn Chat', description: 'Sweet and spicy corn kernel salad with a tangy dressing.' },
  ],
  'starter-non-veg': [
    { title: 'Chicken Pakoda', description: 'Bite-sized chicken pieces marinated in rustic spices and fried crisp.' },
    { title: 'Chicken Chilly', description: 'Wok-tossed chicken chunks with peppers, onions, and spicy sauces.' },
    { title: 'Chicken 65', description: 'Spicy, deep-fried chicken delicacy flavored with curry leaves.' },
    { title: 'Garlic Chicken', description: 'Succulent chicken pieces cooked with a robust garlic flavor.' },
    { title: 'Chicken Ghee Fry', description: 'Rich and aromatic chicken pan-fried in pure desi ghee.' },
  ],
  'indian-bread': [
    { title: 'Tawa Roti', description: 'Traditional flatbread cooked on an iron griddle.' },
    { title: 'Plain Papad', description: 'Crispy lentil wafers, a perfect crunchy accompaniment.' },
    { title: 'Masala Papad', description: 'Crispy wafers topped with spiced onions, tomatoes, and herbs.' },
    { title: 'Ragi Roti', description: 'Nutritious flatbread made from finger millet flour.' },
    { title: 'Plain Paratha', description: 'Flaky and layered traditional Indian flatbread.' },
    { title: 'Desi Ghee Ka Paratha', description: 'Layered flatbread enriched with the aroma of pure desi ghee.' },
  ],
  'greens': [
    { title: 'Hara Bhara Salad', description: 'Fresh assortment of seasonal greens and crisp vegetables.' },
    { title: 'Onion Salad', description: 'Sliced onions sprinkled with lemon and chaat masala.' },
  ],
  'veg-main-course': [
    { title: 'Mix Veg', description: 'Assorted seasonal vegetables cooked in a flavorful homestyle gravy.' },
    { title: 'Matar Paneer Special', description: 'Cottage cheese and green peas simmered in a rich tomato-onion sauce.' },
    { title: 'Paneer Masala', description: 'Soft paneer cubes cooked in a robust and spicy masala.' },
    { title: 'Mushroom Masala', description: 'Fresh mushrooms in a thick, spiced onion and tomato gravy.' },
    { title: 'Aaloo Patal Curry', description: 'Traditional potato and pointed gourd curry with rustic flavors.' },
    { title: 'Aaloo Gobi Ki Sabji', description: 'Classic dry preparation of potatoes and cauliflower.' },
    { title: 'Paneer Butter Masala', description: 'Rich cottage cheese in a creamy, buttery tomato gravy.' },
    { title: 'Paneer Bharta', description: 'Mashed paneer cooked with onions, tomatoes, and aromatic spices.' },
    { title: 'Paneer Do Pyaza', description: 'Paneer chunks cooked with double the amount of onions.' },
    { title: 'Mushroom Do Pyaza', description: 'Earthy mushrooms prepared with abundant onions and spices.' },
    { title: 'Veg Jhal Fry', description: 'Spicy and tangy mixed vegetable stir-fry.' },
    { title: 'Aloo Patal Korma', description: 'Potato and pointed gourd in a rich, mildly sweet yogurt-based gravy.' },
  ],
  'non-veg-main-course': [
    { title: 'Chicken Biryani', description: 'Aromatic basmati rice cooked with tender chicken and authentic spices.' },
    { title: 'Mutton Biryani', description: 'Slow-cooked fragrant rice layered with succulent mutton pieces.' },
  ],
  'rice': [
    { title: 'Plain Rice', description: 'Steamed fluffy white rice.' },
    { title: 'Jira Rice', description: 'Basmati rice tempered with cumin seeds and ghee.' },
    { title: 'Fried Rice', description: 'Wok-tossed rice with mixed vegetables and soy sauce.' },
    { title: 'Green Peas Rice', description: 'Aromatic rice cooked with fresh green peas.' },
    { title: 'Red Rice', description: 'Nutritious, earthy unpolished red rice sourced locally.' },
  ],
  'curry': [
    { title: 'Egg Curry', description: 'Boiled eggs simmered in a spiced onion and tomato gravy.' },
    { title: 'Fish Curry', description: 'Fresh local fish cooked in a tangy and spicy traditional sauce.' },
    { title: 'Chicken Curry', description: 'Homestyle chicken stew infused with aromatic tribal spices.' },
    { title: 'Mutton Curry', description: 'Slow-cooked tender mutton chunks in a robust, flavorful gravy.' },
    { title: 'Dal Fry', description: 'Yellow lentils tempered with cumin, garlic, and dried red chilies.' },
    { title: 'Tadka', description: 'Classic spiced lentil dish with a smoky garlic and ghee tempering.' },
  ],
  'thali': [
    { title: 'Veg Thali', description: 'A complete platter featuring assorted vegetables, dal, rice, and bread.' },
    { title: 'Egg Thali', description: 'Wholesome meal with egg curry, dal, rice, bread, and accompaniments.' },
    { title: 'Fish Thali', description: 'Traditional coastal platter starring local fish curry, rice, and sides.' },
    { title: 'Chicken Thali', description: 'Hearty meal including homestyle chicken curry, dal, rice, and bread.' },
    { title: 'Mutton Thali', description: 'Premium platter with slow-cooked mutton, rice, dal, and traditional sides.' },
  ],
  'beverages': [
    { title: 'Ice Tea', description: 'Chilled, refreshing tea with a hint of lemon and mint.' },
    { title: 'Regular Tea', description: 'Classic Indian chai brewed with milk and subtle spices.' },
    { title: 'Coffee', description: 'Freshly brewed hot coffee to energize your senses.' },
    { title: 'Chocolate Coffee', description: 'Rich coffee blended with indulgent chocolate notes.' },
    { title: 'Masala Cold Drink', description: 'Fizzy beverage spiced with cumin, black salt, and chaat masala.' },
    { title: 'Plain Lassi', description: 'Traditional sweet yogurt-based refreshing drink.' },
    { title: 'Mango Lassi', description: 'Creamy yogurt drink blended with sweet mango pulp.' },
    { title: 'Lichi Lassi', description: 'A tropical twist on the classic lassi with fresh lychee flavors.' },
    { title: 'Virgin Mojito', description: 'Cooling mocktail with fresh mint, lime, and soda.' },
    { title: 'Blue Lagoon', description: 'Vibrant, citrus-flavored refreshing blue mocktail.' },
    { title: 'Chass', description: 'Light and refreshing spiced buttermilk.' },
    { title: 'Madwa Shake', description: 'Unique, nutritious shake made from finger millet.' },
  ],
  'dessert': [
    { title: 'Red Rice Kheer', description: 'Traditional creamy pudding made with earthy red rice and milk.' },
    { title: 'Gulab Jamoon', description: 'Deep-fried milk solids soaked in fragrant sugar syrup.' },
    { title: 'Madwa Laddu', description: 'Healthy and sweet finger millet dessert balls.' },
  ],
  'jomha-special': [
    { title: 'Seasonal Saag', description: 'Freshly foraged seasonal forest greens cooked with minimal spices.' },
    { title: 'Suka Saag Gravy', description: 'Dried greens rehydrated and slow-cooked in a rustic gravy.' },
    { title: 'Sode Mandi Veg', description: 'A traditional tribal gruel preparation featuring local vegetables.' },
    { title: 'Sode Mandi Non-Veg (Leto)', description: 'Authentic tribal gruel enriched with succulent meat pieces.' },
    { title: 'Liver Masala', description: 'Tender liver stir-fried with an array of robust indigenous spices.' },
    { title: 'Jil Potra Patha', description: 'Meat delicacy wrapped in leaves and roasted over an open fire.' },
    { title: 'Bamboo Chicken Biryani', description: 'Chicken and rice slow-cooked inside a bamboo shoot for an earthy aroma.' },
    { title: 'Bamboo Mutton Biryani', description: 'Fragrant rice and mutton steamed within fresh green bamboo.' },
    { title: 'Bamboo Mutton', description: 'Mutton chunks slow-roasted in a bamboo hollow over woodfire.' },
    { title: 'Mutton Curry', description: 'JOMHA signature slow-cooked mutton in a thick, dark gravy.' },
    { title: 'Desi Chicken', description: 'Free-range country chicken cooked with authentic rustic flavors.' },
    { title: 'Chicken Curry', description: 'Homestyle chicken delicacy simmered with grounded local spices.' },
    { title: 'Veg Biryani', description: 'Aromatic layered rice and vegetable dish with a tribal twist.' },
    { title: 'Prawn Masala', description: 'Fresh prawns cooked in a spicy and tangy coastal-style gravy.' },
    { title: 'Mutton Paya', description: 'Slow-cooked, nutrient-rich mutton trotter soup bursting with flavors.' },
    { title: 'Mudi Mansa', description: 'Traditional combination of puffed rice served with spicy meat curry.' },
  ],
  'jomha-handi-special': [
    { title: 'Handi Veg Biryani', description: 'Vegetable biryani sealed and cooked in an earthen clay pot.' },
    { title: 'Handi Chicken', description: 'Aromatic chicken cooked slowly in a traditional clay handi.' },
    { title: 'Handi Mutton', description: 'Tender mutton slow-cooked in an earthen pot retaining natural juices.' },
    { title: 'Handi Chicken Biryani', description: 'Clay pot-cooked chicken biryani with deep, earthy flavors.' },
    { title: 'Handi Mutton Biryani', description: 'Signature mutton biryani dum-cooked in a rustic clay vessel.' },
    { title: 'Desi Chicken Handi', description: 'Country chicken prepared in an earthen pot over woodfire.' },
    { title: 'Handi Paneer Masala', description: 'Cottage cheese simmered in a clay pot for an authentic smoky touch.' },
  ],
  'jomha-patra-poda': [
    { title: 'Chicken Patra Poda', description: 'Spiced chicken wrapped in sal leaves and fire-roasted to perfection.' },
    { title: 'Fish Patra Poda', description: 'Fresh catch marinated, wrapped in leaves, and charred over hot coals.' },
    { title: 'Mushroom Patrapoda', description: 'Forest mushrooms roasted in leaf parcels for a smoky, earthy taste.' },
    { title: 'Paneer Patra Poda', description: 'Cottage cheese marinated and leaf-roasted over a traditional fire.' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  return (
    <div className="bg-warmwhite-pure min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-12 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 md:mb-24 flex flex-col items-center">
          <img 
            src="woman.png" 
            alt="Namaste Greeting" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-3 sm:mb-4" 
          />
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-superwide text-terracotta uppercase">JOMHA Provisions</span>
            <span className="w-6 sm:w-8 h-[1px] bg-terracotta/60"></span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-richblack uppercase leading-none mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
              JOMHA 
              <RotatingText
                texts={['MENU', 'OFFERINGS']}
                mainClassName="text-terracotta overflow-hidden justify-center pt-2 pb-8 sm:pb-12 -mt-2 -mb-8 sm:-mb-12"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
              />
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-lg text-richblack/60 font-light leading-relaxed px-2 sm:px-0">
            ଜୋମ୍ହା ସହିତ ଆଦିବାସୀ ଖାଦ୍ୟର ଅନୁଭବ ନିଅନ୍ତୁ
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-6 gap-y-2 sm:gap-y-4 mb-10 sm:mb-16 px-1 sm:px-0">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-2 sm:px-4 py-2 sm:py-3 text-[9px] sm:text-xs font-bold tracking-superwide uppercase transition-colors duration-300 ${
                activeCategory === category.id ? 'text-terracotta' : 'text-richblack/40 hover:text-richblack/70'
              }`}
            >
              {category.label}
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeMenuTab"
                  className="absolute bottom-0 left-2 right-2 sm:left-0 sm:right-0 h-[2px] bg-terracotta"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="max-w-4xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 sm:gap-y-8"
            >
              {menuData[activeCategory].map((item, idx) => (
                <div key={idx} className="group flex flex-col justify-between border-b border-richblack/5 pb-3 sm:pb-4">
                  <div className="flex-grow">
                    <div className="flex justify-start items-baseline">
                      <span className="mr-2 sm:mr-3 text-terracotta text-sm sm:text-base leading-none">•</span>
                      <h3 className="text-base sm:text-xl font-medium tracking-widest text-richblack uppercase group-hover:text-terracotta transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    {item.description && (
                      <p className="text-sm sm:text-base text-richblack/60 font-light leading-relaxed mt-1 sm:mt-2 max-w-2xl">
                        {item.description}
                      </p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 sm:gap-4 mt-3 sm:mt-4">
                        {item.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-[8px] sm:text-[9px] font-bold tracking-superwide text-terracotta/70 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
