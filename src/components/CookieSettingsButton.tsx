import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { Settings } from 'lucide-react';

const CookieSettingsButton = () => {
  const { consentGiven, openSettings } = useCookieConsent();

  // Only show if consent was already given (so user can change settings)
  if (!consentGiven) return null;

  return (
    <button
      onClick={openSettings}
      className="fixed bottom-4 left-4 z-[9990] w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center"
      aria-label="Cookie-Einstellungen öffnen"
      title="Cookie-Einstellungen"
    >
      <Settings className="w-5 h-5" />
    </button>
  );
};

export default CookieSettingsButton;
