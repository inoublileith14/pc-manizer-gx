"use client"

import { motion } from "framer-motion"
import { Download, Zap, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,0,64,0.15) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff0040]/10 to-[#ff6b35]/10 border border-[#ff0040]/30 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-[#ff0040]" />
            <span className="text-sm font-medium">Get Started</span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#ff0040] via-[#ff6b35] to-[#ffd23f] bg-clip-text text-transparent">
              Transform Your Images?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Start editing now. No downloads, no sign-ups, no credit card required. Just pure editing power in your
            browser.
          </p>

          {/* CTA Button */}
          <motion.div className="mb-12" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#ff0040] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#ffd23f] text-white font-semibold px-12 py-8 text-xl shadow-lg hover:shadow-[0_0_50px_rgba(255,0,64,0.6)] transition-all duration-300 group"
              asChild
            >
              <a href="#" className="flex items-center gap-3">
                <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" />
                Start Editing Now
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                  →
                </motion.div>
              </a>
            </Button>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: Zap, text: "Instant Access" },
              { icon: Shield, text: "100% Private" },
              { icon: Download, text: "Free Forever" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <feature.icon className="w-5 h-5 text-[#ff0040]" />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
