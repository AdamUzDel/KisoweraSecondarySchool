import Link from "next/link"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"

export function StudentLifeSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Student Life at Kisowera"
          subtitle="Experience a vibrant and enriching school environment"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Academic Life",
              description: "Engaging classroom experiences and interactive learning sessions",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#academic"
            },
            {
              title: "Boarding Life",
              description: "A home away from home with modern dormitory facilities",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#boarding"
            },
            {
              title: "Sports & Recreation",
              description: "State-of-the-art facilities for various sports and activities",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#sports"
            },
            {
              title: "Leadership Development",
              description: "Opportunities to develop leadership skills through various roles",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#leadership"
            },
            {
              title: "Community Service",
              description: "Making a positive impact in our local community",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#community"
            },
            {
              title: "School Events",
              description: "Celebrating achievements and fostering school spirit",
              image: "/placeholder.svg?height=400&width=600",
              link: "/student-life#events"
            }
          ].map((item, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Link href={item.link}>
                <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

