import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"

export function HeroSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/std_img_with_clergy.jpg?height=1000&width=2000"
          alt="Kisowera Secondary School Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 text-center text-white">
        <FadeInSection>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Kisowera Secondary School
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Since 1985, we have been nurturing young minds and shaping futures through 
            quality education, strong values, and a commitment to excellence.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
