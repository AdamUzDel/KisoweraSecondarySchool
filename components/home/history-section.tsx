import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"

export function HistorySection() {
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Our History"
            subtitle="A legacy of excellence spanning over three decades"
            align="center"
          />
          <FadeInSection delay={0.2}>
            <div className="mt-8 prose prose-gray mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Since our establishment in 1985, Kisowera Secondary School has been at the 
                forefront of educational excellence in Uganda. What started as a small 
                community school has grown into a prestigious institution, nurturing 
                generations of leaders, innovators, and change-makers.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Through dedication, hard work, and unwavering commitment to academic 
                excellence, we have built a strong foundation that continues to support 
                our students&apos; growth and success. Our journey is marked by countless 
                achievements, memorable milestones, and the lasting impact we&apos;ve made 
                in our community.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Button 
                variant="link" 
                asChild 
                className="text-[#6e1010] p-0 font-semibold group"
              >
                <Link href="/about#history" className="flex items-center gap-2">
                  Read Our Full History 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

