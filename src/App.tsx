import { useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { weddingConfig } from './config/weddingConfig';
import { useGuestName } from './hooks/useGuestName';
import './i18n';

// Components
import CurtainGate from './components/CurtainGate';
import InvitationPoster from './components/InvitationPoster';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import LocationMap from './components/LocationMap';
import RSVPForm from './components/RSVPForm';
import MusicToggle from './components/MusicToggle';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const { t } = useTranslation();
  const guestName = useGuestName();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{t('title')} - {weddingConfig.brideNameSi} & {weddingConfig.groomNameSi}</title>
        <meta name="description" content={t('hero.withJoy')} />
        <meta property="og:title" content={`${t('title')} - ${weddingConfig.brideNameSi} & ${weddingConfig.groomNameSi}`} />
        <meta property="og:description" content={t('hero.withJoy')} />
        <meta property="og:image" content={`${weddingConfig.siteUrl}/couple.png`} />
      </Helmet>

      {/* Floating Controls */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        <LanguageToggle />
        <MusicToggle isPlaying={isOpen} />
      </div>

      <CurtainGate isOpen={isOpen} onOpen={() => setIsOpen(true)} />

      {isOpen && (
        <main className="min-h-screen relative overflow-hidden bg-ivory">
          
          <div className="relative z-10 max-w-md mx-auto shadow-2xl min-h-screen bg-[#e6e2d3]">
            
            {/* Personalization */}
            {guestName && (
              <div className="pt-6 px-6 text-center text-maroon font-serif text-xl font-medium">
                {t('personal.dear', { name: guestName })}
              </div>
            )}

            <InvitationPoster />
            
            <div className="relative px-4 py-8 space-y-2 bg-[url('/bg-rest.jpg')] bg-[length:100%_auto] bg-repeat-y bg-top">
              <Countdown />
              <OurStory />
              <LocationMap />
              <RSVPForm />
            </div>
            
          </div>
        </main>
      )}
    </HelmetProvider>
  );
}

export default App;
