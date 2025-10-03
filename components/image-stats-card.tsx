"use client"

import { motion } from "framer-motion"
import { FileImage, Ruler, HardDrive, Palette } from "lucide-react"
import { Card } from "@/components/ui/card"

interface ImageStatsCardProps {
  imageUrl: string
  onLoad?: (stats: ImageStats) => void
}

export interface ImageStats {
  width: number
  height: number
  fileSize: string
  format: string
}

export function ImageStatsCard({ imageUrl, onLoad }: ImageStatsCardProps) {
  const [stats, setStats] = React.useState<ImageStats | null>(null)

  React.useEffect(() => {
    const img = new Image()
    img.onload = () => {
      // Calculate file size from base64
      const base64Length = imageUrl.split(",")[1]?.length || 0
      const sizeInBytes = (base64Length * 3) / 4
      const sizeInKB = sizeInBytes / 1024
      const sizeInMB = sizeInKB / 1024

      const format = imageUrl.split(";")[0].split("/")[1]?.toUpperCase() || "UNKNOWN"

      const imageStats = {
        width: img.naturalWidth,
        height: img.naturalHeight,
        fileSize: sizeInMB > 1 ? `${sizeInMB.toFixed(2)} MB` : `${sizeInKB.toFixed(2)} KB`,
        format,
      }

      setStats(imageStats)
      onLoad?.(imageStats)
    }
    img.src = imageUrl
  }, [imageUrl, onLoad])

  if (!stats) return null

  const statItems = [
    {
      icon: Ruler,
      label: "Dimensions",
      value: `${stats.width} × ${stats.height}`,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
    },
    {
      icon: HardDrive,
      label: "File Size",
      value: stats.fileSize,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/30",
    },
    {
      icon: FileImage,
      label: "Format",
      value: stats.format,
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/30",
    },
    {
      icon: Palette,
      label: "Aspect Ratio",
      value: `${(stats.width / stats.height).toFixed(2)}:1`,
      color: "text-chart-4",
      bgColor: "bg-chart-4/10",
      borderColor: "border-chart-4/30",
    },
  ]

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card
            className={`relative overflow-hidden border-2 ${item.borderColor} ${item.bgColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
          >
            {/* Corner decorations */}
            <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${item.borderColor}`} />
            <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${item.borderColor}`} />
            <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${item.borderColor}`} />
            <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${item.borderColor}`} />

            <div className="p-4 relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <motion.div
                  className={`p-2 rounded-lg ${item.bgColor} border ${item.borderColor}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                </motion.div>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{item.label}</span>
              </div>
              <motion.p
                className={`text-xl font-bold ${item.color} font-mono`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {item.value}
              </motion.p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

import * as React from "react"
