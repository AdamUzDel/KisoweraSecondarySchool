import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react'

export function ProgramsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Our Academic Programs"
          subtitle="Comprehensive education pathways tailored to your goals"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* O-Level Program */}
          <FadeInSection>
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="O-Level students in class"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">O-Level Program</h3>
                  </div>
                  <p className="text-sm text-white/90">Uganda Certificate of Education (UCE)</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our O-Level program provides a strong foundation in core subjects, 
                    preparing students for advanced studies and future career paths.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      4-year comprehensive program
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      Core and elective subjects
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      Practical laboratory sessions
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      Regular assessment and feedback
                    </li>
                  </ul>
                  <Button 
                    asChild
                    variant="link" 
                    className="p-0 text-[#6e1010] hover:text-[#6e1010]/80"
                  >
                    <Link href="/academics/o-level" className="flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>

          {/* A-Level Program */}
          <FadeInSection delay={0.2}>
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="A-Level students in laboratory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="w-5 h-5" />
                    <h3 className="text-xl font-semibold">A-Level Program</h3>
                  </div>
                  <p className="text-sm text-white/90">Uganda Advanced Certificate of Education (UACE)</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Our A-Level program offers specialized subject combinations, 
                    preparing students for university education and professional careers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      2-year specialized program
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      Science and Arts combinations
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      Advanced research projects
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                      University preparation guidance
                    </li>
                  </ul>
                  <Button 
                    asChild
                    variant="link" 
                    className="p-0 text-[#6e1010] hover:text-[#6e1010]/80"
                  >
                    <Link href="/academics/a-level" className="flex items-center gap-2">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

