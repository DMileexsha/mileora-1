import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { SectionWrapper, LotusDivider } from './ui/Ornament';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="pt-20 pb-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl text-maroon font-display font-bold mb-8">
          {t('hero.title')}
        </h1>

        <div className="relative w-64 h-64 mx-auto my-8">
          {/* Floral Wreath / Circle */}
          <div className="absolute inset-0 border-[6px] border-gold rounded-full opacity-80" />
          <div className="absolute inset-2 border-[2px] border-gold rounded-full opacity-60 border-dashed" />
          
          {/* Placeholder for Couple Image */}
          <div className="absolute inset-4 rounded-full overflow-hidden bg-ivory-dark flex items-center justify-center">
            <img 
              src="/couple.png" 
              alt="Couple" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if no image
                (e.target as HTMLImageElement).style.display = 'none';
                (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-maroon/50 font-display text-4xl">H & S</span>';
              }}
            />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-bold text-gold my-6 drop-shadow-sm">
          {weddingConfig.brideNameSi} <span className="text-2xl text-maroon">&</span> {weddingConfig.groomNameSi}
        </h2>

        <p className="font-serif text-lg text-maroon-dark mt-4">
          {t('hero.withJoy')}
        </p>

        <LotusDivider />
      </motion.div>
    </SectionWrapper>
  );
}
