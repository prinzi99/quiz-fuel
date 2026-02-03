import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Abstrakte Darstellung von Stoffwechsel und Gesundheit" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 md:py-24 lg:py-32 text-center max-w-3xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Small trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft" />
            Wissenschaftlich fundiert
          </div>

          {/* H1 - Main headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6 px-2">
            Warum Keto & gesunde Ernährung bei Dir nicht funktionieren – 
            <span className="text-primary"> obwohl Du alles richtig machst</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2">
            Viele Menschen scheitern nicht an Disziplin, sondern an einem blockierten Stoffwechsel. 
            Finde heraus, was Deinen Körper gerade ausbremst.
          </p>

          {/* Primary CTA */}
          <Button 
            variant="cta" 
            size="xl" 
            asChild
            className="mb-4 md:mb-6 w-full sm:w-auto"
          >
            <Link to="/quiz">
              <span className="hidden sm:inline">Jetzt herausfinden, was meinen Stoffwechsel blockiert</span>
              <span className="sm:hidden">Zum Stoffwechsel-Quiz</span>
            </Link>
          </Button>

          {/* Time indicator */}
          <p className="text-sm text-muted-foreground">
            Nur 2 Minuten – Kostenlos & unverbindlich
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
