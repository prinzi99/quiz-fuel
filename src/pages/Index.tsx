import HeroSection from "@/components/landing/HeroSection";
import IdentificationSection from "@/components/landing/IdentificationSection";
import ReframingSection from "@/components/landing/ReframingSection";
import WhyQuizSection from "@/components/landing/WhyQuizSection";
import QuizTransitionSection from "@/components/landing/QuizTransitionSection";
import Footer from "@/components/landing/Footer";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Warum Keto & gesunde Ernährung oft nicht funktionieren | Stoffwechsel verstehen</title>
        <meta 
          name="description" 
          content="Entdecke, warum ketogene Ernährung und Keto Diät bei Dir nicht funktionieren. Verstehe Stoffwechsel-Störungen und finde heraus, was Deine Fettverbrennung blockiert." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://philippsbiohack.de" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Warum Keto & gesunde Ernährung oft nicht funktionieren" />
        <meta property="og:description" content="Viele Menschen scheitern nicht an Disziplin, sondern an einem blockierten Stoffwechsel. Finde heraus, was Deinen Körper ausbremst." />
        <meta property="og:type" content="website" />
        
        {/* Additional SEO */}
        <meta name="keywords" content="ketogene ernährung, keto diät, stoffwechsel störungen, langsamer stoffwechsel, fettstoffwechsel, kohlenhydrat stoffwechsel, abnehmen ohne hungern" />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <IdentificationSection />
        <ReframingSection />
        <WhyQuizSection />
        <QuizTransitionSection />
      </main>
      
      <Footer />
      <MobileStickyCTA />
    </>
  );
};

export default Index;