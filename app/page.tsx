import { HeroSection } from "@/components/home/hero-section"
import { HistorySection } from "@/components/home/history-section"
import { HeadteacherSection } from "@/components/home/headteacher-section"
import { AboutSection } from "@/components/home/about-section"
import { ThemeSection } from "@/components/home/theme-section"
import { ActivitiesSection } from "@/components/home/activities-section"
import { NewsSection } from "@/components/home/news-section"
import { StudentLifeSection } from "@/components/home/student-life-section"
import { AcademicsSection } from "@/components/home/academics-section"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HistorySection />
      <HeadteacherSection />
      <AboutSection />
      <ThemeSection />
      <ActivitiesSection />
      <NewsSection />
      <StudentLifeSection />
      <AcademicsSection />
      <CtaSection />
    </div>
  )
}

