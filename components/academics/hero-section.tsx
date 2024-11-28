import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { GraduationCap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1000&width=2000"
          alt="Students in classroom"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 text-white">
        <FadeInSection>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Academic Excellence
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Our comprehensive academic programs are designed to nurture intellectual 
              curiosity, critical thinking, and a lifelong love for learning.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                O-Level & A-Level Programs
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                UNEB Certified
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Expert Faculty
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Modern Facilities
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

