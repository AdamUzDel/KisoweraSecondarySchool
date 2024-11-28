import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, FlaskRoundIcon as Flask, Globe, Calculator, Music, Users } from 'lucide-react'

export function CurriculumSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Our Curriculum"
          subtitle="A balanced approach to academic excellence and personal development"
        />

        <div className="mt-12">
          <Tabs defaultValue="core" className="space-y-8">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
              <TabsTrigger value="core" className="data-[state=active]:bg-[#6e1010] data-[state=active]:text-white">
                Core Subjects
              </TabsTrigger>
              <TabsTrigger value="sciences" className="data-[state=active]:bg-[#6e1010] data-[state=active]:text-white">
                Sciences
              </TabsTrigger>
              <TabsTrigger value="languages" className="data-[state=active]:bg-[#6e1010] data-[state=active]:text-white">
                Languages
              </TabsTrigger>
              <TabsTrigger value="humanities" className="data-[state=active]:bg-[#6e1010] data-[state=active]:text-white">
                Humanities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Calculator,
                    title: "Mathematics",
                    description: "Advanced mathematical concepts including algebra, geometry, and statistics",
                    topics: ["Algebra", "Geometry", "Trigonometry", "Statistics"]
                  },
                  {
                    icon: Globe,
                    title: "English Language",
                    description: "Comprehensive English language skills development",
                    topics: ["Grammar", "Literature", "Composition", "Comprehension"]
                  },
                  {
                    icon: BookOpen,
                    title: "Religious Education",
                    description: "Understanding various religious beliefs and moral values",
                    topics: ["Christianity", "Islam", "Ethics", "Moral Education"]
                  }
                ].map((subject, index) => (
                  <FadeInSection key={index} delay={0.1 * index}>
                    <SubjectCard {...subject} />
                  </FadeInSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sciences" className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Flask,
                    title: "Physics",
                    description: "Exploring physical phenomena and scientific principles",
                    topics: ["Mechanics", "Electricity", "Optics", "Modern Physics"]
                  },
                  {
                    icon: Flask,
                    title: "Chemistry",
                    description: "Understanding chemical processes and reactions",
                    topics: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analysis"]
                  },
                  {
                    icon: Flask,
                    title: "Biology",
                    description: "Study of living organisms and life processes",
                    topics: ["Cell Biology", "Genetics", "Ecology", "Human Biology"]
                  }
                ].map((subject, index) => (
                  <FadeInSection key={index} delay={0.1 * index}>
                    <SubjectCard {...subject} />
                  </FadeInSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="languages" className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Luganda",
                    description: "Native language studies and cultural appreciation",
                    topics: ["Grammar", "Literature", "Oral Skills", "Writing"]
                  },
                  {
                    icon: Globe,
                    title: "French",
                    description: "Introduction to French language and culture",
                    topics: ["Basic Grammar", "Conversation", "Writing", "Culture"]
                  },
                  {
                    icon: Globe,
                    title: "Literature in English",
                    description: "Analysis of literary works and creative writing",
                    topics: ["Poetry", "Prose", "Drama", "Creative Writing"]
                  }
                ].map((subject, index) => (
                  <FadeInSection key={index} delay={0.1 * index}>
                    <SubjectCard {...subject} />
                  </FadeInSection>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="humanities" className="space-y-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Globe,
                    title: "History",
                    description: "Study of past events and their impact on society",
                    topics: ["World History", "African History", "Uganda History", "Current Affairs"]
                  },
                  {
                    icon: Users,
                    title: "Geography",
                    description: "Understanding physical and human geographical concepts",
                    topics: ["Physical Geography", "Human Geography", "Map Work", "Field Studies"]
                  },
                  {
                    icon: Music,
                    title: "Music",
                    description: "Exploration of music theory and practical skills",
                    topics: ["Theory", "Practical", "Composition", "Performance"]
                  }
                ].map((subject, index) => (
                  <FadeInSection key={index} delay={0.1 * index}>
                    <SubjectCard {...subject} />
                  </FadeInSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

interface SubjectCardProps {
  icon: React.ElementType
  title: string
  description: string
  topics: string[]
}

function SubjectCard({ icon: Icon, title, description, topics }: SubjectCardProps) {
  return (
    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-[#6e1010]" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="text-sm px-3 py-1 bg-[#6e1010]/5 rounded-full text-center"
            >
              {topic}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

