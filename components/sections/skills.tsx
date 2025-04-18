"use client"

import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Terminal, Wrench } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    { title: "Languages", icon: <Code className="h-5 w-5" />, items: skills.languages },
    { title: "Frameworks", icon: <Terminal className="h-5 w-5" />, items: skills.frameworks },
    { title: "Developer Tools", icon: <Wrench className="h-5 w-5" />, items: skills.tools },
    { title: "Libraries", icon: <Database className="h-5 w-5" />, items: skills.libraries },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
      },
    },
  }

  const iconVariants = {
    hidden: { rotate: -10, scale: 0.9 },
    visible: { rotate: 0, scale: 1 },
    hover: {
      rotate: 10,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="visible"
          variants={containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} custom={index}>
              <motion.div
                className="h-full border-t-4 border-t-theme-primary hover:shadow-lg transition-all duration-300 bg-white rounded-lg"
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-gray-800 justify-center">
                    <motion.div
                      className="bg-theme-accent p-2 rounded-full mr-3 text-theme-primary"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {category.icon}
                    </motion.div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="flex flex-wrap gap-2 justify-center"
                    variants={containerVariants}
                    initial="visible"
                  >
                    {category.items.map((item, i) => (
                      <motion.div key={i} variants={badgeVariants} custom={i} transition={{ delay: i * 0.03 }}>
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-theme-accent hover:text-theme-primary transition-colors py-1.5 px-3">
                          {item}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
