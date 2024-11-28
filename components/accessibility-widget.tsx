"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Accessibility } from 'lucide-react'

export default function AccessibilityWidget() {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0])
    document.documentElement.style.fontSize = `${value[0]}%`
  }

  const handleHighContrastChange = (checked: boolean) => {
    setHighContrast(checked)
    if (checked) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="fixed right-4 top-1/2 z-50 rounded-full"
        >
          <Accessibility className="h-4 w-4" />
          <span className="sr-only">Accessibility settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Accessibility Settings</SheetTitle>
          <SheetDescription>
            Customize your viewing experience.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-medium">Font Size</h3>
            <Slider
              value={[fontSize]}
              onValueChange={handleFontSizeChange}
              min={75}
              max={150}
              step={5}
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Smaller</span>
              <span>Larger</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h3 className="text-sm font-medium">High Contrast</h3>
              <p className="text-xs text-muted-foreground">
                Increase color contrast for better readability
              </p>
            </div>
            <Switch
              checked={highContrast}
              onCheckedChange={handleHighContrastChange}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

