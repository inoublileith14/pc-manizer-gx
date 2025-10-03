"use client"

import { motion } from "framer-motion"
import { Sparkles, Zap, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,0,64,0.15) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)" }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff0040]/10 to-[#ff6b35]/10 border border-[#ff0040]/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#ff0040]" />
            <span className="text-sm font-medium text-foreground">Powered by Gaming Technology</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="block mb-2">Transform Images</span>
            <span className="block bg-gradient-to-r from-[#ff0040] via-[#ff6b35] to-[#ffd23f] bg-clip-text text-transparent">
              Like a Pro Gamer
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional image editing with precision cropping and powerful filters. Built for creators who demand
            excellence and speed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ff0040] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#ffd23f] text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-[0_0_40px_rgba(255,0,64,0.6)] transition-all duration-300 group"
              asChild
            >
              <a href="#editor" className="flex items-center gap-2">
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Start Editing Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#ff0040]/30 hover:bg-[#ff0040]/10 hover:border-[#ff0040] px-8 py-6 text-lg group bg-transparent"
              asChild
            >
              <a href="#features" className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Features
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { value: "10K+", label: "Active Users" },
              { value: "50K+", label: "Images Edited" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 0, 64, 0.5)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#ff0040] rounded-full" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff6b35] rounded-full" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#ffd23f] rounded-full" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#8b5cf6] rounded-full" />
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-[#ff0040] to-[#ff6b35] bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
