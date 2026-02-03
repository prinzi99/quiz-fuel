import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { setDefaultConsent, updateConsent, loadGTM, initializeDataLayer } from '@/lib/gtm';

// GTM Container ID - Replace with your actual GTM ID
const GTM_ID = import.meta.env.VITE_GTM_ID || '';

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
  const [gtmInitialized, setGtmInitialized] = useState(false);

  // Initialize GTM with default denied consent on first load
  useEffect(() => {
    if (gtmInitialized) return;
    
    // Initialize dataLayer and set default consent BEFORE loading GTM
    initializeDataLayer();
    setDefaultConsent();
    
    // Load GTM script (it will respect the default denied consent)
    if (GTM_ID) {
      loadGTM(GTM_ID);
    }
    
    setGtmInitialized(true);
  }, [gtmInitialized]);

  // Load saved consent on mount
  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    const savedSettings = localStorage.getItem(SETTINGS_STORAGE_KEY);

    if (savedConsent === 'true' && savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings) as ConsentSettings;
        const restoredSettings = { ...parsed, necessary: true };
        setSettings(restoredSettings);
        setConsentGiven(true);
        setShowBanner(false);
        
        // Restore consent state to GTM
        updateConsent({
          analytics: restoredSettings.analytics,
          marketing: restoredSettings.marketing,
          functional: restoredSettings.functional,
        });
      } catch {
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  // Update GTM consent when settings change
  useEffect(() => {
    if (!consentGiven) return;

    // Update Google Consent Mode
    updateConsent({
      analytics: settings.analytics,
      marketing: settings.marketing,
      functional: settings.functional,
    });

    // Log for debugging
    if (settings.analytics) {
      console.log('[Cookie Consent] Analytics enabled - GTM will track');
    }
    if (settings.marketing) {
      console.log('[Cookie Consent] Marketing enabled - Ads tracking active');
    }
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
