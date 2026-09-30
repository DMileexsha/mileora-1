import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/weddingConfig';
import { SectionWrapper } from './ui/Ornament';

export default function Closing() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="text-center pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center gap-6"
      >
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-gold mb-4">
          {/* Simple Doves Placeholder */}
          <path d="M20 50 Q40 20 50 50 Q40 80 20 50 Z" fill="currentColor" opacity="0.8"/>
          <path d="M80 50 Q60 20 50 50 Q60 80 80 50 Z" fill="currentColor" opacity="0.8"/>
        </svg>

        <p className="font-serif text-maroon text-lg">
          {t('closing.line1')}
        </p>
        <p className="font-serif text-maroon font-bold text-xl">
          {t('closing.line2')}
        </p>
      </motion.div>

      <footer className="absolute bottom-0 left-0 w-full p-4 text-center">
        <a 
          href={weddingConfig.designerPhone} 
          className="text-xs font-sans text-maroon/60 hover:text-maroon transition-colors"
        >
          {weddingConfig.footerCredit}
        </a>
      </footer>
    </SectionWrapper>
  );
}
