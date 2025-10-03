"use client"

import { motion } from "framer-motion"
import { Gamepad2, Trophy, Users, Zap } from "lucide-react"

export function GamingSection() {
  return (
    <section
      id="gaming"
      className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background to-card/30"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,0,64,0.1) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff0040]/10 to-[#8b5cf6]/10 border border-[#ff0040]/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Gamepad2 className="w-4 h-4 text-[#ff0040]" />
              <span className="text-sm font-medium">Gaming Optimized</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Built for{" "}
              <span className="bg-gradient-to-r from-[#ff0040] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent">
                Gamers & Creators
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Edit your gaming screenshots, stream thumbnails, and content with the speed and precision that gamers
              demand. No lag, no compromise.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Ultra-Fast Processing",
                  description: "Process images faster than your reaction time. Optimized for gaming workflows.",
                },
                {
                  icon: Trophy,
                  title: "Pro-Level Results",
                  description: "Create content that stands out. Professional quality without the learning curve.",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description: "Built with feedback from thousands of gamers and content creators.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#ff0040]/20 to-[#8b5cf6]/20 border border-[#ff0040]/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#ff0040]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Center Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "radial-gradient(circle, rgba(255,0,64,0.2) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Floating Cards */}
              {[
                { color: "#ff0040", delay: 0, x: -20, y: -20 },
                { color: "#ff6b35", delay: 0.2, x: 20, y: -20 },
                { color: "#8b5cf6", delay: 0.4, x: -20, y: 20 },
                { color: "#3b82f6", delay: 0.6, x: 20, y: 20 },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="absolute w-32 h-32 rounded-2xl border backdrop-blur-sm"
                  style={{
                    borderColor: `${card.color}40`,
                    background: `linear-gradient(135deg, ${card.color}20, transparent)`,
                    left: `${50 + card.x}%`,
                    top: `${50 + card.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: card.delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                  <div
                    className="absolute top-0 right-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                  <div
                    className="absolute bottom-0 left-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                </motion.div>
              ))}

              {/* Center Icon */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#ff0040] to-[#8b5cf6] flex items-center justify-center"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                  scale: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              >
                <Gamepad2 className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
