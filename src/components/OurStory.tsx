import { motion } from 'framer-motion';
import { SectionWrapper, LotusDivider } from './ui/Ornament';
import i18n from '../i18n';

const photos = [
  '/gallery/story1.jpg',
  '/gallery/story2.png',
  '/gallery/story3.png',
  '/gallery/story4.png',
];

export default function OurStory() {
  const isSi = i18n.language === 'si';

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl sm:text-5xl font-serif text-maroon mb-2">
          {isSi ? "අපේ කතාව" : "Our Story"}
        </h2>
        <p className="font-serif text-maroon-light">
          {isSi ? "මතක සටහන්" : "Beautiful moments together"}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
        {photos.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden ${
              index % 2 === 0 ? 'mt-4 md:mt-8' : 'mb-4 md:mb-8'
            } aspect-[11/15]`}
          >
            {/* The Photo (inset so it stays hidden under the thick wavy border) */}
            <div className="absolute top-[3%] bottom-[3%] left-[4.5%] right-[4.5%] overflow-hidden rounded-[20px]">
              <img
                src={src}
                alt={`Pre-shoot moment ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
            
            
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8">
        <LotusDivider />
      </div>
    </SectionWrapper>
  );
}
