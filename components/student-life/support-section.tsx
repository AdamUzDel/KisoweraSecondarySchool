import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, BookOpen, Users, MessageCircle, Shield, Smile } from 'lucide-react'

export function SupportSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Student Support Services"
          subtitle="Comprehensive support system ensuring student welfare and success"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Heart,
              title: "Health Services",
              description: "Comprehensive healthcare support for all students",
              features: [
                "On-site medical facility",
                "Qualified nursing staff",
                "Regular health check-ups",
                "Emergency response protocols",
                "Mental health support"
              ]
            },
            {
              icon: MessageCircle,
              title: "Counseling Services",
              description: "Professional guidance for personal development",
              features: [
                "Individual counseling",
                "Group counseling sessions",
                "Career guidance",
                "Stress management",
                "Conflict resolution"
              ]
            },
            {
              icon: Shield,
              title: "Pastoral Care",
              description: "Spiritual and moral guidance for students",
              features: [
                "Religious education",
                "Spiritual counseling",
                "Prayer services",
                "Moral guidance",
                "Character development"
              ]
            },
            {
              icon: Users,
              title: "Peer Support",
              description: "Student-led support systems",
              features: [
                "Peer mentoring",
                "Study groups",
                "Student buddies",
                "Peer counseling",
                "Integration support"
              ]
            },
            {
              icon: BookOpen,
              title: "Academic Support",
              description: "Extra help for academic excellence",
              features: [
                "Remedial classes",
                "Study skills workshops",
                "Homework support",
                "Exam preparation",
                "Subject clinics"
              ]
            },
            {
              icon: Smile,
              title: "Social Integration",
              description: "Programs to enhance student social life",
              features: [
                "Cultural activities",
                "Social events",
                "Integration programs",
                "Club activities",
                "Community building"
              ]
            }
          ].map((service, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#6e1010]" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                        <span className="text-muted-foreground">{feature}</span>
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

