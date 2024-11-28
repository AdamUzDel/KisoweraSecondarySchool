import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { Mail, Phone } from 'lucide-react'

export function LeadershipSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Our Leadership"
          subtitle="Meet the team guiding our institution"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "Mrs. Dinah Grace Nakabuye",
              role: "Headteacher",
              image: "/dinah-grace.jpg?height=400&width=300",
              qualifications: "BSc. Ed, MEd, PhD (Candidate)",
              email: "headteacher@kisowerasecondary.ac.ug",
              phone: "+256 123 456 789"
            },
            {
              name: "Mr. John Mukasa",
              role: "Deputy Headteacher (Academics)",
              image: "/placeholder.svg?height=400&width=300",
              qualifications: "BSc, PGDE, MEd",
              email: "academics@kisowerasecondary.ac.ug",
              phone: "+256 123 456 790"
            },
            {
              name: "Mrs. Grace Nakato",
              role: "Deputy Headteacher (Administration)",
              image: "/placeholder.svg?height=400&width=300",
              qualifications: "BA, MEd, MBA",
              email: "admin@kisowerasecondary.ac.ug",
              phone: "+256 123 456 791"
            }
          ].map((leader, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-[300px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                  <p className="text-[#6e1010] font-medium mb-2">{leader.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {leader.qualifications}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${leader.email}`} className="hover:text-[#6e1010]">
                        {leader.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${leader.phone}`} className="hover:text-[#6e1010]">
                        {leader.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
