"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
            <motion.div initial={{ opacity: 1, scale: 1 }} className="w-64 h-64 relative flex-shrink-0">
              <div className="w-full h-full rounded-full relative">
                <div className="absolute inset-0 rounded-full border-2 border-theme-primary"></div>
                <div className="absolute inset-1 rounded-full overflow-hidden">
                  <Image
                    src="/images/headshot.jpeg"
                    alt="Aadhi Sivakumar"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="rounded-full"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 1, y: 0 }} className="flex flex-col space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                I am a student at The University of Texas at Dallas pursuing a Bachelor's degree in Computer Science. My
                focus extends to working with APIs, leveraging cloud services, backend development, and exploring the
                potential of machine learning to drive innovation.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I am always excited to learn new skills and grow my potential as a software engineer. Please feel free
                to reach out to me about new opportunities related to software engineering and machine learning!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
