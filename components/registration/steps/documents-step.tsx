import { Input } from "@/components/ui/input"
import { RegistrationFormData } from "../registration-form"
import { AlertCircle, Upload } from 'lucide-react'

interface DocumentsStepProps {
  formData: RegistrationFormData
  updateFormData: (data: Partial<RegistrationFormData>) => void
  errors: Partial<Record<keyof RegistrationFormData, boolean>>
}

export function DocumentsStep({
  formData,
  updateFormData,
  errors
}: DocumentsStepProps) {
  const handleFileChange = (field: keyof RegistrationFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateFormData({ [field]: file })
    }
  }

  const renderFileInput = (
    label: string,
    field: keyof RegistrationFormData,
    required: boolean = true,
    acceptedTypes: string = "image/*,.pdf"
  ) => {
    const isError = errors[field]
    const file = formData[field] as File | null
    
    return (
      <div className="space-y-2">
        <label htmlFor={field} className="text-sm font-medium flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <Input
            id={field}
            type="file"
            onChange={handleFileChange(field)}
            required={required}
            accept={acceptedTypes}
            className={`hidden ${isError ? "border-red-500 ring-red-500" : ""}`}
            aria-invalid={isError}
            aria-describedby={isError ? `${field}-error` : undefined}
          />
          <div 
            className={`flex items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer hover:border-[#6e1010] transition-colors ${
              isError ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => document.getElementById(field)?.click()}
          >
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-gray-400" />
              <div className="mt-2">
                {file ? (
                  <p className="text-sm text-gray-600">{file.name}</p>
                ) : (
                  <>
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {acceptedTypes.includes("image") ? "PNG, JPG" : ""} 
                      {acceptedTypes.includes("pdf") && " or PDF"}
                      {" up to 10MB"}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {isError && (
          <p 
            id={`${field}-error`} 
            className="text-xs text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            This document is required
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-6">Required Documents</div>
      
      <div className="grid gap-6">
        {renderFileInput(
          "Passport Size Photograph",
          "photoId",
          true,
          "image/*"
        )}
        
        {renderFileInput(
          "Previous Academic Results",
          "previousResults",
          true,
          ".pdf"
        )}
        
        {renderFileInput(
          "Birth Certificate",
          "birthCertificate",
          true,
          ".pdf"
        )}
        
        {renderFileInput(
          "Medical Records",
          "medicalRecords",
          false,
          ".pdf"
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Please ensure all documents are clear and legible. Accepted file formats are PNG, 
          JPG for photos and PDF for other documents. Maximum file size is 10MB per document.
        </p>
      </div>
    </div>
  )
}

