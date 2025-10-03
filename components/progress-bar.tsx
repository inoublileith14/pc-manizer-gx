"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

const steps = [
  { number: 1, label: "Upload" },
  { number: 2, label: "Crop" },
  { number: 3, label: "Customize" },
  { number: 4, label: "Download" },
]

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <motion.div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold border-2 transition-all relative ${
                  currentStep > step.number
                    ? "bg-primary border-primary text-primary-foreground glow-primary-strong"
                    : currentStep === step.number
                      ? "bg-accent border-accent text-accent-foreground glow-accent-strong scale-110"
                      : "bg-card border-border text-muted-foreground"
                }`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: currentStep === step.number ? 1.1 : 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {currentStep === step.number && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-accent"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                )}
                {currentStep > step.number ? (
                  <Check className="w-7 h-7" />
                ) : (
                  <span className="text-lg">{step.number}</span>
                )}
              </motion.div>
              <span
                className={`text-sm mt-2 font-semibold transition-colors ${
                  currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 bg-border relative overflow-hidden rounded-full">
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    currentStep > step.number ? "bg-primary glow-primary" : "bg-border"
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: currentStep > step.number ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
