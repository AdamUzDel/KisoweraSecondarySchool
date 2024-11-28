import { SectionHeader } from "@/components/section-header"
import { FadeInSection } from "@/components/fade-in-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <FadeInSection>
            <Card className="border-none shadow-lg bg-[#6e1010] text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-6 flex items-center justify-center">
                  <Bell className="w-8 h-8" />
                </div>
                
                <SectionHeader
                  title="Stay Updated"
                  subtitle="Subscribe to our newsletter for the latest news and updates"
                  className="text-white [&>p]:text-white/80"
                />

                <form className="mt-8 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-white text-[#6e1010] hover:bg-white/90"
                    >
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-white/60">
                    By subscribing, you agree to receive school news and event updates. 
                    You can unsubscribe at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

