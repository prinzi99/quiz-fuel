import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const scrollToQuiz = () => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Dein individueller Stoffwechsel-Typ",
    "Wissenschaftlich fundierte Analyse",
    "Kostenlos & unverbindlich",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow section-padding text-center">
        <div className="animate-fade-in-up">
          {/* Small trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
            Made with Science
          </div>

          {/* H1 - Main headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
            Eat better{" "}
            <span className="text-primary">not less</span>
            <br />
            <span className="text-muted-foreground font-medium text-2xl md:text-3xl lg:text-4xl">
              mit dem Stoffwechsel-Quiz
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Finde heraus, warum Keto & gesunde Ernährung bei Dir nicht funktionieren – 
            und was Dein Körper wirklich braucht.
          </p>

          {/* Benefits list */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-foreground"
              >
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span className="text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <Button 
            variant="cta" 
            size="xl" 
            onClick={scrollToQuiz}
            className="mb-4 text-base md:text-lg"
          >
            Jetzt Quiz starten
          </Button>

          {/* Time indicator */}
          <p className="text-sm text-muted-foreground">
            Nur 2 Minuten – Keine Anmeldung nötig
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
