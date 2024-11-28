import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Bed, Home, Utensils, Shield, Users, Heart } from 'lucide-react'

export function BoardingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Boarding Life"
          subtitle="A home away from home for our resident students"
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Facilities Overview */}
          <FadeInSection>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Home,
                  title: "Modern Dormitories",
                  description: "Spacious, well-ventilated dormitories with modern amenities"
                },
                {
                  icon: Utensils,
                  title: "Dining Facilities",
                  description: "Nutritious meals served in our modern dining hall"
                },
                {
                  icon: Shield,
                  title: "24/7 Security",
                  description: "Round-the-clock security for student safety"
                },
                {
                  icon: Heart,
                  title: "Healthcare",
                  description: "On-site medical facility with qualified staff"
                }
              ].map((facility, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                        <facility.icon className="w-5 h-5 text-[#6e1010]" />
                      </div>
                      <h3 className="font-semibold">{facility.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold">Boarding Life Features</h3>
              <div className="grid gap-4">
                {[
                  "Separate dormitories for boys and girls",
                  "Resident wardens and matrons providing guidance and support",
                  "Regular maintenance and cleaning services",
                  "Structured study time and recreational activities",
                  "Weekend programs and social activities",
                  "Personal development and life skills training"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Image Gallery */}
          <FadeInSection delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  src: "/placeholder.svg?height=300&width=300",
                  alt: "Boys' dormitory"
                },
                {
                  src: "/placeholder.svg?height=300&width=300",
                  alt: "Girls' dormitory"
                },
                {
                  src: "/placeholder.svg?height=300&width=300",
                  alt: "Dining hall"
                },
                {
                  src: "/placeholder.svg?height=300&width=300",
                  alt: "Common room"
                }
              ].map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

