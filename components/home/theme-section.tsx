import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { Cross, Quote } from 'lucide-react'

export function ThemeSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Theme of the Year 2024"
            subtitle="Striving for Excellence in Faith"
          />
          
          <FadeInSection delay={0.2}>
            <Card className="relative mt-12 p-8 md:p-12 bg-white/50 backdrop-blur border-none shadow-xl">
              {/* Decorative cross icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#6e1010] flex items-center justify-center text-white">
                <Cross className="w-6 h-6" />
              </div>

              {/* Quote icons */}
              <Quote className="absolute left-4 top-4 h-12 w-12 text-[#6e1010]/10 rotate-180" />
              <Quote className="absolute right-4 bottom-4 h-12 w-12 text-[#6e1010]/10" />

              {/* Content */}
              <div className="text-center space-y-8">
                <blockquote className="relative">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-[#6e1010] leading-relaxed">
                    "I can do all things through Christ who strengthens me."
                  </p>
                  <cite className="mt-4 block text-sm text-muted-foreground not-italic">
                    - Philippians 4:13
                  </cite>
                </blockquote>

                {/* Decorative separator */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-[#6e1010]/20" />
                  <div className="w-2 h-2 rounded-full bg-[#6e1010]/40" />
                  <div className="h-px w-12 bg-[#6e1010]/20" />
                </div>

                {/* Additional content */}
                <div className="max-w-2xl mx-auto space-y-4">
                  <p className="text-lg text-muted-foreground">
                    This year, we focus on strengthening our faith while pursuing academic 
                    excellence. Our theme reminds us that with faith, determination, and 
                    divine guidance, we can overcome any challenge and achieve our goals.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-[#6e1010]">
                    <span className="px-4 py-2 rounded-full bg-[#6e1010]/10">Faith</span>
                    <span className="px-4 py-2 rounded-full bg-[#6e1010]/10">Excellence</span>
                    <span className="px-4 py-2 rounded-full bg-[#6e1010]/10">Determination</span>
                  </div>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute left-0 top-0 w-16 h-16 border-l-2 border-t-2 border-[#6e1010]/20" />
              <div className="absolute right-0 top-0 w-16 h-16 border-r-2 border-t-2 border-[#6e1010]/20" />
              <div className="absolute left-0 bottom-0 w-16 h-16 border-l-2 border-b-2 border-[#6e1010]/20" />
              <div className="absolute right-0 bottom-0 w-16 h-16 border-r-2 border-b-2 border-[#6e1010]/20" />
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

