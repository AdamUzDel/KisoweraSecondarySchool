import Link from "next/link"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Newspaper, GraduationCap, Music, Users, Heart } from 'lucide-react'

export function CategoriesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="News Categories"
          subtitle="Browse news and updates by category"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {[
            {
              icon: Trophy,
              name: "Achievements",
              count: 24,
              color: "bg-[#6e1010]/10",
              textColor: "text-[#6e1010]"
            },
            {
              icon: Newspaper,
              name: "Announcements",
              count: 18,
              color: "bg-blue-100",
              textColor: "text-blue-600"
            },
            {
              icon: GraduationCap,
              name: "Academic",
              count: 32,
              color: "bg-green-100",
              textColor: "text-green-600"
            },
            {
              icon: Music,
              name: "Arts & Culture",
              count: 15,
              color: "bg-purple-100",
              textColor: "text-purple-600"
            },
            {
              icon: Users,
              name: "Student Life",
              count: 27,
              color: "bg-orange-100",
              textColor: "text-orange-600"
            },
            {
              icon: Heart,
              name: "Community",
              count: 21,
              color: "bg-pink-100",
              textColor: "text-pink-600"
            }
          ].map((category, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Link href={`/news/category/${category.name.toLowerCase().replace(/ /g, '-')}`}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full ${category.color} mx-auto mb-4 flex items-center justify-center`}>
                      <category.icon className={`w-6 h-6 ${category.textColor}`} />
                    </div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} Articles
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

