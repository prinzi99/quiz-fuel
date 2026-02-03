import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Clock, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Mögliche Stoffwechsel-Schwerpunkte",
    description: "Manche Menschen reagieren unterschiedlich auf Makronährstoffe – das Quiz gibt eine erste Orientierung.",
  },
  {
    icon: Lightbulb,
    title: "Hinweise zur Selbstreflexion",
    description: "Keine Diagnose, sondern Anregungen zum Nachdenken über die eigene Situation.",
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
        {/* Section heading - Google Ads compliant */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
          Warum dieses Quiz ein guter Einstieg sein kann
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Ein besseres Verständnis des eigenen Körpers kann ein hilfreicher erster Schritt sein.
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

        {/* Info content block - Google Ads compliant */}
        <div className="bg-muted/30 rounded-xl p-6 md:p-8 mb-10">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Unterschiedliche Stoffwechsel-Schwerpunkte
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Menschen können unterschiedlich auf verschiedene Makronährstoffe reagieren. 
            Das Quiz bietet eine erste Orientierung und Anregungen zur Selbstreflexion – 
            es ersetzt jedoch keine professionelle Beratung.
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
