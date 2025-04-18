"use client"

import { motion } from "framer-motion"
import { experience } from "@/lib/data"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Work Experience</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto" initial="visible" variants={containerVariants}>
          <div className="relative border-l-2 border-theme-accent pl-8 ml-4">
            {experience.map((exp, index) => (
              <motion.div key={index} variants={itemVariants} className="mb-12 relative">
                <motion.div
                  className="absolute -left-12 bg-white p-1"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-theme-accent p-2 rounded-full">
                    <Briefcase className="text-theme-primary" size={20} />
                  </div>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg shadow-md p-6 border-l-4 border-theme-primary hover:shadow-xl transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 text-center md:text-left">{exp.title}</h3>
                    <span className="text-theme-secondary font-medium">{exp.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-center md:text-left">
                    {exp.company}, {exp.location}
                  </p>
                  <ul className="list-disc list-inside text-gray-600">
                    {exp.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="mb-2"
                        dangerouslySetInnerHTML={{ __html: detail }}
                        initial={{ opacity: 1 }}
                      ></motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
