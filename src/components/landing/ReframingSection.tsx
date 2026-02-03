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
        {/* Main heading - Google Ads compliant */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
          Was für eine Person gut funktioniert, muss nicht automatisch für alle gleich passend sein
        </h2>

        {/* Explanatory text */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Jeder Stoffwechsel reagiert unterschiedlich auf Nahrung, Stress und Lebensstil. 
            Verschiedene Ernährungsansätze können bei verschiedenen Menschen 
            <strong className="text-foreground"> unterschiedliche Ergebnisse</strong> zeigen.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Allgemeine Ernährungsempfehlungen berücksichtigen selten individuelle Faktoren 
            wie persönliche Vorlieben, Lebensstil und körperliche Voraussetzungen.
          </p>
        </div>

        {/* Information cards - Google Ads compliant */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Stoffwechsel besser verstehen
            </h3>
            <p className="text-muted-foreground">
              Der Stoffwechsel ist ein komplexes Zusammenspiel verschiedener Prozesse. 
              Mehr Wissen darüber kann helfen, eigene Erfahrungen besser einzuordnen.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-muted/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Individuelle Unterschiede beachten
            </h3>
            <p className="text-muted-foreground">
              Menschen reagieren unterschiedlich auf Ernährungsweisen. 
              Ein besseres Verständnis der eigenen Situation kann hilfreich sein.
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
