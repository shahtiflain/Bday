"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Sparkles({ count = 20, intensity = "normal" }) {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const multiplier = intensity === "high" ? 2 : intensity === "low" ? 0.5 : 1
    const newSparkles = Array.from({ length: Math.floor(count * multiplier) }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 1.5,
      size: 4 + Math.random() * 6,
    }))
    setSparkles(newSparkles)
  }, [count, intensity])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1.5, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full"
            style={{
              background: `radial-gradient(circle, 
                rgba(255, 255, 255, 0.9) 0%, 
                rgba(255, 182, 193, 0.8) 50%, 
                transparent 100%)`,
              boxShadow: `0 0 ${sparkle.size * 2}px rgba(255, 182, 193, 0.8)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
