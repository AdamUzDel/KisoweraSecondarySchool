import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { Quote } from 'lucide-react'

export function HeadteacherSection() {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <SectionHeader
          title="Leadership"
          subtitle="Message from the Headteacher"
          align="center"
        />
        <div className="mt-12">
          <Card className="relative overflow-hidden border-none bg-white shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Image Column */}
              <FadeInSection className="relative">
                <div className="relative h-full min-h-[400px] overflow-hidden md:min-h-[600px]">
                  <Image
                    src="/dinah-grace.jpg?height=800&width=600"
                    alt="Headteacher Mrs. Dinah Grace Nakabuye"
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent md:bg-gradient-to-t" />
                  
                  {/* Mobile name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 md:hidden">
                    <h3 className="text-xl font-bold text-white">Mrs. Dinah Grace Nakabuye</h3>
                    <p className="text-sm text-gray-200">Headteacher</p>
                  </div>
                </div>
              </FadeInSection>

              {/* Content Column */}
              <FadeInSection delay={0.2}>
                <div className="relative p-8 md:p-12">
                  {/* Desktop name - hidden on mobile */}
                  <div className="mb-8 hidden md:block">
                    <h3 className="text-2xl font-bold text-[#6e1010]">Mrs. Dinah Grace Nakabuye</h3>
                    <p className="text-gray-600">Headteacher</p>
                  </div>

                  {/* Quote icon */}
                  <Quote className="absolute right-8 top-8 h-12 w-12 text-[#6e1010]/10" />

                  {/* Message content */}
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed text-gray-600">
                      &quot;At Kisowera Secondary School, we believe in nurturing not just academic 
                      excellence, but the whole individual. Our commitment is to prepare students 
                      for life&apos;s challenges while instilling values that will guide them throughout 
                      their journey.&quot;
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      &quot;We take pride in our holistic approach to education, combining rigorous 
                      academic standards with character development, leadership opportunities, 
                      and a strong emphasis on moral values.&quot;
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600">
                      &quot;Together with our dedicated staff, supportive parents, and enthusiastic 
                      students, we continue to build an educational environment where every 
                      student can thrive and reach their full potential.&quot;
                    </p>
                  </div>

                  {/* Signature - styled as handwriting */}
                  <div className="mt-8 border-t border-gray-200 pt-8">
                    <div className="font-dancing text-2xl text-[#6e1010]">
                      Dinah Grace Nakabuye
                    </div>
                    <p className="text-sm text-gray-600">BSc. Ed, MEd</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

