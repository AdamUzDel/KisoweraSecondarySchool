"use client"

import { useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PersonalInfoStep } from "./steps/personal-info-step"
import { ParentInfoStep } from "./steps/parent-info-step"
import { AcademicInfoStep } from "./steps/academic-info-step"
import { HealthInfoStep } from "./steps/health-info-step"
import { DocumentsStep } from "./steps/documents-step"
import { ReviewStep } from "./steps/review-step"
import { CheckCircle2, Loader2 } from 'lucide-react'
import { Progress } from "@/components/ui/progress"

export interface RegistrationFormData {
  // Personal Info
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  nationality: string
  religion: string
  address: string
  studentPhone: string
  studentEmail: string
  
  // Parent/Guardian Info
  parentName: string
  relationship: string
  parentPhone: string
  parentEmail: string
  parentOccupation: string
  parentAddress: string
  alternateContact: string
  
  // Academic Info
  previousSchool: string
  lastGrade: string
  yearCompleted: string
  applyingForClass: string
  academicAwards: string
  extraActivities: string
  
  // Health Info
  bloodGroup: string
  allergies: string
  medications: string
  conditions: string
  doctorName: string
  doctorPhone: string
  
  // Documents
  photoId: File | null
  previousResults: File | null
  birthCertificate: File | null
  medicalRecords: File | null
}

const steps = [
  { id: 1, title: "Personal Information", description: "Basic student details" },
  { id: 2, title: "Parent/Guardian", description: "Contact information" },
  { id: 3, title: "Academic", description: "Educational background" },
  { id: 4, title: "Health", description: "Medical information" },
  { id: 5, title: "Documents", description: "Required documents" },
  { id: 6, title: "Review", description: "Verify information" },
]

const initialFormData: RegistrationFormData = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  religion: "",
  address: "",
  studentPhone: "",
  studentEmail: "",
  parentName: "",
  relationship: "",
  parentPhone: "",
  parentEmail: "",
  parentOccupation: "",
  parentAddress: "",
  alternateContact: "",
  previousSchool: "",
  lastGrade: "",
  yearCompleted: "",
  applyingForClass: "",
  academicAwards: "",
  extraActivities: "",
  bloodGroup: "",
  allergies: "",
  medications: "",
  conditions: "",
  doctorName: "",
  doctorPhone: "",
  photoId: null,
  previousResults: null,
  birthCertificate: null,
  medicalRecords: null,
}

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<RegistrationFormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, boolean>>>({})

  const updateFormData = (data: Partial<RegistrationFormData>) => {
    setFormData(prev => ({ ...prev, ...data }))
    // Clear errors for updated fields
    const updatedErrors = { ...errors }
    Object.keys(data).forEach(key => {
      delete updatedErrors[key as keyof RegistrationFormData]
    })
    setErrors(updatedErrors)
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof RegistrationFormData, boolean>> = {}
    let isValid = true

    switch (step) {
      case 1:
        // Personal Info validation
        if (!formData.firstName) newErrors.firstName = true
        if (!formData.lastName) newErrors.lastName = true
        if (!formData.dateOfBirth) newErrors.dateOfBirth = true
        if (!formData.gender) newErrors.gender = true
        if (!formData.nationality) newErrors.nationality = true
        if (!formData.address) newErrors.address = true
        break
      case 2:
        // Parent Info validation
        if (!formData.parentName) newErrors.parentName = true
        if (!formData.relationship) newErrors.relationship = true
        if (!formData.parentPhone) newErrors.parentPhone = true
        if (!formData.parentEmail) newErrors.parentEmail = true
        if (!formData.parentAddress) newErrors.parentAddress = true
        break
      case 3:
        // Academic Info validation
        if (!formData.previousSchool) newErrors.previousSchool = true
        if (!formData.lastGrade) newErrors.lastGrade = true
        if (!formData.yearCompleted) newErrors.yearCompleted = true
        if (!formData.applyingForClass) newErrors.applyingForClass = true
        break
      case 5:
        // Documents validation
        if (!formData.photoId) newErrors.photoId = true
        if (!formData.previousResults) newErrors.previousResults = true
        if (!formData.birthCertificate) newErrors.birthCertificate = true
        break
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      isValid = false
    }

    return isValid
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    setIsLoading(true)
    try {
      // TODO: Implement form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulated delay
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
      // TODO: Show error message
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <FadeInSection>
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Registration Submitted Successfully!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for registering with Kisowera Secondary School. We have received your application 
            and will review it shortly. You will receive a confirmation email with further instructions.
          </p>
          <p className="text-sm text-muted-foreground">
            Application Reference: {new Date().getTime().toString(36).toUpperCase()}
          </p>
        </Card>
      </FadeInSection>
    )
  }

  return (
    <FadeInSection>
      <Card className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Step {currentStep} of {steps.length}</span>
              <span className="text-sm text-muted-foreground">
                {steps[currentStep - 1].description}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / steps.length) * 100)}% Complete
            </span>
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-2" />
          <div className="hidden sm:grid grid-cols-6 gap-2 mt-4">
            {steps.map((step, index) => (
              <div key={step.id} className="text-center">
                <span className="hidden">{index}</span>
                <div
                  className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center ${
                    currentStep >= step.id
                      ? "bg-[#6e1010] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step.id}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="p-6">
          {currentStep === 1 && (
            <PersonalInfoStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <ParentInfoStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <AcademicInfoStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 4 && (
            <HealthInfoStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 5 && (
            <DocumentsStep
              formData={formData}
              updateFormData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 6 && (
            <ReviewStep
              formData={formData}
              onSubmit={handleSubmit}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1 || isLoading}
            >
              Previous
            </Button>
            {currentStep < steps.length ? (
              <Button
                className="bg-[#6e1010] hover:bg-[#7e2020]"
                onClick={handleNext}
                disabled={isLoading}
              >
                Next
              </Button>
            ) : (
              <Button
                className="bg-[#6e1010] hover:bg-[#7e2020]"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </FadeInSection>
  )
}
