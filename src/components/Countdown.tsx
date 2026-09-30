import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
import { weddingConfig } from '../config/weddingConfig';
import { SectionWrapper, LotusDivider } from './ui/Ornament';

export default function Countdown() {
  const { t } = useTranslation();
  const { timeLeft, hasArrived } = useCountdown(weddingConfig.WEDDING_DATE);

  return (
    <SectionWrapper className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {hasArrived ? (
          <h3 className="text-2xl font-display font-bold text-maroon animate-pulse">
            {t('countdown.arrived')}
          </h3>
        ) : (
          <div className="flex justify-center gap-4 sm:gap-6">
            <TimeBox value={timeLeft.days} label={t('countdown.days')} />
            <TimeBox value={timeLeft.hours} label={t('countdown.hours')} />
            <TimeBox value={timeLeft.minutes} label={t('countdown.minutes')} />
            <TimeBox value={timeLeft.seconds} label={t('countdown.seconds')} />
          </div>
        )}
      </motion.div>
      <LotusDivider />
    </SectionWrapper>
  );
}

function TimeBox({ value, label }: { value: number, label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-maroon rounded-lg flex items-center justify-center text-ivory text-2xl sm:text-3xl font-display shadow-lg border border-gold">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-xs sm:text-sm font-sans mt-2 text-maroon-dark">{label}</span>
    </div>
  );
}
