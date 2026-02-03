import { Ban, Heart, Sparkles } from "lucide-react";

const trustElements = [
  { icon: Ban, text: "Kein Hungern" },
  { icon: Heart, text: "Keine Extrem-Diäten" },
  { icon: Sparkles, text: "Keine Einheitslösung" },
];

const ReframingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Main heading - SEO optimized */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
          Dein Körper ist nicht kaputt – er folgt nur anderen Regeln
        </h2>

        {/* Explanatory text */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Jeder Stoffwechsel reagiert unterschiedlich auf Nahrung, Stress und Lebensstil. 
            Was bei einer Person funktioniert, kann bei einer anderen zu einem 
            <strong className="text-foreground"> langsamen Stoffwechsel</strong> führen.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Standard-Diäten – ob ketogene Ernährung, Low Carb oder klassische Keto Diät – 
            berücksichtigen selten individuelle Faktoren wie Hormone, Timing und Stressbelastung.
          </p>
        </div>

        {/* SEO-optimized secondary headings */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Was ein langsamer Stoffwechsel wirklich bedeutet
            </h3>
            <p className="text-muted-foreground">
              Ein verlangsamter Stoffwechsel ist keine Krankheit, sondern eine Reaktion 
              Deines Körpers auf äußere Einflüsse. Er lässt sich verstehen und beeinflussen.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Warum Stoffwechsel-Störungen Abnehmen blockieren
            </h3>
            <p className="text-muted-foreground">
              Wenn Dein Stoffwechsel nicht optimal arbeitet, werden selbst die besten 
              Ernährungspläne nicht die gewünschten Ergebnisse bringen.
            </p>
          </div>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/20 text-secondary-foreground"
            >
              <element.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{element.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReframingSection;