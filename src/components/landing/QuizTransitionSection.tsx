import { CheckCircle2 } from "lucide-react";
import QuizContainer from "@/components/quiz/QuizContainer";

const QuizTransitionSection = () => {
  return (
    <section 
      id="quiz-section" 
      className="section-padding bg-gradient-to-b from-primary via-primary to-primary/95 text-primary-foreground"
    >
      <div className="container-wide">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Was blockiert Deine Fettverbrennung wirklich?
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto">
            Beantworte ein paar kurze Fragen und erhalte eine individuelle 
            Einschätzung Deines Stoffwechsels.
          </p>

          {/* SEO note */}
          <p className="text-sm text-primary-foreground/60 mt-4">
            Warum Hungern keine Lösung ist: Dein Körper braucht die richtigen Signale, nicht weniger Nahrung.
          </p>
        </div>

        {/* Quiz Widget */}
        <QuizContainer />

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/80 text-sm mt-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Kostenlos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Keine Anmeldung</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Sofortige Auswertung</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizTransitionSection;
