/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Section from './Section';
import RotatingText from './RotatingText';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    itemNumber: 'Item No. 01',
    title: 'Bamboo Biryani',
    description: 'Aromatic rice and marinated meat slow-cooked inside fresh bamboo shoots over an open flame, infusing a unique woody and smoky flavor that defines tribal delicacy.',
    tags: ['Wild Foraged', 'Sweet & Pungent'],
    image: '/images/menu/bamboo.jpg'
  },
  {
    itemNumber: 'Item No. 02',
    title: 'Patra Poda',
    description: 'Marinated fish or meat wrapped in sal leaves and roasted to perfection. The leaves impart a distinct herbal aroma, keeping the meat succulent and flavorful.',
    tags: ['Stone-Ground', 'Savoury Earth'],
    image: '/images/menu/poda2.jpeg'
  },
  {
    itemNumber: 'Item No. 03',
    title: 'Handi Mansa',
    description: 'Rich and tender mutton curry slow-cooked in a traditional clay pot (handi) with whole spices. The clay pot cooking technique enhances the earthy taste of the dish.',
    tags: ['Ethically Sourced', 'Bold Firewood'],
    image: '/images/menu/jandi.jpeg'
  },
  {
    itemNumber: 'Item No. 04',
    title: 'Mudhi Mansa',
    description: 'A classic specialty featuring spicy, gravy-rich mutton curry served alongside crisp puffed rice (mudhi). A beloved breakfast or snack combination.',
    tags: ['Rustic Forage', 'Rich & Hearty'],
    image: '/images/menu/mudhi-mansa.jpeg'
  },
  {
    itemNumber: 'Item No. 05',
    title: 'Desi Chicken',
    description: 'Country chicken cooked in a rustic village style with hand-ground spices and local herbs. This dish offers a robust texture and an authentic, fiery taste.',
    tags: ['Free-Range', 'Spicy Earthen'],
    image: '/images/menu/desi-chicken.jpg'
  },
  {
    itemNumber: 'Item No. 06',
    title: 'Millet Special',
    description: 'Wholesome and nutritious dishes made from ragi and other millets, celebrating the staple grains of the tribal heartland. A healthy and delicious choice.',
    tags: ['Ancient Grains', 'Wholesome'],
    image: '/images/menu/millet-special.jpg'
  }
];

export default function MenuRoots() {
  return (
    <Section id="menu-roots" title={
      <span className="inline-flex items-center gap-3 flex-wrap justify-center lg:justify-start">
        JOMHA SPECIAL
        <RotatingText
          texts={['MENU', 'CUISINE']}
          mainClassName="text-terracotta overflow-hidden justify-center pt-2 pb-12 -mt-2 -mb-12"
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
    } subtitle="The Primitive Elements" index="02">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {menuItems.map((item, idx) => (
          <div key={idx} className="group relative bg-warmwhite-pure border border-richblack/[0.04] p-3 shadow-sm transition-all duration-150 hover:shadow-2xl hover:border-terracotta/10 flex flex-col overflow-hidden ">
            <div className="aspect-[4/3] relative w-full overflow-hidden bg-richblack/5 mb-4">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-150 " />
            </div>
            <div className="px-2 pb-2 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-terracotta uppercase">{item.itemNumber}</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium uppercase tracking-wider text-richblack mb-2 transition-colors duration-150 group-hover:text-terracotta">{item.title}</h3>
              <p className="text-sm sm:text-base text-richblack/60 leading-relaxed font-light mb-4 flex-grow line-clamp-3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center w-full">
        <Link to="/menu" className="group w-full sm:w-auto px-8 py-4 bg-richblack hover:bg-terracotta text-warmwhite text-[10px] font-bold tracking-superwide uppercase transition-all duration-150 rounded-none flex items-center justify-center gap-3 shadow-lg hover:shadow-terracotta/20  ">
          <span>View Full Menu</span>
          <i className="fa-solid fa-arrow-right-long text-[9px]  transition-transform"></i>
        </Link>
      </div>
    </Section>
  );
}
