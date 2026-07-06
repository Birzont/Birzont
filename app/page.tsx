import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionFlow } from "@/components/landing/SolutionFlow";
import { MetricsSection } from "@/components/landing/MetricsSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionFlow />
        <MetricsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
