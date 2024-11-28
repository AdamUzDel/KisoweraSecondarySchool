import { Metadata } from "next"
import { HeroSection } from "@/components/about/hero-section"
import { HistorySection } from "@/components/about/history-section"
import { StatsSection } from "@/components/about/stats-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { FacilitiesSection } from "@/components/about/facilities-section"
import { TestimonialsSection } from "@/components/about/testimonials-section"
import { LocationSection } from "@/components/about/location-section"
import { CtaSection } from "@/components/about/cta-section"

export const metadata: Metadata = {
  title: "About Us | Kisowera Secondary School",
  description: "Learn about our history, mission, and values at Kisowera Secondary School. Discover our commitment to excellence in education since 1985.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HistorySection />
      <StatsSection />
      <LeadershipSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaSection />
    </div>
  )
}
