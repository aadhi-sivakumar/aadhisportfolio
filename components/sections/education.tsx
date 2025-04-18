"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/data"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Education</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <motion.div className="max-w-5xl mx-auto" initial="visible" variants={containerVariants}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 mb-6 border-t-4 border-t-theme-primary border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <div className="flex items-start mb-4">
                  <motion.div
                    className="bg-theme-accent p-3 rounded-full mr-4 text-theme-primary"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GraduationCap size={24} />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{edu.institution}</h3>
                    <p className="text-theme-secondary font-medium">{edu.date}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">{edu.degree}</span>
                  </p>
                </div>

                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-theme-primary mb-2">Relevant Coursework</h4>
                  <ul className="list-disc list-inside text-gray-700 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-1 pr-2">
                    {" "}
                    {/* Changed gap-x-4 to gap-x-2 and added pr-2 */}
                    {edu.coursework.map((course, i) => (
                      <motion.li key={i} initial={{ opacity: 1 }} className="whitespace-normal">
                        {course}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
