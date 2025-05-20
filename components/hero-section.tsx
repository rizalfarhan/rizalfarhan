"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, MousePointer } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6 border border-primary/20">
              <span className="text-sm font-medium text-primary">UI/UX Designer</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="block">Hi, I'm</span>
              <span className="relative">
                Rizal Farhan
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
                  className="absolute -bottom-2 left-0 h-1 bg-primary"
                />
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A passionate UI/UX Designer creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
                <Link href="#portfolio" className="flex items-center gap-2">
                  <span className="relative z-10">View Portfolio</span>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full group relative overflow-hidden">
                <Link href="#contact" className="relative z-10">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Semarang, Indonesia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 -rotate-6 transform-gpu"></div>
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Rizal Farhan Nanda"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Design elements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-lg flex items-center gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">5+</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Years of</p>
                  <p className="font-medium">Design Experience</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-6 -right-6 bg-background p-3 rounded-xl shadow-lg flex items-center gap-2 border border-border"
              >
                <MousePointer className="h-4 w-4 text-primary" />
                <p className="text-sm font-medium">UI/UX Specialist</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
