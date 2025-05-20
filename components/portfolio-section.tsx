"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("all")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const projects = [
    {
      title: "E-Commerce Mobile App",
      category: "UI/UX Design",
      image: "/HeartFull.png", // Updated image path
      description: "A modern e-commerce mobile app designed with user experience in mind.",
      tags: ["Mobile", "E-commerce", "UI/UX"],
    },
    {
      title: "Finance Dashboard",
      category: "UI Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "A comprehensive finance dashboard with intuitive data visualization.",
      tags: ["Dashboard", "Web", "Data Viz"],
    },
    {
      title: "Travel Website Redesign",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "A complete redesign of a travel website focusing on user engagement.",
      tags: ["Web", "Redesign", "UI/UX"],
    },
    {
      title: "Health & Fitness App",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "A health tracking app with a clean and motivating interface.",
      tags: ["Mobile", "Health", "UI/UX"],
    },
    {
      title: "Educational Platform",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "An educational platform designed for optimal learning experience.",
      tags: ["Web", "Education", "UI/UX"],
    },
    {
      title: "Smart Home Control App",
      category: "UI Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "An intuitive app for controlling smart home devices.",
      tags: ["Mobile", "IoT", "UI"],
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "UI Design", label: "UI Design" },
    { value: "Web Design", label: "Web Design" },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              My Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Selected Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of my recent design projects showcasing my skills and approach to design challenges.
            </p>
          </div>
          <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="text-xs md:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow border-primary/10 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="default" size="sm" className="gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full border border-border bg-muted/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full group">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
