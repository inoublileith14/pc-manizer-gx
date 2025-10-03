"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Crop, RotateCcw, Check, Move } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CropSectionProps {
  imageUrl: string
  onCropComplete: (croppedUrl: string) => void
  onReset: () => void
}

interface CropArea {
  x: number
  y: number
  size: number
}

export function CropSection({ imageUrl, onCropComplete, onReset }: CropSectionProps) {
  const [cropArea, setCropArea] = useState<CropArea | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isCropping, setIsCropping] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current && containerRef.current) {
      const img = imageRef.current
      const container = containerRef.current

      const initializeCropArea = () => {
        const rect = container.getBoundingClientRect()
        const imgRect = img.getBoundingClientRect()

        // Calculate displayed image dimensions
        const displayWidth = imgRect.width
        const displayHeight = imgRect.height

        // Calculate initial crop area (centered square, 60% of smaller dimension)
        const minDimension = Math.min(displayWidth, displayHeight)
        const initialSize = minDimension * 0.6

        setCropArea({
          x: (displayWidth - initialSize) / 2,
          y: (displayHeight - initialSize) / 2,
          size: initialSize,
        })
      }

      if (img.complete) {
        initializeCropArea()
      } else {
        img.onload = initializeCropArea
      }
    }
  }, [imageUrl])

  const isInsideCropArea = (x: number, y: number): boolean => {
    if (!cropArea) return false
    return x >= cropArea.x && x <= cropArea.x + cropArea.size && y >= cropArea.y && y <= cropArea.y + cropArea.size
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (cropArea && isInsideCropArea(x, y)) {
      setIsMoving(true)
      setIsDragging(true)
      setDragStart({ x: x - cropArea.x, y: y - cropArea.y })
    } else {
      // Start new crop area
      setIsMoving(false)
      setIsDragging(true)
      setDragStart({ x, y })
      setCropArea({
        x,
        y,
        size: 0,
      })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !cropArea || !containerRef.current || !imageRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const imgRect = imageRef.current.getBoundingClientRect()
    const currentX = e.clientX - rect.left
    const currentY = e.clientY - rect.top

    if (isMoving) {
      const newX = Math.max(0, Math.min(currentX - dragStart.x, imgRect.width - cropArea.size))
      const newY = Math.max(0, Math.min(currentY - dragStart.y, imgRect.height - cropArea.size))
      setCropArea({ ...cropArea, x: newX, y: newY })
    } else {
      // Creating new crop area
      const deltaX = Math.abs(currentX - dragStart.x)
      const deltaY = Math.abs(currentY - dragStart.y)
      const size = Math.max(deltaX, deltaY)

      const x = currentX < dragStart.x ? currentX : dragStart.x
      const y = currentY < dragStart.y ? currentY : dragStart.y

      const maxSize = Math.min(imgRect.width - x, imgRect.height - y, x + size, y + size)
      setCropArea({ x, y, size: Math.min(size, maxSize) })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    setIsMoving(false)
  }

  const handleCrop = () => {
    console.log("[v0] Starting crop operation", { cropArea })

    if (!cropArea || cropArea.size < 10) {
      console.log("[v0] Crop area too small or not defined")
      return
    }

    if (!imageRef.current || !canvasRef.current) {
      console.log("[v0] Missing image or canvas reference")
      return
    }

    setIsCropping(true)

    // Use setTimeout to ensure UI updates before heavy canvas operation
    setTimeout(() => {
      try {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")
        if (!ctx) {
          console.log("[v0] Failed to get canvas context")
          setIsCropping(false)
          return
        }

        const img = imageRef.current!

        const scaleX = img.naturalWidth / img.width
        const scaleY = img.naturalHeight / img.height

        console.log("[v0] Image dimensions", {
          natural: { width: img.naturalWidth, height: img.naturalHeight },
          displayed: { width: img.width, height: img.height },
          scale: { x: scaleX, y: scaleY },
        })

        // Set canvas size to crop area size (using natural dimensions)
        const naturalCropSize = cropArea.size * scaleX
        canvas.width = naturalCropSize
        canvas.height = naturalCropSize

        console.log("[v0] Canvas size set to", naturalCropSize)

        // Draw cropped image using natural dimensions
        ctx.drawImage(
          img,
          cropArea.x * scaleX,
          cropArea.y * scaleY,
          naturalCropSize,
          naturalCropSize,
          0,
          0,
          naturalCropSize,
          naturalCropSize,
        )

        // Convert to data URL
        const croppedUrl = canvas.toDataURL("image/png")
        console.log("[v0] Crop complete, data URL length:", croppedUrl.length)

        setIsCropping(false)
        onCropComplete(croppedUrl)
      } catch (error) {
        console.error("[v0] Error during crop:", error)
        setIsCropping(false)
      }
    }, 100)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="p-8 border-2 border-border relative overflow-hidden">
          {/* Corner decorations */}
          <motion.div
            className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
          />

          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-3 flex items-center gap-3">
              <Crop className="w-8 h-8 text-primary glow-primary" />
              Crop Your Image
            </h3>
            <p className="text-muted-foreground text-lg">
              {cropArea && cropArea.size > 10
                ? "Perfect! Click 'Crop Image' to continue"
                : "Click and drag to create a square selection"}
            </p>
          </div>

          <div
            ref={containerRef}
            className="relative bg-muted rounded-lg overflow-hidden cursor-crosshair mb-8 border-2 border-border"
            style={{ maxHeight: "600px" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              ref={imageRef}
              src={imageUrl || "/placeholder.svg"}
              alt="Upload preview"
              className="w-full h-auto"
              crossOrigin="anonymous"
            />

            {cropArea && cropArea.size > 0 && (
              <>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 pointer-events-none" />

                <motion.div
                  className="absolute border-2 border-primary pointer-events-none"
                  style={{
                    left: cropArea.x,
                    top: cropArea.y,
                    width: cropArea.size,
                    height: cropArea.size,
                    cursor: isMoving ? "move" : "crosshair",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 glow-primary-strong" />

                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-accent"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.25 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-secondary"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary"
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: 0.75 }}
                  />

                  {/* Center crosshair */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-10 h-[2px] bg-primary glow-primary"
                      animate={{ scaleX: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.div
                      className="w-[2px] h-10 bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-primary"
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>

                  {isMoving && (
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/20 rounded-full p-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <Move className="w-6 h-6 text-primary" />
                    </motion.div>
                  )}
                </motion.div>
              </>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={onReset}
              disabled={isCropping}
              className="border-2 border-border hover:border-secondary hover:bg-secondary/10 bg-transparent text-lg px-8"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
            <Button
              size="lg"
              onClick={handleCrop}
              disabled={!cropArea || cropArea.size < 10 || isCropping}
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-strong font-bold text-lg px-10 border-2 border-primary/50"
            >
              {isCropping ? (
                <>
                  <motion.div
                    className="w-5 h-5 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  Processing...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Crop Image
                </>
              )}
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Hidden canvas for cropping */}
      <canvas ref={canvasRef} className="hidden" />
    </div>
  )
}
