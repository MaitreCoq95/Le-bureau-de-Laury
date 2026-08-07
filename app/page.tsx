import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { VideoSection } from "../components/video-section"
import { ServicesSection } from "../components/services-section"
import { PremiumServicesSection } from "../components/premium-services-section"
import { TransportSection } from "../components/transport-section"
import { TimelineSection } from "../components/timeline-section"
import { WhyMeSection } from "../components/why-me-section"
import { MethodSection } from "../components/method-section"
import { SkillsSection } from "../components/skills-section"
import { DNASection } from "../components/dna-section"
import { DiagnosticSection } from "../components/diagnostic-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"
import { FloatingCTA } from "../components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <PremiumServicesSection />
      <TransportSection />
      <TimelineSection />
      <WhyMeSection />
      <MethodSection />
      <SkillsSection />
      <DNASection />
      <DiagnosticSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
