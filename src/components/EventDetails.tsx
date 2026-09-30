import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { SectionWrapper, LotusDivider } from './ui/Ornament';
import i18n from '../i18n';

export default function EventDetails() {
  const { t } = useTranslation();
  const isSi = i18n.language === 'si';

  const dateText = isSi ? weddingConfig.dateTextSi : weddingConfig.dateTextEn;
  const timeText = isSi ? weddingConfig.timeRangeSi : weddingConfig.timeRangeEn;
  const venueText = isSi ? weddingConfig.venueNameSi : weddingConfig.venueNameEn;
  const auspiciousText = isSi ? weddingConfig.auspiciousTimeSi : weddingConfig.auspiciousTimeEn;

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4 text-maroon-dark bg-white/40 p-4 rounded-xl">
          <CalendarDays className="w-8 h-8 text-gold flex-shrink-0" />
          <p className="font-serif text-lg">{dateText}</p>
        </div>

        <div className="flex items-center gap-4 text-maroon-dark bg-white/40 p-4 rounded-xl">
          <Clock className="w-8 h-8 text-gold flex-shrink-0" />
          <div>
            <p className="font-serif text-lg">{timeText}</p>
            <p className="text-sm font-sans mt-1 text-maroon/70">
              {t('event.auspiciousTime')}: {auspiciousText}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-maroon-dark bg-white/40 p-4 rounded-xl">
          <MapPin className="w-8 h-8 text-gold flex-shrink-0" />
          <p className="font-serif text-lg">{venueText}</p>
        </div>
      </motion.div>
      <LotusDivider />
    </SectionWrapper>
  );
}
