import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { BookOpen, Monitor, FlaskRoundIcon as Flask, Users, Utensils, Bed, Trophy, Library } from 'lucide-react'

export function FacilitiesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Our Facilities"
          subtitle="Modern infrastructure for comprehensive learning"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: BookOpen,
              title: "Classrooms",
              description: "Modern, well-ventilated classrooms equipped with smart boards",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Monitor,
              title: "Computer Labs",
              description: "State-of-the-art computer labs with high-speed internet",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Flask,
              title: "Science Labs",
              description: "Fully equipped physics, chemistry, and biology laboratories",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Library,
              title: "Library",
              description: "Extensive collection of books, journals, and digital resources",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Users,
              title: "Assembly Hall",
              description: "Spacious hall for school gatherings and events",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Utensils,
              title: "Dining Hall",
              description: "Modern kitchen and dining facilities for students",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Trophy,
              title: "Sports Complex",
              description: "Multiple sports facilities including football field and courts",
              image: "/placeholder.svg?height=300&width=400"
            },
            {
              icon: Bed,
              title: "Dormitories",
              description: "Comfortable boarding facilities for resident students",
              image: "/placeholder.svg?height=300&width=400"
            }
          ].map((facility, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="group h-full overflow-hidden border-none shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm line-clamp-2">{facility.description}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <facility.icon className="w-5 h-5 text-[#6e1010]" />
                    <h3 className="font-semibold">{facility.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 md:hidden">
                    {facility.description}
                  </p>
                </div>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Additional Info */}
        <FadeInSection delay={0.4}>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our facilities are regularly maintained and upgraded to ensure the best 
              possible learning environment for our students. We prioritize both 
              academic and recreational spaces to support holistic development.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

