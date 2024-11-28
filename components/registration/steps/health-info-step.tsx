import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RegistrationFormData } from "../registration-form"
import { AlertCircle } from 'lucide-react'

interface HealthInfoStepProps {
  formData: RegistrationFormData
  updateFormData: (data: Partial<RegistrationFormData>) => void
  errors: Partial<Record<keyof RegistrationFormData, boolean>>
}

export function HealthInfoStep({
  formData,
  updateFormData,
  errors
}: HealthInfoStepProps) {
  const renderFormField = (
    label: string,
    field: keyof RegistrationFormData,
    type: string = "text",
    required: boolean = true,
    options?: { value: string; label: string }[],
    isTextarea: boolean = false
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
        ) : isTextarea ? (
          <Textarea
            id={field}
            value={formData[field] as string}
            onChange={(e) => updateFormData({ [field]: e.target.value })}
            required={required}
            className={isError ? "border-red-500 ring-red-500" : ""}
            aria-invalid={isError}
            aria-describedby={isError ? `${field}-error` : undefined}
          />
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
      <div className="text-xl font-semibold mb-6">Health Information</div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {renderFormField("Blood Group", "bloodGroup", "text", true, [
          { value: "A+", label: "A+" },
          { value: "A-", label: "A-" },
          { value: "B+", label: "B+" },
          { value: "B-", label: "B-" },
          { value: "O+", label: "O+" },
          { value: "O-", label: "O-" },
          { value: "AB+", label: "AB+" },
          { value: "AB-", label: "AB-" }
        ])}
        {renderFormField("Known Allergies", "allergies", "text", false, undefined, true)}
      </div>

      <div className="space-y-2">
        {renderFormField("Current Medications", "medications", "text", false, undefined, true)}
      </div>

      <div className="space-y-2">
        {renderFormField("Medical Conditions", "conditions", "text", false, undefined, true)}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {renderFormField("Doctor's Name", "doctorName", "text", false)}
        {renderFormField("Doctor's Phone", "doctorPhone", "tel", false)}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          This information will be kept confidential and will only be used in case of medical 
          emergencies. Please ensure all critical health information is accurately provided.
        </p>
      </div>
    </div>
  )
}

