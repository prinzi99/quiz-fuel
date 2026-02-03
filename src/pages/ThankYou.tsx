import { Helmet } from 'react-helmet-async';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/landing/Footer';
const ThankYou = () => {
  return <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Danke für Deine Anmeldung | Philipp's Biohack</title>
        <meta name="description" content="Deine Stoffwechsel-Auswertung ist unterwegs. Prüfe jetzt Deinen Posteingang." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header />

      <main className="flex-grow flex items-center justify-center py-12 md:py-20">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl shadow-lg p-8 md:p-12 text-center animate-fade-in-up">
            
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-8">
              <CheckCircle2 className="w-10 h-10 text-secondary" />
            </div>

            {/* Headline */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Deine Auswertung ist unterwegs!
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">In wenigen Sekunden erhältst Du Deine persönliche Stoffwechsel-Analyse per E-Mail.</p>

            {/* Email Check Box */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <span className="font-semibold text-foreground">Prüfe jetzt Deinen Posteingang</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">
                Die E-Mail kommt von: <strong>Philipp &lt;info2@prinzphilipp.at&gt;</strong>
              </p>
              
              <p className="text-sm text-muted-foreground">
                Schau auch im <strong>Spam-Ordner</strong> nach, falls die E-Mail nicht sofort ankommt.
              </p>
            </div>

            {/* What to expect */}
            <div className="text-left bg-muted/50 rounded-xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-4">Das erwartet Dich:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Deine vollständige Stoffwechsel-Analyse</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Konkrete Empfehlungen für Deinen Typ</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Ein kostenloses PDF mit Deinem Stoffwechsel-Profil</span>
                </li>
              </ul>
            </div>

            {/* Back to Home */}
            <Link to="/">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                Zurück zur Startseite
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>;
};
export default ThankYou;