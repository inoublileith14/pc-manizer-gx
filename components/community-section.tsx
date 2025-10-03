"use client"

import { motion } from "framer-motion"
import { MessageSquare, Heart, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Alex Chen",
    role: "Twitch Streamer",
    content: "Best image editor for gaming content. Fast, powerful, and free!",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Content Creator",
    content: "I use this daily for my thumbnails. Saves me hours of work.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    role: "Pro Gamer",
    content: "Lightning fast and super easy to use. Perfect for quick edits.",
    rating: 5,
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20" />

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#ff0040]/10 to-[#8b5cf6]/10 border border-[#ff0040]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-4 h-4 text-[#ff0040]" />
            <span className="text-sm font-medium">Community</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#ff0040] via-[#ff6b35] to-[#ffd23f] bg-clip-text text-transparent">
              Thousands of Creators
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join a thriving community of gamers, streamers, and content creators who trust PC Manizer GX.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: TrendingUp, value: "10K+", label: "Active Users" },
            { icon: Star, value: "4.9/5", label: "User Rating" },
            { icon: MessageSquare, value: "500+", label: "Reviews" },
            { icon: Heart, value: "95%", label: "Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-center group hover:border-[#ff0040]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#ff0040] rounded-full" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff6b35] rounded-full" />
              <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#8b5cf6] rounded-full" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#3b82f6] rounded-full" />
              <stat.icon className="w-8 h-8 text-[#ff0040] mx-auto mb-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-[#ff0040] to-[#ff6b35] bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-[#ff0040]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffd23f] fill-[#ffd23f]" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#ff0040]/30 hover:bg-[#ff0040]/10 hover:border-[#ff0040] px-8 py-6 text-lg bg-transparent"
            asChild
          >
            <a href="#" className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Join Our Discord Community
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
