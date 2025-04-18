"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypingAnimation from "@/components/typing-animation"

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const typingTexts = ["Software Engineer", "Machine Learning Researcher", "Computer Science Student"]

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-lg md:text-xl text-theme-secondary font-medium">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">{personalInfo.name}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <TypingAnimation texts={typingTexts} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              className="bg-theme-primary hover:bg-theme-secondary text-white text-base py-5 transition-all duration-300 hover:scale-105"
              onClick={() => handleScrollTo("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </Button>
            <Button
              className="bg-theme-primary hover:bg-theme-secondary text-white text-base py-5 transition-all duration-300 hover:scale-105"
              onClick={() => handleScrollTo("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </Button>
            <Button
              className="bg-theme-primary hover:bg-theme-secondary text-white text-base py-5 transition-all duration-300 hover:scale-105"
              onClick={() => handleScrollTo("experience")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Experience
            </Button>
            <Button
              variant="outline"
              className="border-theme-primary text-theme-primary hover:bg-theme-accent text-base py-5 transition-all duration-300 hover:scale-105"
              onClick={() => handleScrollTo("about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <button
              onClick={() => handleScrollTo("about")}
              className="text-gray-400 hover:text-theme-primary transition-colors"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={30} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
