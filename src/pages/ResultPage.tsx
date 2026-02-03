import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';

const ResultPage = () => {
  const typicalSigns = [
    'Gewicht stagniert trotz gesunder Ernährung',
    'Heißhunger in stressigen Phasen',
    'Müdigkeit am Morgen',
    'Besonders hartnäckiges Bauchfett',
  ];

  const commonMistakes = [
    'Noch weniger essen',
    'Noch striktere Diäten',
    'Mahlzeiten auslassen',
    'Mehr Training statt mehr Erholung',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="container-wide section-padding">
        <div className="max-w-2xl mx-auto">
          
          {/* 1. Headline */}
          <header className="text-center mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Was bei Deinem <span className="text-primary">Stoffwechsel</span> aktuell passiert
            </h1>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Viele Menschen kämpfen nicht mit fehlender Disziplin, sondern mit einem Körper, 
                der dauerhaft unter Spannung steht. <strong className="text-primary">Dein Ergebnis passt sehr gut zu diesem Muster.</strong>
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dein Stoffwechsel befindet sich aktuell in einem Stressmodus. Das kann durch mentalen 
              Druck, Schlafmangel oder ständige Einschränkungen entstehen. In diesem Zustand 
              priorisiert der Körper Sicherheit – nicht Fettverbrennung.
            </p>
          </section>

          {/* 4. Typical Signs */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Typische Anzeichen
            </h2>
            <ul className="space-y-3">
              {typicalSigns.map((sign, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              Häufige Fehler
            </h2>
            <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-5">
              <ul className="space-y-3">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. Outlook */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Was Dein Körper jetzt braucht
            </h2>
            <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-5">
              <p className="text-foreground leading-relaxed">
                Dein Körper braucht <strong className="text-secondary">Beruhigung, Struktur und Planung</strong> – nicht mehr 
                Disziplin oder Druck. Die gute Nachricht: Mit den richtigen Signalen kann sich 
                Dein Stoffwechsel wieder normalisieren.
              </p>
            </div>
          </section>

          {/* 7. CTA */}
          <section className="text-center">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Dein nächster Schritt
              </h3>
              <p className="text-muted-foreground mb-6">
                Erhalte eine ausführliche Auswertung mit konkreten Empfehlungen, 
                die zu Deinem Stoffwechsel-Typ passen.
              </p>
              <Button
                variant="cta"
                size="xl"
                className="w-full sm:w-auto group"
                asChild
              >
                <a 
                  href="https://drive.google.com/file/d/14yKWsTsyruBggxHCcYNs6lqHpKPf8EYH/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Der Stoffwechsel-Code
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Kein Spam. Kein Abo. Nur Deine persönliche Auswertung.
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <span className="mx-2">·</span>
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
        </p>
      </footer>
    </div>
  );
};

export default ResultPage;
