import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import { Newspaper } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1000&width=2000"
          alt="School events and activities"
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
              <Newspaper className="w-8 h-8" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                News & Events
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Stay updated with the latest happenings, achievements, and upcoming events 
              at Kisowera Secondary School.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                School News
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Academic Events
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Sports Updates
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                Student Achievements
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

