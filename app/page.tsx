import { Hero } from "@/components/sections/Hero";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { ServiceStack } from "@/components/sections/ServiceStack";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-hidden">
      {/* Global Background Gradient */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <Hero />
      <TrustSignals />
      <ServiceStack />
      <ServicesOverview />
      <CaseStudies />
      <Process />
      <WhyChooseUs />
      <CTA />
    </div>
  );
}
