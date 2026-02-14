"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

const heartColors = [
  "#ff6b9d",
  "#ff8fab",
  "#ffb3c6",
  "#c77dff",
  "#fd79a8",
]

export default function FloatingHearts({ count = 15 }) {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const newHearts = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      color: heartColors[Math.floor(Math.random() * heartColors.length)],
      size: 20 + Math.random() * 15,
    }))
    setHearts(newHearts)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: "-50px",
          }}
          initial={{ y: 0, opacity: 0, scale: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 100 : 1000,
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeOut",
            opacity: {
              times: [0, 0.1, 0.8, 1],
              duration: heart.duration,
            },
          }}
        >
          <Heart
            size={heart.size}
            className="fill-current"
            style={{ color: heart.color }}
          />
        </motion.div>
      ))}
    </div>
  )
}
