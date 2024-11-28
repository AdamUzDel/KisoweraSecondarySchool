import Image from "next/image"
import { ClubIcon as Football, Music, Users, Flower2 } from 'lucide-react'
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"

export function ActivitiesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Co-curricular Activities"
          subtitle="Developing well-rounded individuals through diverse activities"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Football,
              title: "Games & Sports",
              description: "Competitive sports including football, netball, athletics, and more",
              image: "/sports.JPG?height=400&width=300"
            },
            {
              icon: Music,
              title: "Music, Dance & Drama",
              description: "Cultural performances, choir, and theatrical productions",
              image: "/placeholder.svg?height=400&width=300"
            },
            {
              icon: Users,
              title: "Clubs & Activities",
              description: "Various clubs focusing on leadership, debate, and personal development",
              image: "/placeholder.svg?height=400&width=300"
            },
            {
              icon: Flower2,
              title: "Modern Agriculture",
              description: "Hands-on experience in sustainable farming practices",
              image: "/placeholder.svg?height=400&width=300"
            }
          ].map((activity, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  width={300}
                  height={400}
                  className="w-full object-cover aspect-[3/4] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute bottom-0 p-6 text-white">
                    <activity.icon className="w-8 h-8 mb-3" />
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <p className="text-sm text-gray-200">{activity.description}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

