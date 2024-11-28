import Link from "next/link"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Featured Stories"
          subtitle="Highlighting our most significant recent news and achievements"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Main Featured Story */}
          <FadeInSection>
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="National Science Fair Victory"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#6e1010] px-3 py-1.5 text-sm text-white">
                  <Tag className="w-3.5 h-3.5" />
                  <span className="font-medium">Achievement</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2024-02-28">February 28, 2024</time>
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Kisowera Students Win National Science Fair Competition
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our students secured top positions at the National Science Fair with their 
                  innovative projects on renewable energy and environmental conservation.
                </p>
                <Button asChild variant="link" className="p-0 text-[#6e1010]">
                  <Link href="/news/science-fair-victory" className="flex items-center gap-2">
                    Read Full Story <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* Secondary Featured Stories */}
          <div className="grid gap-6">
            {[
              {
                title: "Annual Sports Day 2024 Announced",
                date: "2024-03-15",
                category: "Events",
                description: "Mark your calendars for an exciting day of athletic competitions and team spirit.",
                image: "/placeholder.svg?height=300&width=500"
              },
              {
                title: "Cultural Day Celebrations",
                date: "2024-04-05",
                category: "Culture",
                description: "Experience the rich cultural diversity of our school community through performances.",
                image: "/placeholder.svg?height=300&width=500"
              }
            ].map((story, index) => (
              <FadeInSection key={index} delay={0.2 * (index + 1)}>
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] md:aspect-auto">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#6e1010] px-3 py-1.5 text-sm text-white">
                        <Tag className="w-3.5 h-3.5" />
                        <span className="font-medium">{story.category}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={story.date}>
                          {new Date(story.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </time>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        {story.description}
                      </p>
                      <Button asChild variant="link" className="p-0 text-[#6e1010]">
                        <Link href={`/news/${story.title.toLowerCase().replace(/ /g, '-')}`} className="flex items-center gap-2">
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

