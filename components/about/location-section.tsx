import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import Link from "next/link"

export function LocationSection() {
  return (
    <section className="py-8 sm:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Visit Our Campus"
          subtitle="We're conveniently located in the heart of Kisowera"
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Map Card */}
          <FadeInSection>
            <Card className="h-full border-none shadow-lg overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[400px]">
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

          {/* Contact Info Card */}
          <FadeInSection delay={0.2}>
            <Card className="h-full border-none shadow-lg">
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Visit us to experience our vibrant learning environment firsthand
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#6e1010]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Address</p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Plot 123, Kisowera Road<br />
                        P.O. Box 1234<br />
                        Mukono, Uganda
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#6e1010]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Office Hours</p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#6e1010]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <div className="space-y-1">
                        <Link 
                          href="tel:+256123456789" 
                          className="block text-muted-foreground hover:text-[#6e1010] transition-colors text-sm sm:text-base"
                        >
                          Tel: +256 123 456 789
                        </Link>
                        <Link 
                          href="tel:+256987654321" 
                          className="block text-muted-foreground hover:text-[#6e1010] transition-colors text-sm sm:text-base"
                        >
                          Mobile: +256 987 654 321
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#6e1010]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#6e1010]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <div className="space-y-1">
                        <Link 
                          href="mailto:info@kisowerasecondary.ac.ug" 
                          className="block text-muted-foreground hover:text-[#6e1010] transition-colors text-sm sm:text-base break-words"
                        >
                          info@kisowerasecondary.ac.ug
                        </Link>
                        <Link 
                          href="mailto:admissions@kisowerasecondary.ac.ug" 
                          className="block text-muted-foreground hover:text-[#6e1010] transition-colors text-sm sm:text-base break-words"
                        >
                          admissions@kisowerasecondary.ac.ug
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

