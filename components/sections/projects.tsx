"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/data"
import { Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
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

  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Projects</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial="visible"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="h-full overflow-hidden border-t-4 border-t-theme-primary hover:shadow-lg transition-all duration-300 bg-white rounded-lg"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                    <Badge variant="outline" className="bg-theme-accent text-theme-primary border-theme-accent">
                      {project.date}
                    </Badge>
                  </div>
                  <CardDescription>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-2"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {project.technologies.split(", ").map((tech, i) => (
                        <motion.div key={i} variants={badgeVariants} custom={i} transition={{ delay: i * 0.05 }}>
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 hover:bg-theme-accent transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {project.details.map((detail, i) => (
                      <motion.li key={i} initial={{ opacity: 1, x: 0 }}>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {project.link ? (
                    <Button
                      variant="outline"
                      className="w-full border-theme-primary text-theme-primary hover:bg-theme-accent transition-all duration-300"
                      asChild
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Code2 size={16} className="mr-2" />
                        View Project
                      </motion.a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-theme-primary text-theme-primary opacity-70 cursor-not-allowed"
                    >
                      <Code2 size={16} className="mr-2" />
                      View Project
                    </Button>
                  )}
                </CardFooter>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
