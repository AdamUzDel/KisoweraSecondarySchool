import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, GraduationCap, Trophy} from 'lucide-react'

export function CalendarSection() {
  return (
    <section className="py-16 bg-[#6e1010] text-white">
      <div className="container">
        <SectionHeader
          title="Academic Calendar"
          subtitle="Key dates and events for the academic year"
          className="text-white [&>p]:text-white/80"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            {
              term: "Term One",
              date: "February - May",
              icon: Calendar,
              events: [
                "School Opening: February 5th",
                "Mid-term Break: March 15-20th",
                "Parent-Teacher Meeting: April 10th",
                "End of Term Exams: May 1-12th"
              ]
            },
            {
              term: "Term Two",
              date: "May - August",
              icon: Trophy,
              events: [
                "School Opening: May 29th",
                "Sports Day: June 15th",
                "Science Fair: July 20th",
                "End of Term Exams: August 14-25th"
              ]
            },
            {
              term: "Term Three",
              date: "September - December",
              icon: GraduationCap,
              events: [
                "School Opening: September 18th",
                "Cultural Week: October 10-14th",
                "UNEB Exams: November",
                "Graduation Day: December 8th"
              ]
            }
          ].map((term, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Card className="bg-white/10 border-none backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <term.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{term.term}</h3>
                      <p className="text-white/80">{term.date}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {term.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/90">{event}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.6}>
          <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg text-center">
            <p className="text-white/90">
              Note: Dates are subject to change. Please refer to the official school 
              communications for any updates or changes to the academic calendar.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

