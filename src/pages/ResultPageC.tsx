import { Button } from '@/components/ui/button';
import { ArrowRight, AlertCircle, XCircle, Lightbulb } from 'lucide-react';
import Header from '@/components/Header';

const ResultPageC = () => {
  const typicalSigns = [
    'Abnehmen extrem schwierig',
    'Schnelle Gewichtszunahme nach Diäten',
    'Kaum Spielraum bei Ernährung',
    'Frust trotz Kontrolle',
  ];

  const commonMistakes = [
    'Neue Diät starten',
    'Erneutes Kaloriendefizit',
    'Keto als Dauerlösung',
    'Angst vor Erhöhungen',
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
              Warum Dein Körper <span className="text-primary">nicht mehr reagiert</span>
            </h1>
          </header>

          {/* 2. Validation */}
          <section className="mb-10">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
              <p className="text-lg text-foreground leading-relaxed">
                Viele Diäten hinterlassen Spuren. <strong className="text-primary">Dein Ergebnis zeigt ein sehr typisches 
                Muster nach wiederholten Einschränkungen.</strong>
              </p>
            </div>
          </section>

          {/* 3. Explanation */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Was das bedeutet
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Dein Stoffwechsel hat gelernt, mit immer weniger Energie auszukommen. Dadurch 
              werden Fettreserven besonders stark geschützt – selbst bei strenger Ernährung 
              passiert wenig oder gar nichts.
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
                Hier braucht es <strong className="text-secondary">Strategie und Individualisierung</strong> – nicht noch 
                mehr Verzicht. Dein Stoffwechsel muss wieder lernen, dass Energie verfügbar ist.
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
              >
                Kostenlose Auswertung als PDF herunterladen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default ResultPageC;
