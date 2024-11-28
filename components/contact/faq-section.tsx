import { FadeInSection } from "@/components/fade-in-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Kisowera Secondary School.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What are the admission requirements?",
                  answer: "Admission requirements include previous academic records, entrance examination results, and an interview. Specific requirements vary by level (O-Level or A-Level). Contact our admissions office for detailed information."
                },
                {
                  question: "What are the school fees and payment options?",
                  answer: "School fees vary by level and whether the student is a day scholar or boarder. We offer flexible payment plans and accept various payment methods. Contact our accounts office for current fee structures and payment options."
                },
                {
                  question: "What facilities are available for students?",
                  answer: "We have modern classrooms, science laboratories, computer labs, library, sports facilities, dormitories, dining hall, and medical center. All facilities are well-maintained and regularly upgraded."
                },
                {
                  question: "What extracurricular activities are offered?",
                  answer: "We offer a wide range of activities including sports (football, netball, athletics), music, drama, debate club, science club, and various academic clubs. Students are encouraged to participate in activities that interest them."
                },
                {
                  question: "What is the boarding life like?",
                  answer: "Our boarding facilities provide a comfortable and secure environment. Students have structured study times, recreational activities, and receive three nutritious meals daily. Dormitories are supervised by experienced wardens."
                },
                {
                  question: "How can parents monitor their child's progress?",
                  answer: "We maintain regular communication through termly report cards, parent-teacher meetings, and our online portal. Parents can also schedule meetings with teachers or administrators as needed."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

