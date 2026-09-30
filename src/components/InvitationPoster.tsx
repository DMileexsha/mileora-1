import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import i18n from '../i18n';

export default function InvitationPoster() {
  const { t } = useTranslation();
  const isSi = i18n.language === 'si';

  const dateText = isSi ? weddingConfig.dateTextSi : weddingConfig.dateTextEn;
  const timeText = isSi ? weddingConfig.timeRangeSi : weddingConfig.timeRangeEn;
  const venueText = isSi ? weddingConfig.venueNameSi : weddingConfig.venueNameEn;
  const auspiciousText = isSi ? weddingConfig.auspiciousTimeSi : weddingConfig.auspiciousTimeEn;

  return (
    <div className="relative w-full min-h-screen pt-12 pb-16 px-6 text-center flex flex-col items-center justify-center">
      
      {/* New Background Image with Maroon Arch and Lotus */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/bg-design.png')] bg-cover bg-center bg-no-repeat w-full h-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-[320px] mx-auto flex flex-col items-center mt-12"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-5xl text-gold font-display font-bold mt-4 mb-2 drop-shadow-md">
          {t('hero.title')}
        </h1>

        {/* Hero Couple Image */}
        <div className="relative w-64 h-64 mx-auto my-4 flex items-center justify-center">
          <img 
            src="/couple.png" 
            alt="Couple" 
            className="w-full h-full object-contain z-10 mix-blend-multiply contrast-125"
          />
        </div>

        {/* Families and Names Section */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center w-full mt-2 mb-4">
          {/* Bride Side */}
          <div className="text-center flex flex-col justify-end h-full">
            <p className="font-serif text-ivory/80 text-[10px] sm:text-xs whitespace-pre-line leading-tight mb-2">
              {t('families.brideParents')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gold mt-auto drop-shadow-sm">
              {weddingConfig.brideNameSi}
            </h2>
          </div>

          {/* Center Rings */}
          <div className="flex items-center justify-center pt-6 px-2">
            <svg viewBox="0 0 100 60" className="w-10 h-8 text-gold drop-shadow-md">
              <circle cx="35" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
              <circle cx="65" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>

          {/* Groom Side */}
          <div className="text-center flex flex-col justify-end h-full">
            <p className="font-serif text-ivory/80 text-[10px] sm:text-xs whitespace-pre-line leading-tight mb-2">
              {t('families.groomParents')}
            </p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gold mt-auto drop-shadow-sm">
              {weddingConfig.groomNameSi}
            </h2>
          </div>
        </div>

        

        {/* Event Details 3 Columns */}
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-1 mb-8 border-t border-b border-gold/40 py-4 w-full">
          <div className="text-[10px] sm:text-xs font-serif text-ivory flex items-center justify-center text-center px-1">
            {dateText}
          </div>
          <div className="w-[1px] bg-gold/40 mx-1"></div>
          <div className="text-[10px] sm:text-xs font-serif text-ivory flex items-center justify-center text-center px-1">
            {venueText}
          </div>
          <div className="w-[1px] bg-gold/40 mx-1"></div>
          <div className="text-[10px] sm:text-xs font-serif text-ivory flex flex-col items-center justify-center text-center px-1">
            <span>{timeText.split(' (')[0]}</span>
            <span className="text-[9px] sm:text-[10px] mt-1 text-gold/80">({auspiciousText})</span>
          </div>
        </div>

        {/* Closing Lines */}
        <div className="text-center space-y-2 mb-8">
          <p className="font-serif text-ivory text-xs sm:text-sm">
            {t('closing.line1')}
          </p>
          <div className="border-t border-dashed border-gold/30 w-1/2 mx-auto my-2"></div>
          <p className="font-serif text-gold font-bold text-xs sm:text-sm">
            {t('closing.line2')}
          </p>
        </div>

        {/* Footer Text */}
        <div className="mt-4 pb-8">
          <a 
            href={weddingConfig.designerPhone} 
            className="text-[10px] font-serif text-ivory/60 hover:text-gold transition-colors block leading-tight"
          >
            Designed by: Milee Arts<br />
            074 164 7998
          </a>
        </div>

      </motion.div>
    </div>
  );
}
