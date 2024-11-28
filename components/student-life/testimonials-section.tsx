import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Student Voices"
          subtitle="Hear what our students say about life at Kisowera Secondary School"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              quote: "Being at Kisowera has helped me discover my potential not just in academics, but also in leadership and sports. The supportive environment and dedicated teachers make learning enjoyable.",
              author: "Sarah Nakato",
              class: "Senior 4",
              image: "/placeholder.svg?height=100&width=100"
            },
            {
              quote: "The boarding experience at Kisowera is like having a second family. We learn important life skills, make lasting friendships, and receive great support from our teachers and wardens.",
              author: "John Mukasa",
              class: "Senior 6",
              image: "/placeholder.svg?height=100&width=100"
            },
            {
              quote: "I love the variety of clubs and activities available here. Through the debate club, I've gained confidence in public speaking and made friends with students from different classes.",
              author: "Grace Namukasa",
              class: "Senior 3",
              image: "/placeholder.svg?height=100&width=100"
            }
          ].map((testimonial, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Card className="h-full border-none shadow-lg">
                <CardContent className="p-6 relative">
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-[#6e1010]/10" />
                  <div className="space-y-4">
                    <p className="text-muted-foreground relative">
                      &qout;{testimonial.quote}&qout;
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
                        <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

