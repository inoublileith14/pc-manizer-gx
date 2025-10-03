"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { NeonButton } from "@/components/neon-button"
import { ToggleSwitch } from "@/components/toggle-switch"

interface CustomizeSectionProps {
  imageUrl: string
  onProcessComplete: (finalImageUrl: string, filters: FilterSettings) => void
  onBack: () => void
}

interface FilterSettings {
  brightness: number
  contrast: number
  saturation: number
  grayscale: boolean
  sepia: boolean
}

export function CustomizeSection({ onProcessComplete, onBack, imageUrl }: CustomizeSectionProps) {
  const [brightness, setBrightness] = useState([100])
  const [contrast, setContrast] = useState([100])
  const [saturation, setSaturation] = useState([100])
  const [grayscale, setGrayscale] = useState(false)
  const [sepia, setSepia] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const filterStyle = {
    filter: `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%) ${
      grayscale ? "grayscale(100%)" : ""
    } ${sepia ? "sepia(100%)" : ""}`,
  }

  const applyFiltersToImage = () => {
    if (!canvasRef.current || !imageRef.current) return imageUrl

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return imageUrl

    const img = imageRef.current

    // Set canvas size to match image
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight

    // Apply filters to canvas context
    ctx.filter = `brightness(${brightness[0]}%) contrast(${contrast[0]}%) saturate(${saturation[0]}%) ${
      grayscale ? "grayscale(100%)" : ""
    } ${sepia ? "sepia(100%)" : ""}`

    // Draw image with filters
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

    // Convert to data URL
    return canvas.toDataURL("image/png")
  }

  const handleProcess = () => {
    const finalImageUrl = applyFiltersToImage()
    const filters: FilterSettings = {
      brightness: brightness[0],
      contrast: contrast[0],
      saturation: saturation[0],
      grayscale,
      sepia,
    }
    onProcessComplete(finalImageUrl, filters)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="p-8 border-2 border-border relative overflow-hidden">
          {/* Corner decorations */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
          />

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold mb-3 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-8 h-8 text-accent glow-accent" />
              </motion.div>
              Customize Your Image
            </h3>
            <p className="text-muted-foreground text-lg">Adjust filters and effects to perfect your image</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Preview */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Label className="text-base font-semibold text-primary">Preview</Label>
              <motion.div
                className="relative bg-muted rounded-lg overflow-hidden aspect-square border-2 border-border"
                whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  ref={imageRef}
                  src={imageUrl || "/placeholder.svg"}
                  alt="Cropped preview"
                  className="w-full h-full object-cover transition-all duration-300"
                  style={filterStyle}
                  crossOrigin="anonymous"
                />
                <motion.div
                  className="absolute inset-0 border-2 border-primary pointer-events-none opacity-0 glow-primary"
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Controls */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ borderColor: "hsl(var(--primary))" }}
              >
                <Label className="text-base font-semibold flex justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary glow-primary" />
                    Brightness
                  </span>
                  <motion.span
                    className="text-primary font-mono text-lg"
                    key={brightness[0]}
                    initial={{ scale: 1.3, color: "hsl(var(--accent))" }}
                    animate={{ scale: 1, color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {brightness[0]}%
                  </motion.span>
                </Label>
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  min={0}
                  max={200}
                  step={1}
                  className="w-full"
                />
              </motion.div>

              <motion.div
                className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ borderColor: "hsl(var(--accent))" }}
              >
                <Label className="text-base font-semibold flex justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent glow-accent" />
                    Contrast
                  </span>
                  <motion.span
                    className="text-accent font-mono text-lg"
                    key={contrast[0]}
                    initial={{ scale: 1.3, color: "hsl(var(--primary))" }}
                    animate={{ scale: 1, color: "hsl(var(--accent))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {contrast[0]}%
                  </motion.span>
                </Label>
                <Slider value={contrast} onValueChange={setContrast} min={0} max={200} step={1} className="w-full" />
              </motion.div>

              <motion.div
                className="space-y-3 p-4 rounded-lg bg-muted/30 border border-border"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ borderColor: "hsl(var(--secondary))" }}
              >
                <Label className="text-base font-semibold flex justify-between">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary glow-secondary" />
                    Saturation
                  </span>
                  <motion.span
                    className="text-secondary font-mono text-lg"
                    key={saturation[0]}
                    initial={{ scale: 1.3, color: "hsl(var(--accent))" }}
                    animate={{ scale: 1, color: "hsl(var(--secondary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    {saturation[0]}%
                  </motion.span>
                </Label>
                <Slider
                  value={saturation}
                  onValueChange={setSaturation}
                  min={0}
                  max={200}
                  step={1}
                  className="w-full"
                />
              </motion.div>

              <motion.div
                className="pt-4 border-t-2 border-border space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Label className="text-base font-semibold">Effects</Label>
                <div className="space-y-3">
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <ToggleSwitch
                      checked={grayscale}
                      onCheckedChange={setGrayscale}
                      label="Grayscale"
                      glowColor="secondary"
                    />
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
                    <ToggleSwitch checked={sepia} onCheckedChange={setSepia} label="Sepia" glowColor="accent" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="pt-4 border-t-2 border-border">
                <NeonButton
                  variant="outline"
                  size="sm"
                  glowColor="secondary"
                  onClick={() => {
                    setBrightness([100])
                    setContrast([100])
                    setSaturation([100])
                    setGrayscale(false)
                    setSepia(false)
                  }}
                  className="w-full"
                >
                  Reset Filters
                </NeonButton>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <NeonButton
              variant="outline"
              size="lg"
              onClick={onBack}
              glowColor="secondary"
              className="border-2 border-border bg-transparent px-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </NeonButton>
            <NeonButton
              size="lg"
              onClick={handleProcess}
              glowColor="accent"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10"
            >
              Process Image
              <ArrowRight className="w-5 h-5 ml-2" />
            </NeonButton>
          </motion.div>
        </Card>
      </motion.div>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
