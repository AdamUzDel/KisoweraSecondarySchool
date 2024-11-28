import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { FileText, Calendar } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-16 bg-[#6e1010]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our School Community?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Take the first step towards excellence. Apply for admission or schedule 
              a visit to our campus to learn more about our programs and facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#6e1010] hover:bg-white/90"
              >
                <Link href="/admissions" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Apply for Admission
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/visit" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule a Visit
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

