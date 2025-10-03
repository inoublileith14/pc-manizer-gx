"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-xl sticky top-0 z-50 relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{
          opacity: [0.3, 1, 0.3],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-8 max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-12">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="relative p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/30"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 31, 64, 0.3)",
                  "0 0 40px rgba(255, 31, 64, 0.6)",
                  "0 0 20px rgba(255, 31, 64, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Zap className="w-7 h-7 text-primary" fill="currentColor" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold font-sans tracking-tight">
                PC Manizer <span className="text-primary">GX</span>
              </h1>
              <p className="text-xs text-muted-foreground font-mono mt-0.5">Image Editor v1.0</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-muted-foreground">ONLINE</span>
            </div>
            <div className="px-4 py-2 bg-muted/30 rounded-md border border-border/50 text-xs font-mono">
              <span className="text-muted-foreground">Build</span>{" "}
              <span className="text-foreground font-bold">2025.1</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transform Your{" "}
            <span className="relative inline-block">
              <span className="text-primary glow-primary-strong">Images</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional image editing with <span className="text-foreground font-semibold">precision cropping</span>{" "}
            and <span className="text-foreground font-semibold">powerful filters</span>. Built for creators who demand
            excellence.
          </motion.p>
        </motion.div>
      </div>
    </header>
  )
}
