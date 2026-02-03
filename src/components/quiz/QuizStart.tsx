import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield } from 'lucide-react';

interface QuizStartProps {
  onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
  return (
    <div className="text-center animate-fade-in-up">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        Stoffwechsel-Analyse
      </h3>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        Finde heraus, welcher Stoffwechsel-Typ Du bist und was Deine Fettverbrennung wirklich blockiert.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>ca. 2 Minuten</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span>Keine Anmeldung nötig</span>
        </div>
      </div>

      <Button
        variant="cta"
        size="xl"
        onClick={onStart}
        className="group"
      >
        Quiz jetzt starten
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
};

export default QuizStart;
