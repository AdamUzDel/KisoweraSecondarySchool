import Link from "next/link"
import { BookOpen, GraduationCap, Trophy } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"

export function AcademicsSection() {
  return (
    <section className="py-16 bg-[#6e1010] text-white">
      <div className="container">
        <SectionHeader
          title="Academic Excellence"
          subtitle="Comprehensive education for holistic development"
          className="text-white [&>p]:text-white/80"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "O-Level Program",
              subjects: ["Mathematics", "Sciences", "Languages", "Social Studies"],
              icon: BookOpen,
              link: "/academics#o-level"
            },
            {
              title: "A-Level Program",
              subjects: ["Sciences", "Arts", "Mathematics"],
              icon: GraduationCap,
              link: "/academics#a-level"
            },
            {
              title: "Special Programs",
              subjects: ["Computer Studies", "Agriculture", "Entrepreneurship"],
              icon: Trophy,
              link: "/academics#special"
            }
          ].map((program, index) => (
            <FadeInSection key={index} delay={0.2 * index}>
              <Link href={program.link}>
                <Card className="h-full bg-white/10 border-none text-white transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <program.icon className="h-8 w-8 mb-4" />
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.subjects.map((subject, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-white/80 mr-2" />
                          {subject}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="ghost" 
                      className="mt-6 w-full border border-white/20 hover:bg-white/10"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection delay={0.6}>
          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-[#6e1010] hover:bg-white/90"
            >
              <Link href="/academics">
                Explore Our Academic Programs
              </Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

