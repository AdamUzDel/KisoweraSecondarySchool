import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'

interface DocumentsStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export function DocumentsStep({ formData, updateFormData }: DocumentsStepProps) {
  const handleFileChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateFormData({ [field]: file })
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-6">Required Documents</div>
      
      <div className="space-y-8">
        {[
          {
            id: "photoId",
            label: "Recent Passport Photo *",
            description: "Upload a recent passport-sized photograph",
            accept: "image/*"
          },
          {
            id: "previousResults",
            label: "Previous Academic Results *",
            description: "Upload scanned copies of your previous academic results",
            accept: ".pdf,.jpg,.jpeg,.png"
          },
          {
            id: "birthCertificate",
            label: "Birth Certificate *",
            description: "Upload a scanned copy of your birth certificate",
            accept: ".pdf,.jpg,.jpeg,.png"
          },
          {
            id: "medicalRecords",
            label: "Medical Records",
            description: "Upload any relevant medical records or immunization certificates",
            accept: ".pdf,.jpg,.jpeg,.png"
          }
        ].map((doc) => (
          <div key={doc.id} className="space-y-2">
            <Label htmlFor={doc.id} className="text-sm font-medium">
              {doc.label}
            </Label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="border-2 border-dashed rounded-lg p-6 hover:border-[#6e1010] transition-colors">
                  <Input
                    id={doc.id}
                    type="file"
                    accept={doc.accept}
                    onChange={handleFileChange(doc.id)}
                    className="hidden"
                  />
                  <label
                    htmlFor={doc.id}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-8 h-8 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {formData[doc.id]
                        ? formData[doc.id].name
                        : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {doc.description}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
