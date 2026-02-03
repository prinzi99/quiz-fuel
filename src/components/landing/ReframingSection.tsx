import { Ban, Heart, Sparkles } from "lucide-react";

const trustElements = [
  { icon: Ban, text: "Kein Hungern" },
  { icon: Heart, text: "Keine Extrem-Diäten" },
  { icon: Sparkles, text: "Keine Einheitslösung" },
];

const ReframingSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Main heading - SEO optimized */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-6">
          Dein Körper ist nicht kaputt – 
          <span className="text-primary"> er folgt nur anderen Regeln</span>
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
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Was ein langsamer Stoffwechsel wirklich bedeutet
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ein verlangsamter Stoffwechsel ist keine Krankheit, sondern eine Reaktion 
              Deines Körpers auf äußere Einflüsse. Er lässt sich verstehen und beeinflussen.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/10 hover:border-secondary/20 transition-colors">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Warum Stoffwechsel-Störungen Abnehmen blockieren
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Wenn Dein Stoffwechsel nicht optimal arbeitet, werden selbst die besten 
              Ernährungspläne nicht die gewünschten Ergebnisse bringen.
            </p>
          </div>
        </div>

        {/* Trust elements */}
        <div className="flex flex-wrap justify-center gap-3">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-secondary-foreground font-medium"
            >
              <element.icon className="w-4 h-4" />
              <span className="text-sm">{element.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReframingSection;
