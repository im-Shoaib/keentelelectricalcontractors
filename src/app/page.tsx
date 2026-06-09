// src/app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceArea from "@/components/ServiceArea";
import ResidentialServices from "@/components/ResidentialServices";
import CommercialServices from "@/components/CommercialServices";
import IndustrialServices from "@/components/IndustrialServices";
import TrustSection from "@/components/TrustSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServiceArea />
      <ResidentialServices />
      <CommercialServices />
      <IndustrialServices />
      <TrustSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}