import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Calendar, FileText } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-16 bg-[#6e1010] text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Take the Next Step in Your Educational Journey
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join our community of learners and discover the opportunities that await you 
              at Kisowera Secondary School.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-white text-[#6e1010] hover:bg-white/90"
              >
                <Link href="/admissions" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Apply Now
                </Link>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact" className="flex items-center gap-2">
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

