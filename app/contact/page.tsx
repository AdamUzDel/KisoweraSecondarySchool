import { Metadata } from "next"
import { HeroSection } from "@/components/contact/hero-section"
import { ContactFormSection } from "@/components/contact/contact-form-section"
import { FaqSection } from "@/components/contact/faq-section"
import { CtaSection } from "@/components/contact/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Kisowera Secondary School",
  description: "Get in touch with Kisowera Secondary School. We're here to answer your questions and provide assistance.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ContactFormSection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

