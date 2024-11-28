import { Metadata } from "next"
import { HeroSection } from "@/components/news-events/hero-section"
import { FeaturedSection } from "@/components/news-events/featured-section"
import { EventsSection } from "@/components/news-events/events-section"
import { CategoriesSection } from "@/components/news-events/categories-section"
import { NewsGridSection } from "@/components/news-events/news-grid-section"
import { NewsletterSection } from "@/components/news-events/newsletter-section"

export const metadata: Metadata = {
  title: "News & Events | Kisowera Secondary School",
  description: "Stay updated with the latest news, announcements, and upcoming events at Kisowera Secondary School.",
}

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedSection />
      <EventsSection />
      <CategoriesSection />
      <NewsGridSection />
      <NewsletterSection />
    </div>
  )
}

