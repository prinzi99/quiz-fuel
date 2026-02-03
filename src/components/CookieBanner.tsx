import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useCookieConsent, ConsentSettings } from '@/contexts/CookieConsentContext';
import { Settings, Shield, ChevronDown, ChevronUp, X } from 'lucide-react';

const CookieBanner = () => {
  const {
    showBanner,
    showSettings,
    settings,
    acceptAll,
    acceptNecessary,
    rejectAll,
    saveSettings,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  const [localSettings, setLocalSettings] = useState<Omit<ConsentSettings, 'necessary'>>({
    functional: settings.functional,
    analytics: settings.analytics,
    marketing: settings.marketing,
  });

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!showBanner && !showSettings) return null;

  const handleSaveSettings = () => {
    saveSettings(localSettings);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie ermöglichen grundlegende Funktionen wie Seitennavigation, Formulare und Double-Opt-In-Verfahren (z.B. Quentn).',
      required: true,
      enabled: true,
    },
    {
      id: 'functional',
      name: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, wie z.B. das Speichern von Präferenzen oder das Merken von Einstellungen.',
      required: false,
      enabled: localSettings.functional,
    },
    {
      id: 'analytics',
      name: 'Analyse-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren. Die Daten werden anonymisiert erfasst und dienen der Verbesserung unserer Inhalte.',
      required: false,
      enabled: localSettings.analytics,
    },
    {
      id: 'marketing',
      name: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten. Sie ermöglichen die Messung und Optimierung von Werbekampagnen (z.B. Google Ads).',
      required: false,
      enabled: localSettings.marketing,
    },
  ];

  // Settings Modal
  if (showSettings) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-background border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Cookie-Einstellungen</h2>
                <p className="text-sm text-muted-foreground">Verwalten Sie Ihre Datenschutzpräferenzen</p>
              </div>
            </div>
            <button
              onClick={closeSettings}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cookieCategories.map((category) => (
              <div
                key={category.id}
                className="border border-border rounded-xl overflow-hidden"
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{category.name}</span>
                        {category.required && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            Erforderlich
                          </span>
                        )}
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="ml-4" onClick={(e) => e.stopPropagation()}>
                    <Switch
                      checked={category.enabled}
                      disabled={category.required}
                      onCheckedChange={(checked) => {
                        if (!category.required) {
                          setLocalSettings((prev) => ({
                            ...prev,
                            [category.id]: checked,
                          }));
                        }
                      }}
                    />
                  </div>
                </div>
                {expandedCategory === category.id && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground">
                    {category.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-border bg-muted/30">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1" onClick={rejectAll}>
                Alle ablehnen
              </Button>
              <Button variant="outline" className="flex-1" onClick={acceptNecessary}>
                Nur notwendige
              </Button>
              <Button variant="default" className="flex-1" onClick={handleSaveSettings}>
                Auswahl speichern
              </Button>
            </div>
            <div className="mt-4 text-center">
              <a
                href="/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Datenschutzerklärung
              </a>
              <span className="mx-2 text-muted-foreground">·</span>
              <a
                href="/impressum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Banner
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground mb-1">
                Wir respektieren Ihre Privatsphäre
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung auf unserer Website zu verbessern. 
                Einige Cookies sind notwendig für die Grundfunktionen (z.B. Formulare, Double-Opt-In), 
                während andere uns helfen, unsere Inhalte und Werbung zu optimieren.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button
              variant="default"
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={acceptAll}
            >
              Alle akzeptieren
            </Button>
            <Button variant="outline" className="flex-1" onClick={acceptNecessary}>
              Nur notwendige
            </Button>
            <Button variant="outline" className="flex-1" onClick={rejectAll}>
              Ablehnen
            </Button>
            <Button
              variant="ghost"
              className="flex-1"
              onClick={openSettings}
            >
              <Settings className="w-4 h-4 mr-2" />
              Individuelle Auswahl
            </Button>
          </div>

          {/* Links */}
          <div className="text-center text-sm">
            <a
              href="/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Datenschutzerklärung
            </a>
            <span className="mx-2 text-muted-foreground">·</span>
            <a
              href="/impressum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
