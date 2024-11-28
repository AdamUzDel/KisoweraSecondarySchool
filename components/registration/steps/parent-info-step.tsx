import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RegistrationFormData } from "../registration-form"
import { AlertCircle } from 'lucide-react'

interface ParentInfoStepProps {
  formData: RegistrationFormData
  updateFormData: (data: Partial<RegistrationFormData>) => void
  errors: Partial<Record<keyof RegistrationFormData, boolean>>
}

export function ParentInfoStep({
  formData,
  updateFormData,
  errors
}: ParentInfoStepProps) {
  const renderFormField = (
    label: string,
    field: keyof RegistrationFormData,
    type: string = "text",
    required: boolean = true,
    options?: { value: string; label: string }[]
  ) => {
    const isError = errors[field]
    
    return (
      <div className="space-y-2">
        <label htmlFor={field} className="text-sm font-medium flex items-center gap-1">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        {options ? (
          <Select
            value={formData[field] as string}
            onValueChange={(value) => updateFormData({ [field]: value })}
          >
            <SelectTrigger
              className={isError ? "border-red-500 ring-red-500" : ""}
            >
              <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : (
          <Input
            id={field}
            type={type}
            value={formData[field] as string}
            onChange={(e) => updateFormData({ [field]: e.target.value })}
            required={required}
            className={isError ? "border-red-500 ring-red-500" : ""}
            aria-invalid={isError}
            aria-describedby={isError ? `${field}-error` : undefined}
          />
        )}
        {isError && (
          <p 
            id={`${field}-error`} 
            className="text-xs text-red-500 flex items-center gap-1"
          >
            <AlertCircle className="w-3 h-3" />
            This field is required
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-6">Parent/Guardian Information</div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {renderFormField("Parent/Guardian Name", "parentName")}
        {renderFormField("Relationship to Student", "relationship", "text", true, [
          { value: "father", label: "Father" },
          { value: "mother", label: "Mother" },
          { value: "guardian", label: "Legal Guardian" },
          { value: "other", label: "Other" }
        ])}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {renderFormField("Phone Number", "parentPhone", "tel")}
        {renderFormField("Email Address", "parentEmail", "email")}
      </div>

      <div className="space-y-2">
        {renderFormField("Occupation", "parentOccupation")}
      </div>

      <div className="space-y-2">
        {renderFormField("Residential Address", "parentAddress")}
      </div>

      <div className="space-y-2">
        {renderFormField("Alternative Contact", "alternateContact", "tel", false)}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Please provide accurate contact information. This will be used for all school communications 
          and emergency contacts.
        </p>
      </div>
    </div>
  )
}

