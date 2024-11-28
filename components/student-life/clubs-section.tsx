import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Microscope, Globe, Heart, TreePine, Camera, Laptop, Music, Users, BookOpen, Palette } from 'lucide-react'

export function ClubsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeader
          title="Clubs & Societies"
          subtitle="Join diverse clubs that match your interests and develop your talents"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          {[
            {
              icon: Microscope,
              name: "Science Club",
              description: "Exploring scientific concepts through experiments and research",
              activities: [
                "Laboratory experiments",
                "Science fairs",
                "Research projects",
                "Field trips"
              ]
            },
            {
              icon: Globe,
              name: "Debate Club",
              description: "Developing critical thinking and public speaking skills",
              activities: [
                "Weekly debates",
                "Public speaking",
                "Competitions",
                "Leadership training"
              ]
            },
            {
              icon: Heart,
              name: "Red Cross Club",
              description: "Promoting health awareness and community service",
              activities: [
                "First aid training",
                "Health campaigns",
                "Community outreach",
                "Blood donation drives"
              ]
            },
            {
              icon: TreePine,
              name: "Environmental Club",
              description: "Creating awareness about environmental conservation",
              activities: [
                "Tree planting",
                "Recycling programs",
                "Environmental campaigns",
                "Nature walks"
              ]
            },
            {
              icon: Camera,
              name: "Photography Club",
              description: "Capturing moments and developing photography skills",
              activities: [
                "Photo walks",
                "Photography workshops",
                "Photo exhibitions",
                "Digital editing"
              ]
            },
            {
              icon: Laptop,
              name: "ICT Club",
              description: "Exploring technology and digital innovation",
              activities: [
                "Coding sessions",
                "Web development",
                "Digital literacy",
                "Tech projects"
              ]
            },
            {
              icon: Music,
              name: "Music Club",
              description: "Nurturing musical talents and appreciation",
              activities: [
                "Choir practice",
                "Instrument lessons",
                "Performances",
                "Music theory"
              ]
            },
            {
              icon: Users,
              name: "Writers Club",
              description: "Developing creative writing and literary skills",
              activities: [
                "Creative writing",
                "Poetry sessions",
                "Story telling",
                "Publication"
              ]
            },
            {
              icon: BookOpen,
              name: "Book Club",
              description: "Promoting reading culture and literary discussion",
              activities: [
                "Book reviews",
                "Reading sessions",
                "Literary discussions",
                "Writing workshops"
              ]
            },
            {
              icon: Palette,
              name: "Art Club",
              description: "Expressing creativity through various art forms",
              activities: [
                "Drawing classes",
                "Painting sessions",
                "Art exhibitions",
                "Craft workshops"
              ]
            }
          ].map((club, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <club.icon className="w-5 h-5 text-[#6e1010]" />
                    </div>
                    <h3 className="font-semibold">{club.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{club.description}</p>
                  <ul className="space-y-2">
                    {club.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6e1010]" />
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

