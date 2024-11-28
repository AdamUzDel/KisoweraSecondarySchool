import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#6e1010] via-[#6e1010] to-[#8a1515] overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/5" />

      <div className="container relative">
        <SectionHeader
          title="About Our School"
          subtitle="Building character, nurturing excellence"
          className="text-white [&>p]:text-white/80"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FadeInSection delay={0.2}>
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/[0.15] transition-colors duration-300 text-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="inline-block w-8 h-[2px] bg-white/60 group-hover:w-12 transition-all duration-300" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  To provide quality education that empowers students to achieve academic 
                  excellence, develop strong moral character, and become responsible citizens 
                  who contribute positively to society.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.3}>
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/[0.15] transition-colors duration-300 text-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="inline-block w-8 h-[2px] bg-white/60 group-hover:w-12 transition-all duration-300" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  To be the leading institution in holistic education, producing well-rounded 
                  individuals who excel academically, morally, and socially.
                </p>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.4} className="md:col-span-2 lg:col-span-1">
            <Card className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/[0.15] transition-colors duration-300 text-white h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="inline-block w-8 h-[2px] bg-white/60 group-hover:w-12 transition-all duration-300" />
                  <span>Our Values</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Excellence in all endeavors",
                    "Integrity and moral uprightness",
                    "Respect for self and others",
                    "Innovation and creativity",
                    "Community service"
                  ].map((value, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>

        <FadeInSection delay={0.5} className="mt-12 text-center">
          <div className="inline-block rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4">
            <p className="text-lg font-medium text-white/80">School Motto</p>
            <p className="mt-2 text-2xl font-semibold text-white italic">
              "Faith and Determination"
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

