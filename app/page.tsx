import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { TeamChecklistSection } from "@/components/landing/TeamChecklistSection";
import { ProductVisualizationSection } from "@/components/landing/ProductVisualizationSection";
import { BeforeAfterSection } from "@/components/landing/BeforeAfterSection";
import { UseCaseSection } from "@/components/landing/UseCaseSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { OutputExamplesSection } from "@/components/landing/OutputExamplesSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { BetaFormSection } from "@/components/landing/BetaFormSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <TeamChecklistSection />
        <ProductVisualizationSection />
        <BeforeAfterSection />
        <UseCaseSection />
        <HowItWorksSection />
        <OutputExamplesSection />
        <SecuritySection />
        <BetaFormSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
