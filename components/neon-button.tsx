"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends ButtonProps {
  glowColor?: "primary" | "accent" | "secondary"
  children: React.ReactNode
}

export function NeonButton({ glowColor = "primary", className, children, ...props }: NeonButtonProps) {
  const glowClass = {
    primary: "hover:shadow-[0_0_30px_rgba(255,31,64,0.8),0_0_60px_rgba(255,31,64,0.5)] hover:border-primary",
    accent: "hover:shadow-[0_0_30px_rgba(255,0,110,0.8),0_0_60px_rgba(255,0,110,0.5)] hover:border-accent",
    secondary: "hover:shadow-[0_0_30px_rgba(0,217,255,0.8),0_0_60px_rgba(0,217,255,0.5)] hover:border-secondary",
  }[glowColor]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={cn("relative transition-all duration-300 border-2", glowClass, className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
