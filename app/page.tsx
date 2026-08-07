import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/services-section"
import { PremiumServicesSection } from "../components/premium-services-section"
import { TimelineSection } from "../components/timeline-section"
import { BeforeAfterSection } from "../components/before-after-section"
import { ROISection } from "../components/roi-section"
import { WhyMeSection } from "../components/why-me-section"
import { MethodSection } from "../components/method-section"
import { SkillsSection } from "../components/skills-section"
import { DiplomasSection } from "../components/diplomas-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { DNASection } from "../components/dna-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"
import { FloatingCTA } from "../components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PremiumServicesSection />
      <TimelineSection />
      <BeforeAfterSection />
      <ROISection />
      <WhyMeSection />
      <MethodSection />
      <SkillsSection />
      <DiplomasSection />


      <TestimonialsSection />
      <DNASection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
