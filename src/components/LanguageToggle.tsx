import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'si' ? 'en' : 'si');
  };

  return (
    <button
      onClick={toggleLang}
      className="w-10 h-10 bg-white/80 text-maroon font-bold font-sans rounded-full flex items-center justify-center shadow-lg border border-gold hover:scale-110 transition-transform"
      aria-label="Toggle language"
    >
      {i18n.language === 'si' ? 'EN' : 'සිං'}
    </button>
  );
}
