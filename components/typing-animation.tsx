"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // If waiting, do nothing until wait time is over
        if (isWaiting) {
          setIsWaiting(false)
          setIsDeleting(true)
          return
        }

        // Handle deleting text
        if (isDeleting) {
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % texts.length)
          } else {
            setCurrentText((prev) => prev.slice(0, -1))
          }
          return
        }

        // Handle typing text
        const fullText = texts[currentTextIndex]
        if (currentText.length < fullText.length) {
          setCurrentText((prev) => fullText.slice(0, prev.length + 1))
        } else {
          // Text is fully typed, wait before deleting
          setIsWaiting(true)
        }
      },
      isWaiting ? delayBetweenTexts : isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <div className="inline-block relative">
      <span className="text-xl md:text-2xl text-slate-600">
        {currentText}
        <AnimatePresence mode="wait">
          {!isDeleting && currentText.length < texts[currentTextIndex].length && (
            <motion.span
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="absolute ml-1"
            >
              |
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </div>
  )
}
