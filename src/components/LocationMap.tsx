import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Map, Navigation } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { SectionWrapper, LotusDivider } from './ui/Ornament';

export default function LocationMap() {
  const { t } = useTranslation();

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gold/30">
          <iframe
            src={weddingConfig.mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={weddingConfig.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-maroon text-ivory rounded-lg hover:bg-maroon-light transition-colors font-sans"
          >
            <Map className="w-5 h-5" />
            Google Maps
          </a>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={weddingConfig.appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-sans"
            >
              <Map className="w-5 h-5" />
              Apple Maps
            </a>
            
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=Mantara+Villa+Matara`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-maroon border border-maroon rounded-lg hover:bg-ivory transition-colors font-sans"
            >
              <Navigation className="w-5 h-5" />
              {t('location.directions')}
            </a>
          </div>
        </div>
      </motion.div>
      <LotusDivider />
    </SectionWrapper>
  );
}
