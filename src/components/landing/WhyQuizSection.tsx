import { Button } from "@/components/ui/button";
import { Target, Clock, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Stoffwechsel-Typ erkennen",
    description: "Ob Fettstoffwechsel oder Kohlenhydrat-Stoffwechsel – Dein Typ entscheidet über Erfolg oder Blockade.",
  },
  {
    icon: Lightbulb,
    title: "Erste Orientierung",
    description: "Das Quiz liefert keine Diagnose, sondern Klarheit über mögliche Ansatzpunkte.",
  },
  {
    icon: Clock,
    title: "Nur 2 Minuten",
    description: "Kurze, gezielte Fragen – ohne Anmeldung, ohne Verpflichtung.",
  },
];

const WhyQuizSection = () => {
  const scrollToQuiz = () => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          Warum ein <span className="text-primary">Quiz</span> der schnellste Weg ist
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Abnehmen ohne hungern beginnt damit, Deinen Körper zu verstehen.
        </p>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* SEO content block */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Fettstoffwechsel vs. Kohlenhydrat-Stoffwechsel
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Manche Menschen verbrennen Fett effizienter, andere Kohlenhydrate. 
            Ein pauschaler Keto Ernährungsplan funktioniert deshalb nicht für jeden gleich. 
            Das Quiz hilft Dir herauszufinden, welcher Typ Du bist und warum 
            Deine bisherigen Versuche möglicherweise nicht zum Ziel geführt haben.
          </p>
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Button 
            variant="cta" 
            size="lg" 
            onClick={scrollToQuiz}
          >
            Stoffwechsel-Quiz starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyQuizSection;
