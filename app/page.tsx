import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { UseCaseSection } from "@/components/landing/UseCaseSection";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { CTASection } from "@/components/landing/CTASection";
import { PricingSection } from "@/components/landing/PricingSection";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <UseCaseSection />
        <MetricsSection />
        <HowItWorksSection />
        <SecuritySection />
        <CTASection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
