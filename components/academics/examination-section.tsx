import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, FileText, GraduationCap, Trophy } from 'lucide-react'

export function ExaminationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Examination & Assessment"
          subtitle="Comprehensive evaluation system to track and support student progress"
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Assessment Types */}
          <FadeInSection>
            <Card className="h-full border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#6e1010]" />
                  Assessment Types
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    title: "Continuous Assessment",
                    description: "Regular tests, quizzes, and assignments throughout the term",
                    points: [
                      "Weekly quizzes",
                      "Monthly tests",
                      "Class participation",
                      "Homework assignments"
                    ]
                  },
                  {
                    title: "End of Term Examinations",
                    description: "Comprehensive examinations at the end of each term",
                    points: [
                      "Theory papers",
                      "Practical examinations",
                      "Project evaluations",
                      "Oral assessments"
                    ]
                  }
                ].map((assessment, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold">{assessment.title}</h3>
                    <p className="text-sm text-muted-foreground">{assessment.description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {assessment.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#6e1010]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>
          </FadeInSection>

          {/* National Examinations */}
          <FadeInSection delay={0.2}>
            <Card className="h-full border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#6e1010]" />
                  National Examinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">UCE (O-Level)</h3>
                    <Trophy className="w-5 h-5 text-[#6e1010]" />
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Conducted by UNEB in November",
                      "8-10 subjects examined",
                      "Both theory and practical papers",
                      "Results released in January/February"
                    ].map((point, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">UACE (A-Level)</h3>
                    <Trophy className="w-5 h-5 text-[#6e1010]" />
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Conducted by UNEB in November/December",
                      "3 principal subjects and 2 subsidiaries",
                      "Theory, practical, and coursework assessment",
                      "Results released in February/March"
                    ].map((point, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-[#6e1010]/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Our students consistently achieve excellent results in national 
                    examinations, with many qualifying for university admission and 
                    scholarships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

