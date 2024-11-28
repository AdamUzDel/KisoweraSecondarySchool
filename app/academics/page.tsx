import { Metadata } from "next"
import { HeroSection } from "@/components/academics/hero-section"
import { ProgramsSection } from "@/components/academics/programs-section"
import { CurriculumSection } from "@/components/academics/curriculum-section"
import { CalendarSection } from "@/components/academics/calendar-section"
import { ExaminationSection } from "@/components/academics/examination-section"
import { SupportSection } from "@/components/academics/support-section"
import { FacultySection } from "@/components/academics/faculty-section"
import { CtaSection } from "@/components/academics/cta-section"

export const metadata: Metadata = {
  title: "Academics | Kisowera Secondary School",
  description: "Explore our comprehensive academic programs, curriculum, and educational approach at Kisowera Secondary School.",
}

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProgramsSection />
      <CurriculumSection />
      <CalendarSection />
      <ExaminationSection />
      <SupportSection />
      <FacultySection />
      <CtaSection />
    </div>
  )
}

