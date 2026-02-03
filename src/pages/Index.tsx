import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/landing/HeroSection";
import IdentificationSection from "@/components/landing/IdentificationSection";
import ReframingSection from "@/components/landing/ReframingSection";
import WhyQuizSection from "@/components/landing/WhyQuizSection";
import QuizTransitionSection from "@/components/landing/QuizTransitionSection";
import Footer from "@/components/landing/Footer";
import MobileStickyCTA from "@/components/landing/MobileStickyCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Ketogene Ernährung & Stoffwechsel verstehen | Keto Diät Quiz</title>
        <meta name="description" content="Langsamer Stoffwechsel? Erfahre, warum Keto Diät & ketogene Ernährung unterschiedlich wirken. Kostenloses Stoffwechsel-Quiz in 2 Min. für mehr Verständnis." />
        <meta name="keywords" content="ketogene ernährung, keto diät, stoffwechsel störungen, langsamer stoffwechsel, fettstoffwechsel, kohlenhydrat stoffwechsel, abnehmen ohne hungern" />
        <link rel="canonical" href="https://stoffwechsel.philippsbiohack.de/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Ketogene Ernährung & Stoffwechsel verstehen | Quiz" />
        <meta property="og:description" content="Warum reagieren Menschen unterschiedlich auf Keto Diät? Finde heraus, was Dein Stoffwechsel-Typ bedeutet – kostenloses Quiz in 2 Minuten." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta property="og:url" content="https://stoffwechsel.philippsbiohack.de/" />
        <meta property="og:image" content="https://stoffwechsel.philippsbiohack.de/og-image.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ketogene Ernährung & Stoffwechsel verstehen | Quiz" />
        <meta name="twitter:description" content="Warum reagieren Menschen unterschiedlich auf Keto Diät? Finde heraus, was Dein Stoffwechsel-Typ bedeutet – kostenloses Quiz in 2 Minuten." />
        <meta name="twitter:image" content="https://stoffwechsel.philippsbiohack.de/og-image.png" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
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