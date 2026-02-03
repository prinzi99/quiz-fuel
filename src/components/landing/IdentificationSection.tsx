import { CircleAlert, Zap, Scale, HelpCircle } from "lucide-react";

const painPoints = [
  {
    icon: Scale,
    text: "Du ernährst Dich gesund oder Low Carb – aber Dein Gewicht stagniert",
  },
  {
    icon: Zap,
    text: "Keto hat vielleicht kurz funktioniert – dann kam der Stillstand",
  },
  {
    icon: CircleAlert,
    text: "Du kämpfst mit Heißhunger, Müdigkeit oder Energie-Crashes",
  },
  {
    icon: HelpCircle,
    text: "Du fragst Dich, warum es bei anderen klappt – aber nicht bei Dir",
  },
];

const IdentificationSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow">
        {/* Section heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Kommt Dir das bekannt vor?
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

        {/* Transition text */}
        <p className="text-center text-muted-foreground mt-10 text-lg">
          Wenn Du Dich hier wiedererkennst, liegt es wahrscheinlich nicht an Dir.
        </p>
      </div>
    </section>
  );
};

export default IdentificationSection;