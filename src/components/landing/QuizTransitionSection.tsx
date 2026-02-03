import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const QuizTransitionSection = () => {
  return (
    <section 
      id="quiz-section" 
      className="section-padding bg-quiz-section text-quiz-section-foreground"
    >
      <div className="container-narrow text-center">
        {/* Main heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Was blockiert Deine Fettverbrennung wirklich?
        </h2>

        <p className="text-lg text-quiz-section-foreground/80 max-w-xl mx-auto mb-10">
          Beantworte ein paar kurze Fragen und erhalte eine individuelle 
          Einschätzung Deines Stoffwechsels.
        </p>

        {/* SEO note */}
        <p className="text-sm text-quiz-section-foreground/60 mb-8">
          Warum Hungern keine Lösung ist: Dein Körper braucht die richtigen Signale, nicht weniger Nahrung.
        </p>

        {/* Quiz placeholder area */}
        <div className="bg-background/10 backdrop-blur-sm rounded-2xl border border-quiz-section-foreground/20 p-8 md:p-12 mb-8">
          {/* Quiz widget placeholder */}
          <div className="bg-background/5 rounded-xl border-2 border-dashed border-quiz-section-foreground/30 p-8 md:p-12 min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-quiz-section-foreground/60 text-sm mb-4">
              Hier wird das Quiz-Widget eingebunden
            </p>
            
            {/* Example CTA button that would start the quiz */}
            <Button 
              variant="cta" 
              size="xl"
              className="group"
            >
              Quiz jetzt starten
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-quiz-section-foreground/70 text-sm">
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