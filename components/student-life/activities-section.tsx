import Image from "next/image"
import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Music, BellIcon as Ball, Book, Users, Palette } from 'lucide-react'

export function ActivitiesSection() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeader
          title="Co-curricular Activities"
          subtitle="Developing well-rounded individuals through diverse activities"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: Ball,
              title: "Sports",
              description: "Competitive and recreational sports programs",
              activities: [
                "Football",
                "Netball",
                "Athletics",
                "Basketball",
                "Volleyball",
                "Table Tennis"
              ],
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              icon: Music,
              title: "Music & Performing Arts",
              description: "Creative expression through performance",
              activities: [
                "School Choir",
                "Traditional Dance",
                "Drama Club",
                "Music Band",
                "Poetry",
                "Public Speaking"
              ],
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              icon: Book,
              title: "Academic Clubs",
              description: "Extending learning beyond the classroom",
              activities: [
                "Debate Club",
                "Science Club",
                "Mathematics Club",
                "Writers Club",
                "Book Club",
                "ICT Club"
              ],
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              icon: Users,
              title: "Leadership & Service",
              description: "Developing tomorrow's leaders",
              activities: [
                "Student Council",
                "Prefect Body",
                "Scouts",
                "Red Cross",
                "Environment Club",
                "Community Service"
              ],
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              icon: Palette,
              title: "Arts & Creativity",
              description: "Nurturing artistic talents",
              activities: [
                "Art Club",
                "Crafts",
                "Photography",
                "Design",
                "Fashion Club",
                "Creative Writing"
              ],
              image: "/placeholder.svg?height=400&width=600"
            },
            {
              icon: Trophy,
              title: "Competitions",
              description: "Showcasing talents and skills",
              activities: [
                "Inter-House Competitions",
                "District Competitions",
                "National Competitions",
                "Music Festivals",
                "Sports Tournaments",
                "Academic Olympics"
              ],
              image: "/placeholder.svg?height=400&width=600"
            }
          ].map((activity, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-2">
                      <activity.icon className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">{activity.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 text-sm">{activity.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {activity.activities.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="text-sm px-2 py-1 bg-[#6e1010]/5 rounded-full text-center"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

