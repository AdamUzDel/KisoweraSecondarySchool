import { Metadata } from "next"
import { HeroSection } from "@/components/student-life/hero-section"
import { DailyLifeSection } from "@/components/student-life/daily-life-section"
import { BoardingSection } from "@/components/student-life/boarding-section"
import { ActivitiesSection } from "@/components/student-life/activities-section"
import { LeadershipSection } from "@/components/student-life/leadership-section"
import { ClubsSection } from "@/components/student-life/clubs-section"
import { SupportSection } from "@/components/student-life/support-section"
import { GallerySection } from "@/components/student-life/gallery-section"
import { TestimonialsSection } from "@/components/student-life/testimonials-section"
import { CtaSection } from "@/components/student-life/cta-section"

export const metadata: Metadata = {
  title: "Student Life | Kisowera Secondary School",
  description: "Experience the vibrant student life at Kisowera Secondary School, offering both day and boarding facilities for boys and girls.",
}

export default function StudentLifePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <DailyLifeSection />
      <BoardingSection />
      <ActivitiesSection />
      <LeadershipSection />
      <ClubsSection />
      <SupportSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  )
}

