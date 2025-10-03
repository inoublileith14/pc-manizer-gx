"use client"

import { motion } from "framer-motion"
import { Download, Share2, RotateCcw, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ResultSectionProps {
  imageUrl: string
  onReset: () => void
}

export function ResultSection({ imageUrl, onReset }: ResultSectionProps) {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = `pc-manizer-gx-${Date.now()}.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        const blob = await fetch(imageUrl).then((r) => r.blob())
        const file = new File([blob], "image.png", { type: "image/png" })
        await navigator.share({
          files: [file],
          title: "PC Manizer GX",
          text: "Check out my processed image!",
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-8 border-2 border-border relative overflow-hidden">
          {/* Corner decorations */}
          <motion.div
            className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-accent/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-secondary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/50"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
          />

          <motion.div
            className="mb-8 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <CheckCircle className="w-16 h-16 text-primary glow-primary-strong" />
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-16 h-16 text-accent" />
              </motion.div>
            </motion.div>
            <h3 className="text-5xl font-bold text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Image Ready!
            </h3>
            <p className="text-muted-foreground text-lg">Your masterpiece is complete</p>
          </motion.div>

          <motion.div
            className="relative bg-muted rounded-lg overflow-hidden mb-10 max-w-2xl mx-auto border-2 border-border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <img src={imageUrl || "/placeholder.svg"} alt="Final result" className="w-full h-auto" />
            <motion.div
              className="absolute inset-0 border-2 border-primary pointer-events-none glow-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 2, delay: 0.5, repeat: 1 }}
            />
            {/* Animated corner accents */}
            <motion.div
              className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            />
            <motion.div
              className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-accent"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-secondary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9, type: "spring" }}
            />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-strong font-bold text-lg px-8 border-2 border-primary/50"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Image
              </Button>
            </motion.div>

            {navigator.share && (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleShare}
                  className="border-2 border-accent hover:border-accent/80 hover:bg-accent/10 bg-transparent text-lg px-8"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share
                </Button>
              </motion.div>
            )}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={onReset}
                className="border-2 border-secondary hover:border-secondary/80 hover:bg-secondary/10 bg-transparent text-lg px-8"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Start Over
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.p
              className="text-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Processed with <span className="text-primary font-bold glow-primary">PC Manizer GX</span>
            </motion.p>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  )
}
