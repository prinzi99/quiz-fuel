import { CircleAlert, Zap, Scale, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    text: "Du hast verschiedene Ernährungsansätze ausprobiert und suchst nach Orientierung",
  },
  {
    icon: Zap,
    text: "Du möchtest besser verstehen, wie Dein Körper auf verschiedene Lebensmittel reagiert",
  },
  {
    icon: CircleAlert,
    text: "Du interessierst Dich für Zusammenhänge zwischen Ernährung und Wohlbefinden",
  },
  {
    icon: HelpCircle,
    text: "Du möchtest mehr über individuelle Unterschiede beim Stoffwechsel erfahren",
  },
];

const IdentificationSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        {/* Section heading - Google Ads compliant */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Erkennst Du Dich hier wieder?
        </h2>

        {/* Pain points */}
        <div className="space-y-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground text-lg leading-relaxed pt-1.5">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Transition text - Google Ads compliant */}
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Wenn Du Dich hier wiedererkennst, könnte das Quiz interessant für Dich sein.
        </p>
      </div>
    </section>
  );
};

export default IdentificationSection;
