import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from 'lucide-react'

export function FacultySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Our Faculty"
          subtitle="Experienced educators dedicated to academic excellence"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Faculty Overview */}
          <FadeInSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Expert Educators</h3>
              <p className="text-muted-foreground">
                Our teaching staff comprises highly qualified professionals with extensive 
                experience in their respective fields. They are committed to providing 
                quality education and nurturing each student&apso;s potential.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: GraduationCap,
                    title: "Qualifications",
                    points: [
                      "Master's and PhD holders",
                      "Certified teachers",
                      "Subject specialists",
                      "Continuous professional development"
                    ]
                  },
                  {
                    icon: Award,
                    title: "Experience",
                    points: [
                      "Average 10+ years teaching",
                      "Research experience",
                      "Industry expertise",
                      "International exposure"
                    ]
                  }
                ].map((category, index) => (
                  <Card key={index} className="border-none shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <category.icon className="w-5 h-5 text-[#6e1010]" />
                        <h4 className="font-semibold">{category.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Faculty Image Grid */}
          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  image: "/placeholder.svg?height=300&width=300",
                  name: "Mr. John Mukasa",
                  role: "Head of Sciences"
                },
                {
                  image: "/placeholder.svg?height=300&width=300",
                  name: "Mrs. Sarah Namukasa",
                  role: "Head of Languages"
                },
                {
                  image: "/placeholder.svg?height=300&width=300",
                  name: "Dr. Peter Ssemakula",
                  role: "Head of Mathematics"
                },
                {
                  image: "/placeholder.svg?height=300&width=300",
                  name: "Ms. Grace Nakato",
                  role: "Head of Humanities"
                }
              ].map((teacher, index) => (
                <div key={index} className="relative group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-semibold text-sm">{teacher.name}</p>
                      <p className="text-xs text-white/90">{teacher.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

