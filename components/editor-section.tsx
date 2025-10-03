"use client"

import { useState } from "react"
import { UploadSection } from "./upload-section"
import { CropSection } from "./crop-section"
import { CustomizeSection } from "./customize-section"
import { ResultSection } from "./result-section"
import { ProgressBar } from "./progress-bar"

type Step = "upload" | "crop" | "customize" | "result"

interface FilterSettings {
  brightness: number
  contrast: number
  saturation: number
  grayscale: boolean
  sepia: boolean
}

export function EditorSection() {
  const [currentStep, setCurrentStep] = useState<Step>("upload")
  const [uploadedImage, setUploadedImage] = useState<string>("")
  const [croppedImage, setCroppedImage] = useState<string>("")
  const [finalImage, setFinalImage] = useState<string>("")
  const [filters, setFilters] = useState<FilterSettings>({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    grayscale: false,
    sepia: false,
  })

  const handleUpload = (imageUrl: string) => {
    setUploadedImage(imageUrl)
    setCurrentStep("crop")
  }

  const handleCropComplete = (croppedUrl: string) => {
    setCroppedImage(croppedUrl)
    setCurrentStep("customize")
  }

  const handleProcessComplete = (finalUrl: string, appliedFilters: FilterSettings) => {
    setFinalImage(finalUrl)
    setFilters(appliedFilters)
    setCurrentStep("result")
  }

  const handleReset = () => {
    setCurrentStep("upload")
    setUploadedImage("")
    setCroppedImage("")
    setFinalImage("")
    setFilters({
      brightness: 100,
      contrast: 100,
      saturation: 100,
      grayscale: false,
      sepia: false,
    })
  }

  const handleBackToCrop = () => {
    setCurrentStep("crop")
  }

  const handleBackToUpload = () => {
    setCurrentStep("upload")
    setUploadedImage("")
  }

  const getStepNumber = (): number => {
    switch (currentStep) {
      case "upload":
        return 1
      case "crop":
        return 2
      case "customize":
        return 3
      case "result":
        return 4
      default:
        return 1
    }
  }

  return (
    <section id="editor" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gaming-purple/10 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Try It <span className="text-gaming-red">Now</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the power of PC Manizer GX. Upload, crop, customize, and download your images in seconds.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <ProgressBar currentStep={getStepNumber()} />
        </div>

        {/* Editor Steps */}
        <div className="max-w-6xl mx-auto">
          {currentStep === "upload" && <UploadSection onUpload={handleUpload} />}

          {currentStep === "crop" && (
            <CropSection imageUrl={uploadedImage} onCropComplete={handleCropComplete} onReset={handleBackToUpload} />
          )}

          {currentStep === "customize" && (
            <CustomizeSection
              imageUrl={croppedImage}
              onProcessComplete={handleProcessComplete}
              onBack={handleBackToCrop}
            />
          )}

          {currentStep === "result" && <ResultSection imageUrl={finalImage} onReset={handleReset} />}
        </div>
      </div>
    </section>
  )
}
