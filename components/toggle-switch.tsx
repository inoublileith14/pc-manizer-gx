"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ToggleSwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  label?: string
  glowColor?: "primary" | "accent" | "secondary"
  disabled?: boolean
}

export function ToggleSwitch({
  checked,
  onCheckedChange,
  label,
  glowColor = "primary",
  disabled = false,
}: ToggleSwitchProps) {
  const colors = {
    primary: {
      bg: "bg-primary",
      glow: "shadow-[0_0_15px_rgba(255,31,64,0.6)]",
    },
    accent: {
      bg: "bg-accent",
      glow: "shadow-[0_0_15px_rgba(255,0,110,0.6)]",
    },
    secondary: {
      bg: "bg-secondary",
      glow: "shadow-[0_0_15px_rgba(0,217,255,0.6)]",
    },
  }

  const selectedColor = colors[glowColor]

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onCheckedChange(!checked)}
        className={cn(
          "relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300",
          checked ? `${selectedColor.bg} ${selectedColor.glow}` : "bg-muted",
          disabled && "opacity-50 cursor-not-allowed",
        )}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "inline-block h-5 w-5 rounded-full bg-foreground shadow-lg",
            checked ? "translate-x-8" : "translate-x-1",
          )}
        />
      </button>
      {label && <span className={cn("text-sm font-medium", disabled && "opacity-50")}>{label}</span>}
    </div>
  )
}
