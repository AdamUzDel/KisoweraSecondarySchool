import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react'

export function EventsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="flex-1">
            <SectionHeader
              title="Upcoming Events"
              subtitle="Mark your calendar for these important school events"
              align="left"
              className="mb-0"
            />
          </div>
          <div className="flex justify-start sm:justify-end mt-4 sm:mt-0">
            <Button variant="outline" asChild>
              <Link href="/calendar" className="flex items-center gap-2">
                View Full Calendar <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Annual Sports Day",
              date: "2024-03-15",
              time: "8:00 AM - 5:00 PM",
              location: "School Sports Complex",
              category: "Sports",
              description: "A day of athletic competitions, team sports, and celebrating sportsmanship."
            },
            {
              title: "Parent-Teacher Meeting",
              date: "2024-03-20",
              time: "2:00 PM - 6:00 PM",
              location: "School Assembly Hall",
              category: "Academic",
              description: "Discussion of student progress and academic performance with parents."
            },
            {
              title: "Science Fair 2024",
              date: "2024-04-05",
              time: "9:00 AM - 4:00 PM",
              location: "School Laboratory Complex",
              category: "Academic",
              description: "Showcase of student science projects and innovations."
            },
            {
              title: "Cultural Day Celebration",
              date: "2024-04-15",
              time: "10:00 AM - 6:00 PM",
              location: "School Grounds",
              category: "Culture",
              description: "Celebrating our diverse cultural heritage through performances and exhibitions."
            },
            {
              title: "Career Day",
              date: "2024-04-25",
              time: "9:00 AM - 3:00 PM",
              location: "School Auditorium",
              category: "Career",
              description: "Professional guidance and career insights from industry experts."
            },
            {
              title: "Inter-House Music Competition",
              date: "2024-05-10",
              time: "1:00 PM - 5:00 PM",
              location: "School Hall",
              category: "Arts",
              description: "Annual music competition between school houses."
            }
          ].map((event, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#6e1010]" />
                    <span className="text-sm font-medium">{event.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mt-0.5" />
                      <div>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mt-0.5" />
                      <div>{event.time}</div>
                    </div>
                    
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <div>{event.location}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  
                  <Button asChild variant="link" className="p-0 text-[#6e1010]">
                    <Link 
                      href={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-2"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

