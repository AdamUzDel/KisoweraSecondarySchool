import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"

export function HistorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeader
          title="Our Journey"
          subtitle="A legacy of excellence in education"
        />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <FadeInSection>
            <div className="relative">
              <Image
                src="/about-intro.JPG?height=600&width=800"
                alt="Historical image of Kisowera Secondary School"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#6e1010] text-white p-4 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">1985</p>
                <p className="text-sm">Year Established</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p>
                  Kisowera Secondary School was founded in 1985 with a vision to provide 
                  quality education to the youth of Uganda. What began as a modest 
                  institution with just two classrooms and fifty students has grown into 
                  one of the region's most respected educational establishments.
                </p>
                <p>
                  Our journey has been marked by continuous growth, both in infrastructure 
                  and academic excellence. Through the dedication of our staff, support 
                  from the community, and the hard work of our students, we have achieved 
                  numerous milestones.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    year: "1985",
                    title: "Foundation",
                    description: "School established with 50 students"
                  },
                  {
                    year: "1995",
                    title: "Expansion",
                    description: "Added A-Level programs"
                  },
                  {
                    year: "2005",
                    title: "Recognition",
                    description: "Named among top schools in Uganda"
                  },
                  {
                    year: "2020",
                    title: "Innovation",
                    description: "Modern computer labs established"
                  }
                ].map((milestone, index) => (
                  <Card key={index} className="p-4 border-none shadow-md bg-gray-50">
                    <p className="text-[#6e1010] font-bold">{milestone.year}</p>
                    <h3 className="font-semibold mt-1">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {milestone.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
