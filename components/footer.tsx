"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-theme-primary py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mr-4"
            >
              <Link href="#home" className="text-2xl font-bold text-white hover:text-theme-accent transition-colors">
                AS
              </Link>
            </motion.div>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4 mr-6"
            >
              {/* Use <a> tag for email */}
              <a
                href="mailto:aadhi.sivakumar05@gmail.com"
                className="text-white hover:text-theme-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

              <Link
                href="https://github.com/aadhi-sivakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-theme-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/aadhi-sivakumar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-theme-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
