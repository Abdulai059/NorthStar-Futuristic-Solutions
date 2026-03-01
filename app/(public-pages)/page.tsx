import CTASection from "@/sections/cta-section";
import HeroSection from "@/sections/hero-section";
import TestimonialSection from "@/sections/testimonial-section";
import AboutSection from "@/sections/features-section";
import HowWeWork from "@/components/ui/HomeWeWork";
import ServicesSection from "@/sections/services-section";
import ContactSection from "@/sections/contact-us";

export default function Home() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <HowWeWork />

      <TestimonialSection />

      <ContactSection />

      <CTASection />
    </>
  );
}
