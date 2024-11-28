import Link from "next/link"
import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Tag } from 'lucide-react'

export function NewsGridSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Latest News"
          subtitle="Stay informed about the latest happenings at our school"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Students Excel in National Mathematics Competition",
              date: "2024-02-20",
              category: "Achievement",
              description: "Our mathematics team secured top positions in the national competition.",
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              title: "New Computer Lab Inauguration",
              date: "2024-02-15",
              category: "Facilities",
              description: "State-of-the-art computer lab equipped with latest technology.",
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              title: "Community Service Initiative Launch",
              date: "2024-02-10",
              category: "Community",
              description: "Students begin new environmental conservation project.",
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              title: "Annual Music Festival Winners",
              date: "2024-02-05",
              category: "Arts",
              description: "School choir wins multiple awards at the regional music festival.",
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              title: "Career Guidance Workshop",
              date: "2024-01-30",
              category: "Events",
              description: "Professional career counselors provide guidance to senior students.",
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              title: "Sports Team District Champions",
              date: "2024-01-25",
              category: "Sports",
              description: "Football and netball teams emerge victorious in district championships.",
              image: "/placeholder.svg?height=400&width=600"
            }
          ].map((article, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#6e1010] px-3 py-1.5 text-sm text-white">
                    <Tag className="w-3.5 h-3.5" />
                    <span className="font-medium">{article.category}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={article.date}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {article.description}
                  </p>
                  <Button asChild variant="link" className="p-0 text-[#6e1010]">
                    <Link 
                      href={`/news/${article.title.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-2"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/news/archive" className="flex items-center gap-2">
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

