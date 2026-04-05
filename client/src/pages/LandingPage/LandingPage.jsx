import Footer from "../../components/UI/Footer";
import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import PricingSection from "../../components/PricingSection";
import WorkflowsSection from "../../components/WorkflowsSection";
import TestimonialsSection from "../../components/TestimonialsSection";

export default function Login() {
  return (
    <>
      {/* HERO SECTION */}
      <HeroSection/>

      {/* FEATURES SECTION */}
      <FeaturesSection/>

      {/* PRICING SECTION */}
      <PricingSection/>

      {/* WORKFLOWS SECTION */}
      <WorkflowsSection/>

      {/* testimony section */}
      <TestimonialsSection/>

      {/* footer */}
      <footer
        id="footer"
        className="flex flex-col gap-6 bg-[var(--secondary)] px-4 py-8 sm:px-6 lg:px-8 lg:pt-20 overflow-hidden items-center border border-t"
      >
        <Footer/>
      </footer>
    </>
  );
}
