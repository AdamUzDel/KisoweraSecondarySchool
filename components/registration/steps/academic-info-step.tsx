import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AcademicInfoStepProps {
  formData: any
  updateFormData: (data: any) => void
}

export function AcademicInfoStep({ formData, updateFormData }: AcademicInfoStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-xl font-semibold mb-6">Academic Information</div>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="previousSchool" className="text-sm font-medium">
            Previous School *
          </label>
          <Input
            id="previousSchool"
            value={formData.previousSchool}
            onChange={(e) => updateFormData({ previousSchool: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastGrade" className="text-sm font-medium">
            Last Grade Completed *
          </label>
          <Input
            id="lastGrade"
            value={formData.lastGrade}
            onChange={(e) => updateFormData({ lastGrade: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="yearCompleted" className="text-sm font-medium">
            Year Completed *
          </label>
          <Input
            id="yearCompleted"
            type="number"
            min="2000"
            max={new Date().getFullYear()}
            value={formData.yearCompleted}
            onChange={(e) => updateFormData({ yearCompleted: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="applyingForClass" className="text-sm font-medium">
            Applying For Class *
          </label>
          <Select
            value={formData.applyingForClass}
            onValueChange={(value) => updateFormData({ applyingForClass: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="s1">Senior One (S.1)</SelectItem>
              <SelectItem value="s2">Senior Two (S.2)</SelectItem>
              <SelectItem value="s3">Senior Three (S.3)</SelectItem>
              <SelectItem value="s4">Senior Four (S.4)</SelectItem>
              <SelectItem value="s5">Senior Five (S.5)</SelectItem>
              <SelectItem value="s6">Senior Six (S.6)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="academicAwards" className="text-sm font-medium">
          Academic Awards & Achievements
        </label>
        <Textarea
          id="academicAwards"
          value={formData.academicAwards}
          onChange={(e) => updateFormData({ academicAwards: e.target.value })}
          placeholder="List any academic awards, certificates, or special achievements"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="extraActivities" className="text-sm font-medium">
          Extra-curricular Activities
        </label>
        <Textarea
          id="extraActivities"
          value={formData.extraActivities}
          onChange={(e) => updateFormData({ extraActivities: e.target.value })}
          placeholder="List any sports, clubs, or other activities you participated in"
          rows={3}
        />
      </div>
    </div>
  )
}
