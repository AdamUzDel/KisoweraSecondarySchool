import { Metadata } from "next"
import { RegistrationForm } from "@/components/registration/registration-form"
import { FadeInSection } from "@/components/fade-in-section"

export const metadata: Metadata = {
  title: "Online Registration | Kisowera Secondary School",
  description: "Register for admission to Kisowera Secondary School. Start your journey towards academic excellence.",
}

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <FadeInSection>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Online Registration</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to begin your registration process at Kisowera Secondary School. 
              All fields marked with an asterisk (*) are required.
            </p>
          </div>
        </FadeInSection>
        
        <RegistrationForm />
      </div>
    </div>
  )
}
