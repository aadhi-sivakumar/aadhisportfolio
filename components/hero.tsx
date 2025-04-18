"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/lib/data"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-lg md:text-xl text-cyan-600 font-medium">Hello, I'm</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">{personalInfo.name}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl md:text-2xl text-slate-600">{personalInfo.title}</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mb-10"
          >
            <p className="text-slate-600 text-lg">{personalInfo.about}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" className="border-cyan-600 text-cyan-600 hover:bg-cyan-50">
              <a href="/files/aadhi-sivakumar-resume.pdf" download="Aadhi_Sivakumar_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
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
            className="absolute bottom-10 hidden md:block"
          >
            <Link href="#about" className="text-slate-400 hover:text-cyan-600 transition-colors">
              <ArrowDown size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
