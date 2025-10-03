"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { motion } from "framer-motion"
import { Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface UploadSectionProps {
  onUpload: (imageUrl: string) => void
}

export function UploadSection({ onUpload }: UploadSectionProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setIsDragging(false)

      const file = e.dataTransfer.files[0]
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        const reader = new FileReader()
        reader.onload = (event) => {
          if (event.target?.result) {
            onUpload(event.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      }
    },
    [onUpload],
  )

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpload(event.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card
          className={`relative overflow-hidden transition-all duration-300 border-2 ${
            isDragging ? "border-primary glow-primary-strong scale-105" : "border-border hover:border-primary/50"
          }`}
          onDragOver={(e) => {
            e.preventDefault()
            setIsDragging(true)
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
        >
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

          <div className="p-12 text-center relative z-10">
            <motion.div
              className="mb-6 flex justify-center"
              animate={{
                scale: isDragging ? 1.3 : 1,
                rotate: isDragging ? 15 : 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative">
                <Upload className="w-20 h-20 text-primary" />
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.h3
              className="text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Drop your image here
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              or click to browse your files
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-strong font-bold text-lg px-8 py-6 border-2 border-primary/50"
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <ImageIcon className="w-5 h-5 mr-2" />
                  Choose Image
                </Button>
              </motion.div>
              <input
                id="file-input"
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={handleFileInput}
              />
            </motion.div>

            <motion.div
              className="mt-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-muted-foreground">Supported formats: </span>
              <span className="text-secondary font-mono font-bold">JPG</span>
              <span className="text-muted-foreground mx-2">•</span>
              <span className="text-secondary font-mono font-bold">PNG</span>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}
