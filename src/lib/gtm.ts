// Google Tag Manager with Consent Mode V2

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

export interface ConsentModeSettings {
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
  analytics_storage: 'granted' | 'denied';
  functionality_storage: 'granted' | 'denied';
  personalization_storage: 'granted' | 'denied';
  security_storage: 'granted' | 'denied';
}

// Initialize dataLayer and gtag function
export const initializeDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments as unknown as Record<string, unknown>);
  };
};

// Set default consent state (must be called before GTM loads)
export const setDefaultConsent = () => {
  initializeDataLayer();
  
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'denied',
    personalization_storage: 'denied',
    security_storage: 'granted', // Always granted for essential functionality
    wait_for_update: 500, // Wait 500ms for consent update
  });

  // Enable URL passthrough for better conversion tracking even without cookies
  window.gtag('set', 'url_passthrough', true);
  // Redact ads data when consent is denied
  window.gtag('set', 'ads_data_redaction', true);
};

// Update consent after user makes a choice
export const updateConsent = (settings: {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}) => {
  if (!window.gtag) {
    initializeDataLayer();
  }

  const consentUpdate: ConsentModeSettings = {
    ad_storage: settings.marketing ? 'granted' : 'denied',
    ad_user_data: settings.marketing ? 'granted' : 'denied',
    ad_personalization: settings.marketing ? 'granted' : 'denied',
    analytics_storage: settings.analytics ? 'granted' : 'denied',
    functionality_storage: settings.functional ? 'granted' : 'denied',
    personalization_storage: settings.functional ? 'granted' : 'denied',
    security_storage: 'granted',
  };

  window.gtag('consent', 'update', consentUpdate);
  
  console.log('[GTM] Consent updated:', consentUpdate);
};

// Load Google Tag Manager script
export const loadGTM = (gtmId: string) => {
  if (!gtmId || document.getElementById('gtm-script')) {
    return;
  }

  // GTM Script
  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  
  const firstScript = document.getElementsByTagName('script')[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }

  // Push GTM start event
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  console.log('[GTM] Script loaded:', gtmId);
};

// Push events to dataLayer
export const pushToDataLayer = (event: Record<string, unknown>) => {
  if (!window.dataLayer) {
    initializeDataLayer();
  }
  window.dataLayer.push(event);
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  pushToDataLayer({
    event: 'page_view',
    page_path: path,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
) => {
  pushToDataLayer({
    event: eventName,
    ...eventParams,
  });
};
