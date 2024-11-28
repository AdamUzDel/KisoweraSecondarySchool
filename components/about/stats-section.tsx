import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Users, GraduationCap, Trophy, Building2 } from 'lucide-react'

export function StatsSection() {
  return (
    <section className="py-16 bg-[#6e1010] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative">
        <SectionHeader
          title="School at a Glance"
          subtitle="Key figures that define our success"
          className="text-white [&>p]:text-white/80"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            {
              icon: Users,
              number: "1200+",
              label: "Students"
            },
            {
              icon: GraduationCap,
              number: "95%",
              label: "Pass Rate"
            },
            {
              icon: Trophy,
              number: "50+",
              label: "Awards"
            },
            {
              icon: Building2,
              number: "25+",
              label: "Facilities"
            }
          ].map((stat, index) => (
            <FadeInSection key={index} delay={0.1 * index}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
