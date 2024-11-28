import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"

export function GallerySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Student Life Gallery"
          subtitle="Capturing moments and memories from our vibrant school community"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {[
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Students in classroom",
              category: "Academic Life"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Sports activities",
              category: "Sports"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Cultural performance",
              category: "Culture"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Laboratory session",
              category: "Science"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Music performance",
              category: "Arts"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Community service",
              category: "Service"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "Club activities",
              category: "Clubs"
            },
            {
              src: "/placeholder.svg?height=400&width=400",
              alt: "School events",
              category: "Events"
            }
          ].map((image, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="group relative aspect-square overflow-hidden border-none">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.category}</p>
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

