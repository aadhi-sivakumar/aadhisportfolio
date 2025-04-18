"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export default function Contact() {
  const contactCards = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "aadhi.sivakumar05@gmail.com",
      link: "mailto:aadhi.sivakumar05@gmail.com",
      isLink: true,
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Aadhi Sivakumar",
      link: "https://linkedin.com/in/aadhi-sivakumar",
      isLink: true,
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "aadhi-sivakumar",
      link: "https://github.com/aadhi-sivakumar",
      isLink: true,
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "503-260-8864",
      isLink: false,
    },
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

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-theme-primary mx-auto"></div>
        </motion.div>

        <motion.div initial={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the
            following channels:
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          initial="visible"
          variants={containerVariants}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200 flex flex-col items-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-theme-accent p-4 rounded-full mb-4 text-theme-primary">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              {card.isLink ? (
                <a
                  href={card.link}
                  target={card.title === "Email" ? undefined : "_blank"}
                  rel={card.title === "Email" ? undefined : "noopener noreferrer"}
                  className="text-theme-primary hover:underline break-all text-center"
                >
                  {card.value}
                </a>
              ) : (
                <span className="text-theme-primary break-all text-center">{card.value}</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
