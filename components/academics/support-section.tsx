import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Library, Lightbulb, Clock, MessagesSquare } from 'lucide-react'

export function SupportSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Academic Support"
          subtitle="Comprehensive support services to ensure student success"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Clock,
              title: "Extra Classes",
              description: "Additional teaching sessions for students who need extra help or want to excel further",
              features: ["Morning preps", "Evening classes", "Weekend sessions"]
            },
            {
              icon: Users,
              title: "Study Groups",
              description: "Facilitated peer learning groups to enhance understanding through collaboration",
              features: ["Peer tutoring", "Group discussions", "Project collaboration"]
            },
            {
              icon: Library,
              title: "Resource Center",
              description: "Well-equipped library and digital resources for research and self-study",
              features: ["Reference materials", "Online resources", "Study spaces"]
            },
            {
              icon: Lightbulb,
              title: "Career Guidance",
              description: "Professional guidance to help students make informed academic and career choices",
              features: ["Career counseling", "University applications", "Subject selection"]
            },
            {
              icon: MessagesSquare,
              title: "Mentorship Program",
              description: "One-on-one support from teachers and senior students",
              features: ["Academic mentoring", "Personal development", "Leadership training"]
            },
            {
              icon: BookOpen,
              title: "Remedial Programs",
              description: "Targeted support for students who need additional help in specific subjects",
              features: ["Individual attention", "Specialized coaching", "Progress monitoring"]
            }
          ].map((support, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <support.icon className="w-6 h-6 text-[#6e1010]" />
                    </div>
                    <h3 className="text-lg font-semibold">{support.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {support.description}
                  </p>
                  <ul className="space-y-2">
                    {support.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

