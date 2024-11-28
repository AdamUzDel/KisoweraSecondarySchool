import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Sunrise, Sun, Sunset, Moon, Clock } from 'lucide-react'

export function DailyLifeSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="A Day in the Life"
          subtitle="Experience the structured and enriching daily routine at Kisowera Secondary School"
        />

        <div className="mt-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  icon: Sunrise,
                  time: "5:00 AM - 7:00 AM",
                  period: "Morning Routine",
                  activities: [
                    "Wake up and personal preparation",
                    "Morning prayers",
                    "Breakfast",
                    "Room and dormitory cleaning (boarders)"
                  ]
                },
                {
                  icon: Sun,
                  time: "7:30 AM - 4:00 PM",
                  period: "Academic Hours",
                  activities: [
                    "Morning assembly",
                    "Classes and laboratory sessions",
                    "Short breaks between lessons",
                    "Lunch break",
                    "Continued afternoon classes"
                  ]
                },
                {
                  icon: Sunset,
                  time: "4:00 PM - 6:30 PM",
                  period: "Co-curricular Activities",
                  activities: [
                    "Sports and games",
                    "Club meetings",
                    "Music and drama practice",
                    "Personal development activities"
                  ]
                },
                {
                  icon: Moon,
                  time: "7:00 PM - 9:30 PM",
                  period: "Evening Program (Boarders)",
                  activities: [
                    "Dinner",
                    "Supervised prep time",
                    "Evening prayers",
                    "Personal study time"
                  ]
                }
              ].map((schedule, index) => (
                <FadeInSection key={index} delay={0.1 * index}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                          <schedule.icon className="w-6 h-6 text-[#6e1010]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-4 h-4 text-[#6e1010]" />
                            <span className="font-medium">{schedule.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-3">{schedule.period}</h3>
                          <ul className="space-y-2">
                            {schedule.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.5}>
              <div className="mt-8 p-4 bg-[#6e1010]/5 rounded-lg text-center">
                <p className="text-sm text-muted-foreground">
                  Note: Schedule may vary slightly depending on the day of the week and special activities. 
                  Day scholars follow the schedule from morning assembly to end of co-curricular activities.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}

