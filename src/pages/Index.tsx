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