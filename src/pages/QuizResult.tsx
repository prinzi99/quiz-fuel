import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Mail, 
  FileText,
  XCircle
} from 'lucide-react';
import { profileFullContent, type ProfileFullContent } from '@/lib/quizProfiles';
import type { ProfileType } from '@/lib/quizData';

const STORAGE_KEY = 'stoffwechsel-quiz-result';

const QuizResultPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileFullContent | null>(null);
  const [email, setEmail] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Load result from localStorage
    const storedResult = localStorage.getItem(STORAGE_KEY);
    
    if (storedResult) {
      try {
        const parsed = JSON.parse(storedResult);
        const profileId = parsed.profileId as ProfileType;
        const unlocked = parsed.unlocked === true;
        
        if (profileId && profileFullContent[profileId]) {
          setProfile(profileFullContent[profileId]);
          setIsUnlocked(unlocked);
          if (parsed.email) {
            setEmail(parsed.email);
          }
        } else {
          // Invalid result, redirect to quiz
          navigate('/#quiz-section');
        }
      } catch {
        navigate('/#quiz-section');
      }
    } else {
      // No result found, redirect to quiz
      navigate('/#quiz-section');
    }
  }, [navigate]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    
    // Store email and unlock status
    const storedResult = localStorage.getItem(STORAGE_KEY);
    if (storedResult) {
      const parsed = JSON.parse(storedResult);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...parsed,
        email,
        unlocked: true,
      }));
    }

    // Simulate API call
    setTimeout(() => {
      setIsUnlocked(true);
      setIsSubmitting(false);
      console.log('Email submitted:', email, 'Profile:', profile?.id);
    }, 500);
  };

  const handleRetakeQuiz = () => {
    localStorage.removeItem(STORAGE_KEY);
    navigate('/#quiz-section');
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Lädt...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-6">
          <p className="text-sm font-medium text-primary uppercase tracking-wide">
            Deine persönliche Auswertung
          </p>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-10 md:py-16">
        {/* 1. Neutral Headline */}
        <section className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {profile.headline}
          </h1>
          <p className="text-lg text-muted-foreground">
            {profile.subheadline}
          </p>
        </section>

        {/* 2. Validation */}
        <section className="mb-10">
          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 md:p-8">
            <p className="text-lg text-foreground leading-relaxed">
              {profile.validation}
            </p>
          </div>
        </section>

        {/* 3. Explanation */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Was bedeutet dieses Muster?
          </h2>
          <p className="text-foreground/90 leading-relaxed text-lg">
            {profile.explanation}
          </p>
        </section>

        {/* 4. Typical Signs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Typische Anzeichen
          </h2>
          <div className="bg-card border border-border rounded-2xl p-6">
            <ul className="space-y-3">
              {profile.typicalSigns.map((sign, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Email Gate - shown before unlock */}
        {!isUnlocked && (
          <section className="mb-10">
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Erhalte jetzt Deine vollständige Auswertung
                </h3>
                <p className="text-muted-foreground">
                  plus ein kostenloses PDF, das Dir zeigt, was Dein Stoffwechsel wirklich braucht.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full group"
                  disabled={!email || !email.includes('@') || isSubmitting}
                >
                  {isSubmitting ? 'Wird freigeschaltet...' : 'Vollständige Auswertung freischalten'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Deine Daten sind sicher. Kein Spam, jederzeit abbestellbar.
              </p>
            </div>
          </section>
        )}

        {/* Full content - shown after unlock */}
        {isUnlocked && (
          <>
            {/* 5. Common Mistakes */}
            <section className="mb-10 animate-fade-in-up">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Häufige Fehler – die vielen passieren
              </h2>
              <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-6">
                <ul className="space-y-3">
                  {profile.commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 6. Outlook */}
            <section className="mb-10 animate-fade-in-up">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Was jetzt möglich ist
              </h2>
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-foreground leading-relaxed">
                    {profile.outlook}
                  </p>
                </div>
              </div>
            </section>

            {/* Email Confirmation */}
            <section className="mb-10 animate-fade-in-up">
              <div className="bg-secondary/5 border border-secondary/10 rounded-xl p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="font-medium text-foreground">PDF ist unterwegs!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dein ausführliches PDF wird an <strong>{email}</strong> gesendet.
                </p>
              </div>
            </section>

            {/* 7. CTA to Lead Magnet */}
            <section className="mb-10 animate-fade-in-up">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center shadow-md">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <FileText className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Dein nächster Schritt
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  In Deinem PDF erfährst Du konkret, was Dein Stoffwechseltyp braucht 
                  und welche ersten Schritte wirklich etwas verändern.
                </p>
                <Button
                  variant="cta"
                  size="xl"
                  className="group"
                >
                  {profile.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </section>
          </>
        )}

        {/* Retake Quiz */}
        <div className="text-center">
          <Button 
            variant="ghost" 
            onClick={handleRetakeQuiz}
            className="text-muted-foreground"
          >
            Quiz erneut starten
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Stoffwechsel-Quiz. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </main>
  );
};

export default QuizResultPage;
