import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <FadeInSection>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Contact Us
                </h1>
                <p className="text-lg text-muted-foreground">
                  We&apos;re here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "Address",
                    content: (
                      <>
                        Plot 123, Kisowera Road<br />
                        P.O. Box 1234<br />
                        Mukono, Uganda
                      </>
                    )
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <>
                        <Link 
                          href="tel:+256123456789"
                          className="block hover:text-[#6e1010] transition-colors"
                        >
                          Tel: +256 123 456 789
                        </Link>
                        <Link 
                          href="tel:+256987654321"
                          className="block hover:text-[#6e1010] transition-colors"
                        >
                          Mobile: +256 987 654 321
                        </Link>
                      </>
                    )
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <>
                        <Link 
                          href="mailto:info@kisowerasecondary.ac.ug"
                          className="block hover:text-[#6e1010] transition-colors break-words"
                        >
                          info@kisowerasecondary.ac.ug
                        </Link>
                        <Link 
                          href="mailto:admissions@kisowerasecondary.ac.ug"
                          className="block hover:text-[#6e1010] transition-colors break-words"
                        >
                          admissions@kisowerasecondary.ac.ug
                        </Link>
                      </>
                    )
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: (
                      <>
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </>
                    )
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-[#6e1010]" />
                        </div>
                        <div>
                          <h2 className="font-semibold mb-2">{item.title}</h2>
                          <div className="text-sm text-muted-foreground">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Map */}
          <FadeInSection delay={0.2}>
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="relative w-full h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7575586694855!2d32.71661771523688!3d0.31482397972559437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd1c0b7b6b15%3A0x3bd8b4ec6c6e8a51!2sCQ7C%2BVGQ%2C%20Kiswera!5e0!3m2!1sen!2sug!4v1701179243659!5m2!1sen!2sug"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kisowera Secondary School Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

