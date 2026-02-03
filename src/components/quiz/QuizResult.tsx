import { Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QuentnEmailForm } from './QuentnEmailForm';
import type { ProfileResult } from '@/lib/quizData';

interface QuizResultProps {
  result: ProfileResult;
  showFullResult: boolean;
  email: string;
  onEmailChange: (email: string) => void;
  onSubmitEmail: () => void;
  onReset: () => void;
}

const QuizResult = ({
  result,
  showFullResult,
  onSubmitEmail,
  onReset,
}: QuizResultProps) => {

  if (!showFullResult) {
    // Teaser view with Quentn email gate
    return (
      <div className="animate-fade-in-up">
        {/* Result Teaser */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-6">
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>

          <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-3">
            Dein Ergebnis
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {result.teaser.headline}
          </h3>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {result.teaser.description}
          </p>
        </div>

        {/* Quentn Email Gate */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="text-center mb-6">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-foreground mb-2">
              Erhalte jetzt Deine vollständige Auswertung
            </h4>
            <p className="text-muted-foreground">
              plus ein kostenloses PDF, das Dir zeigt, was Dein Stoffwechsel wirklich braucht.
            </p>
          </div>

          {/* Quentn Form Integration - Profile-specific form IDs */}
          <QuentnEmailForm 
            onEmailSubmit={onSubmitEmail}
            buttonText="👉 Auswertung per Mail erhalten"
            formId={result.id === 'A' ? '2913' : result.id === 'B' ? '2918' : '2923'}
          />

          <p className="text-xs text-muted-foreground text-center mt-4">
            Deine Daten sind sicher. Kein Spam, jederzeit abbestellbar.
          </p>
        </div>
      </div>
    );
  }

  // Full result view (after email submission)
  return (
    <div className="animate-fade-in-up">
      {/* Success Message */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/20 mb-6">
          <CheckCircle2 className="w-8 h-8 text-secondary" />
        </div>

        <p className="text-sm font-semibold text-secondary uppercase tracking-wide mb-2">
          Auswertung freigeschaltet
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {result.fullResult.headline}
        </h3>
      </div>

      {/* Full Result Content */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 shadow-lg">
        <p className="text-lg text-foreground leading-relaxed mb-6">
          {result.fullResult.description}
        </p>

        <div className="space-y-3 mb-6">
          {result.fullResult.keyPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span className="text-foreground">{point}</span>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
          <p className="text-sm font-semibold text-primary mb-2">Nächster Schritt</p>
          <p className="text-foreground">{result.fullResult.nextSteps}</p>
        </div>
      </div>

      {/* Email Confirmation */}
      <div className="text-center bg-secondary/10 rounded-xl p-5 mb-6">
        <Mail className="w-6 h-6 text-secondary mx-auto mb-2" />
        <p className="text-sm text-foreground">
          Dein ausführliches PDF ist unterwegs. Prüfe Deinen Posteingang!
        </p>
      </div>

      {/* Reset Button */}
      <div className="text-center">
        <Button variant="ghost" onClick={onReset} className="text-muted-foreground hover:text-foreground">
          Quiz erneut starten
        </Button>
      </div>
    </div>
  );
};

export default QuizResult;
