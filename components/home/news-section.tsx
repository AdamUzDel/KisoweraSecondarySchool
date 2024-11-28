import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Header with responsive layout */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="flex-1">
            <SectionHeader
              title="Latest News & Events"
              subtitle="Stay updated with school activities and achievements"
              align="left"
              className="mb-0"
            />
          </div>
          <div className="flex justify-start sm:justify-end">
            <Button variant="outline" asChild>
              <Link href="/news-events" className="flex items-center gap-2 whitespace-nowrap">
                View All News & Events <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* News Grid with better mobile layout */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Annual Sports Day 2024",
              date: "March 15, 2024",
              category: "Events",
              description: "Join us for an exciting day of athletic competitions and team spirit. Students will compete in various sports disciplines.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/news/sports-day-2024"
            },
            {
              title: "National Science Fair Success",
              date: "February 28, 2024",
              category: "Achievement",
              description: "Our students secured top positions at the National Science Fair with their innovative projects.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/news/science-fair-2024"
            },
            {
              title: "Cultural Day Celebration",
              date: "April 5, 2024",
              category: "Events",
              description: "Experience the rich cultural diversity of our school community through performances, food, and exhibitions.",
              image: "/placeholder.svg?height=400&width=600",
              link: "/news/cultural-day-2024"
            }
          ].map((item, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Link href={item.link} className="group block h-full">
                <Card className="overflow-hidden border-none h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image container with consistent aspect ratio */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Category badge with icon */}
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#6e1010] px-3 py-1.5 text-sm text-white">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="font-medium">{item.category}</span>
                    </div>
                  </div>

                  <CardContent className="p-5 sm:p-6">
                    {/* Date with icon */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={item.date}>{item.date}</time>
                    </div>

                    {/* Title with responsive size */}
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-[#6e1010] transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Description with line clamp */}
                    <p className="text-muted-foreground text-sm sm:text-base mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Read more link */}
                    <div className="flex items-center text-[#6e1010] font-medium text-sm sm:text-base group/link">
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

