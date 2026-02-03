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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-4">
          Kommt Dir das <span className="text-primary">bekannt</span> vor?
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Diese Situationen kennen viele – und sie haben meist eine gemeinsame Ursache.
        </p>

        {/* Pain points */}
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground text-lg leading-relaxed pt-2">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="mt-12 text-center">
          <p className="inline-block px-6 py-3 rounded-full bg-secondary/10 text-secondary font-medium">
            Wenn Du Dich hier wiedererkennst, liegt es wahrscheinlich nicht an Dir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
