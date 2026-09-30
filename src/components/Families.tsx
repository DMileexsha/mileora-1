import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SectionWrapper, LotusDivider } from './ui/Ornament';

export default function Families() {
  const { t } = useTranslation();

  return (
    <SectionWrapper className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="bg-white/60 p-6 rounded-xl shadow-sm border border-gold/20">
          <p className="font-serif text-maroon-dark whitespace-pre-line leading-relaxed">
            {t('families.brideParents')}
          </p>
        </div>

        <div className="flex justify-center">
          <svg className="w-12 h-12 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="9" cy="12" r="5" />
            <circle cx="15" cy="12" r="5" />
          </svg>
        </div>

        <div className="bg-white/60 p-6 rounded-xl shadow-sm border border-gold/20">
          <p className="font-serif text-maroon-dark whitespace-pre-line leading-relaxed">
            {t('families.groomParents')}
          </p>
        </div>
      </motion.div>
      <LotusDivider />
    </SectionWrapper>
  );
}
