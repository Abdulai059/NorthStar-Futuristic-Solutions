import CTASection from "@/sections/cta-section";
import FeaturesSection from "@/sections/features-section";
import HeroSection from "@/sections/hero-section";
import PricingSection from "@/sections/pricing-section";
import TeamSection from "@/sections/team-section";
import TestimonialSection from "@/sections/testimonial-section";
import AboutPage from "../about/page";
import ServicePage from "../services/page";
import AboutSection from "@/sections/features-section";
import HowWeWork from "@/components/ui/HomeWeWork";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicePage />
      <HowWeWork />
      <TestimonialSection />
      <PricingSection />
      <CTASection />
    </>
  );
}
