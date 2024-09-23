import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { ProjectSection } from '@/components/layout/sections/projects';
import { languages } from "../i18n/settings";
import { ClientsSection } from "@/components/layout/sections/clients";
import { ImpactSection } from "@/components/layout/sections/impact";
import { ContactUsButton } from "@/components/layout/contact-us-button";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <HeroSection lng={lng} />
      <ImpactSection lng={lng} />
      <ServicesSection lng={lng} />
      <ContactUsButton lng={lng} code="contactus" />
      <ProjectSection  lng={lng}/>
      <TestimonialSection lng={lng} />
      <TeamSection lng={lng} />
      <PricingSection lng={lng} />

      {/* <BenefitsSection lng={lng} />
      <FeaturesSection lng={lng} />
      <FAQSection lng={lng} /> */}
      <FooterSection lng={lng} />
    </>
  );
}
