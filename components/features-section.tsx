"use client"

import { motion } from "framer-motion"
import { Crop, Palette, Zap, Download, Shield, Sparkles } from "lucide-react"

const features = [
  {
    icon: Crop,
    title: "Precision Cropping",
    description: "Crop your images with pixel-perfect accuracy. Drag, resize, and position with ease.",
    color: "#ff0040",
  },
  {
    icon: Palette,
    title: "Powerful Filters",
    description: "Apply professional-grade filters including brightness, contrast, saturation, and more.",
    color: "#ff6b35",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process images in milliseconds with our optimized engine. No waiting, just results.",
    color: "#ffd23f",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Download your edited images instantly in high quality. No compression, no loss.",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "All processing happens in your browser. Your images never leave your device.",
    color: "#3b82f6",
  },
  {
    icon: Sparkles,
    title: "No Sign-Up Required",
    description: "Start editing immediately. No accounts, no subscriptions, no hassle.",
    color: "#ff0040",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff0040]/10 to-[#ff6b35]/10 border border-[#ff0040]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#ff0040]" />
            <span className="text-sm font-medium">Features</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#ff0040] via-[#ff6b35] to-[#ffd23f] bg-clip-text text-transparent">
              Edit Like a Pro
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Powerful tools designed for speed, precision, and creativity. No compromises.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm h-full hover:border-[#ff0040]/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,0,64,0.2)]">
                {/* Corner Decorations */}
                <div
                  className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 rounded-tl-lg"
                  style={{ borderColor: feature.color }}
                />
                <div
                  className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 rounded-tr-lg"
                  style={{ borderColor: feature.color }}
                />
                <div
                  className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 rounded-bl-lg"
                  style={{ borderColor: feature.color }}
                />
                <div
                  className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 rounded-br-lg"
                  style={{ borderColor: feature.color }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff0040]/20 to-[#ff6b35]/20 border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: `${feature.color}40` }}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${feature.color}10 0%, transparent 70%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
