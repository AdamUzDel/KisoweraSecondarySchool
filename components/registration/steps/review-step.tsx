import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { RegistrationFormData } from "../registration-form"

interface ReviewStepProps {
  formData: RegistrationFormData
  onSubmit: () => void
}

export function ReviewStep({ formData, onSubmit }: ReviewStepProps) {
  const sections = [
    {
      title: "Personal Information",
      fields: [
        { label: "First Name", key: "firstName" },
        { label: "Last Name", key: "lastName" },
        { label: "Date of Birth", key: "dateOfBirth" },
        { label: "Gender", key: "gender" },
        { label: "Nationality", key: "nationality" },
        { label: "Religion", key: "religion" },
        { label: "Address", key: "address" },
        { label: "Phone", key: "studentPhone" },
        { label: "Email", key: "studentEmail" },
      ]
    },
    {
      title: "Parent/Guardian Information",
      fields: [
        { label: "Name", key: "parentName" },
        { label: "Relationship", key: "relationship" },
        { label: "Phone", key: "parentPhone" },
        { label: "Email", key: "parentEmail" },
        { label: "Occupation", key: "parentOccupation" },
        { label: "Address", key: "parentAddress" },
        { label: "Alternative Contact", key: "alternateContact" },
      ]
    },
    {
      title: "Academic Information",
      fields: [
        { label: "Previous School", key: "previousSchool" },
        { label: "Last Grade", key: "lastGrade" },
        { label: "Year Completed", key: "yearCompleted" },
        { label: "Applying For Class", key: "applyingForClass" },
        { label: "Academic Awards", key: "academicAwards" },
        { label: "Extra Activities", key: "extraActivities" },
      ]
    },
    {
      title: "Health Information",
      fields: [
        { label: "Blood Group", key: "bloodGroup" },
        { label: "Allergies", key: "allergies" },
        { label: "Medications", key: "medications" },
        { label: "Medical Conditions", key: "conditions" },
        { label: "Doctor's Name", key: "doctorName" },
        { label: "Doctor's Phone", key: "doctorPhone" },
      ]
    },
    {
      title: "Documents",
      fields: [
        { label: "Passport Photo", key: "photoId" },
        { label: "Academic Results", key: "previousResults" },
        { label: "Birth Certificate", key: "birthCertificate" },
        { label: "Medical Records", key: "medicalRecords" },
      ]
    }
  ]

  const handleSubmit = () => {
    const checkbox = document.getElementById('declaration') as HTMLInputElement
    if (checkbox.checked) {
      onSubmit()
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-6">Review Your Information</div>
      
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="font-medium text-lg">{section.title}</h3>
            <Table>
              <TableBody>
                {section.fields.map((field) => {
                  const value = formData[field.key as keyof RegistrationFormData]
                  let displayValue: string = 'Not provided'

                  if (value instanceof File) {
                    displayValue = value.name
                  } else if (value) {
                    displayValue = value.toString()
                  }

                  return (
                    <TableRow key={field.key}>
                      <TableCell className="font-medium w-1/3">
                        {field.label}
                      </TableCell>
                      <TableCell>{displayValue}</TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>

      <div className="border-t pt-6 mt-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="declaration"
              className="rounded border-gray-300 text-[#6e1010] focus:ring-[#6e1010]"
              onChange={handleSubmit}
              required
            />
            <label htmlFor="declaration" className="text-sm">
              I declare that all the information provided above is true and accurate to the best of my knowledge.
            </label>
          </div>
          <p className="text-sm text-muted-foreground">
            By submitting this form, you agree to our{" "}
            <Link href="/terms" className="text-[#6e1010] hover:underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-[#6e1010] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

