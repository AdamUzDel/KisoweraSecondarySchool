import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="What People Say"
          subtitle="Hear from our students, parents, and alumni"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              quote: "The teachers at Kisowera are not just educators; they're mentors who truly care about our success. The school has helped me discover my potential and achieve my dreams.",
              author: "Sarah Nakato",
              role: "Former Student, Class of 2022",
              image: "/placeholder.svg?height=100&width=100"
            },
            {
              quote: "As a parent, I've seen tremendous growth in my child's academic performance and character development. The school's holistic approach to education is commendable.",
              author: "Mr. John Mukasa",
              role: "Parent",
              image: "/placeholder.svg?height=100&width=100"
            },
            {
              quote: "The values and discipline instilled at Kisowera have shaped my career and life. The school's emphasis on both academic excellence and character building is exceptional.",
              author: "Dr. Peter Ssemakula",
              role: "Alumni, Medical Doctor",
              image: "/placeholder.svg?height=100&width=100"
            }
          ].map((testimonial, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Card className="h-full p-6 border-none shadow-lg bg-white relative">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-[#6e1010]/10" />
                <div className="space-y-4">
                  <p className="text-muted-foreground relative">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

