"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Zap, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Editor", href: "#editor" },
    { name: "Gaming", href: "#gaming" },
    { name: "Community", href: "#community" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff0040] to-transparent"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative p-2.5 bg-gradient-to-br from-[#ff0040]/20 to-[#ff6b35]/20 rounded-lg border border-[#ff0040]/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 0, 64, 0.3)",
                  "0 0 40px rgba(255, 0, 64, 0.6)",
                  "0 0 20px rgba(255, 0, 64, 0.3)",
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
            >
              <Zap className="w-6 h-6 text-[#ff0040]" fill="currentColor" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                PC Manizer <span className="text-[#ff0040]">GX</span>
              </h1>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff0040] to-[#ff6b35] opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="underline"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              className="bg-gradient-to-r from-[#ff0040] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#ffd23f] text-white font-semibold px-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,0,64,0.5)] transition-all duration-300"
              asChild
            >
              <a href="#download">Get Started</a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden border-t border-border/50 bg-card/95 backdrop-blur-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-[#ff0040] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#ffd23f] text-white font-semibold"
              asChild
            >
              <a href="#download" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
