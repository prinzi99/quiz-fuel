import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface ConsentSettings {
  necessary: boolean; // Always true, cannot be changed
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieConsentContextType {
  consentGiven: boolean;
  settings: ConsentSettings;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  rejectAll: () => void;
  saveSettings: (settings: Omit<ConsentSettings, 'necessary'>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  closeBanner: () => void;
}

const defaultSettings: ConsentSettings = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_STORAGE_KEY = 'cookie_consent';
const SETTINGS_STORAGE_KEY = 'cookie_settings';

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [settings, setSettings] = useState<ConsentSettings>(defaultSettings);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Load saved consent on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (savedConsent === 'true' && savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings) as ConsentSettings;
        setSettings({ ...parsed, necessary: true });
        setConsentGiven(true);
        setShowBanner(false);
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Load scripts based on consent
  useEffect(() => {
    if (!consentGiven) return;

    // Analytics scripts (e.g., Google Analytics)
    if (settings.analytics) {
      // Add your analytics scripts here
      console.log('[Cookie Consent] Analytics enabled');
    }

    // Marketing scripts (e.g., Google Ads, Facebook Pixel)
    if (settings.marketing) {
      // Add your marketing scripts here
      console.log('[Cookie Consent] Marketing enabled');
    }

    // Functional scripts
    if (settings.functional) {
      console.log('[Cookie Consent] Functional cookies enabled');
    }
  }, [consentGiven, settings]);

  const saveToStorage = useCallback((newSettings: ConsentSettings) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'true');
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));
  }, []);

  const acceptAll = useCallback(() => {
    const allAccepted: ConsentSettings = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setSettings(allAccepted);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(allAccepted);
  }, [saveToStorage]);

  const acceptNecessary = useCallback(() => {
    const necessaryOnly: ConsentSettings = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setSettings(necessaryOnly);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(necessaryOnly);
  }, [saveToStorage]);

  const rejectAll = useCallback(() => {
    const rejected: ConsentSettings = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setSettings(rejected);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(rejected);
  }, [saveToStorage]);

  const saveSettings = useCallback((newSettings: Omit<ConsentSettings, 'necessary'>) => {
    const fullSettings: ConsentSettings = {
      ...newSettings,
      necessary: true,
    };
    setSettings(fullSettings);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
    saveToStorage(fullSettings);
  }, [saveToStorage]);

  const openSettings = useCallback(() => {
    setShowSettings(true);
  }, []);

  const closeSettings = useCallback(() => {
    setShowSettings(false);
  }, []);

  const closeBanner = useCallback(() => {
    // Don't close banner without consent - GDPR requires explicit action
  }, []);

  return (
    <CookieConsentContext.Provider
      value={{
        consentGiven,
        settings,
        showBanner,
        showSettings,
        acceptAll,
        acceptNecessary,
        rejectAll,
        saveSettings,
        openSettings,
        closeSettings,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
};
