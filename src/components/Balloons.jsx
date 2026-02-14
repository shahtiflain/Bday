"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const balloonColors = [
  { color: "#ff6b9d", shadow: "#ff4d7a" },
  { color: "#c77dff", shadow: "#b366ff" },
  { color: "#4ecdc4", shadow: "#3db8b0" },
  { color: "#ffe66d", shadow: "#ffd93d" },
  { color: "#ff8fab", shadow: "#ff6b8f" },
  { color: "#a8e6cf", shadow: "#7dd3a0" },
  { color: "#ffd3a5", shadow: "#ffc085" },
  { color: "#fd79a8", shadow: "#fc5a95" },
]

export default function Balloons({ count = 8 }) {
  const [balloons, setBalloons] = useState([])

  useEffect(() => {
    const newBalloons = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
      color: balloonColors[i % balloonColors.length],
      size: 40 + Math.random() * 30,
      sway: Math.random() * 20 - 10,
    }))
    setBalloons(newBalloons)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className="absolute"
          style={{
            left: `${balloon.x}%`,
            bottom: "-100px",
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 200 : 1000,
            opacity: [0, 1, 1, 0],
            x: balloon.sway,
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: "linear",
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: balloon.duration,
            },
          }}
        >
          <Balloon color={balloon.color.color} shadow={balloon.color.shadow} size={balloon.size} />
        </motion.div>
      ))}
    </div>
  )
}

function Balloon({ color, shadow, size }) {
  return (
    <motion.div
      className="relative"
      style={{ width: `${size}px`, height: `${size * 1.2}px` }}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Balloon */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${size}px`,
          height: `${size * 1.2}px`,
          background: `radial-gradient(circle at 30% 30%, ${color}, ${shadow})`,
          boxShadow: `inset -10px -10px 0 rgba(0,0,0,0.1)`,
        }}
      />
      {/* Highlight */}
      <div
        className="absolute rounded-full"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`,
          background: "rgba(255,255,255,0.6)",
          top: `${size * 0.2}px`,
          left: `${size * 0.25}px`,
        }}
      />
      {/* String */}
      <motion.div
        className="absolute"
        style={{
          width: "2px",
          height: `${size * 2}px`,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
          top: `${size * 1.2}px`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
        animate={{
          x: [0, 3, -3, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
