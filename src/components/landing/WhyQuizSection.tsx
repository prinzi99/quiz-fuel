import { Link } from "react-router-dom";
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
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Warum ein Quiz der schnellste Weg zur richtigen Lösung ist
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Abnehmen ohne hungern beginnt damit, Deinen Körper zu verstehen.
        </p>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
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
        <div className="bg-muted/30 rounded-xl p-6 md:p-8 mb-10">
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
            variant="ctaSecondary" 
            size="lg" 
            asChild
          >
            <Link to="/quiz">
              Stoffwechsel-Quiz starten (ca. 2 Minuten)
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyQuizSection;
