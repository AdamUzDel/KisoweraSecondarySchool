import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Crown, Users, Shield, Award } from 'lucide-react'

export function LeadershipSection() {
  return (
    <section className="py-16 bg-[#6e1010] text-white">
      <div className="container">
        <SectionHeader
          title="Student Leadership"
          subtitle="Developing tomorrow's leaders through responsibility and service"
          className="text-white [&>p]:text-white/80"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Leadership Structure */}
          <FadeInSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Student Leadership Structure</h3>
              <div className="grid gap-4">
                {[
                  {
                    icon: Crown,
                    title: "Head Prefects",
                    roles: [
                      "Head Boy & Head Girl",
                      "Deputy Head Boy & Deputy Head Girl",
                      "Senior Prefects"
                    ]
                  },
                  {
                    icon: Shield,
                    title: "Departmental Prefects",
                    roles: [
                      "Academic Prefects",
                      "Dining Hall Prefects",
                      "Dormitory Prefects",
                      "Sports & Games Prefects",
                      "Library Prefects",
                      "Entertainment Prefects"
                    ]
                  },
                  {
                    icon: Users,
                    title: "Class Representatives",
                    roles: [
                      "Class Captains",
                      "Assistant Class Captains",
                      "Subject Representatives",
                      "Class Committees"
                    ]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-white/10 border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                          <category.icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-semibold">{category.title}</h4>
                      </div>
                      <ul className="grid gap-2">
                        {category.roles.map((role, roleIndex) => (
                          <li key={roleIndex} className="flex items-center gap-2 text-sm text-white/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                            <span>{role}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Leadership Development */}
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Leadership Development</h3>
              <div className="grid gap-6">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Student leaders in action"
                    width={600}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Award,
                        title: "Leadership Training",
                        points: [
                          "Regular workshops",
                          "Mentorship programs",
                          "Leadership camps",
                          "Skills development"
                        ]
                      },
                      {
                        icon: Users,
                        title: "Responsibilities",
                        points: [
                          "Student welfare",
                          "School activities",
                          "Discipline management",
                          "Event organization"
                        ]
                      }
                    ].map((section, index) => (
                      <Card key={index} className="bg-white/10 border-none">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <section.icon className="w-5 h-5" />
                            <h4 className="font-semibold">{section.title}</h4>
                          </div>
                          <ul className="space-y-2">
                            {section.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-center gap-2 text-sm text-white/80">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

