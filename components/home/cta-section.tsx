import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"

export function CtaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards excellence. Register now for the upcoming academic year.
          </p>
          <Button size="lg" asChild className="bg-[#6e1010] hover:bg-[#7e2020]">
            <Link href="/register">Begin Your Journey</Link>
          </Button>
        </FadeInSection>
      </div>
    </section>
  )
}

