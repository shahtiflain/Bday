"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

export default function LoaderScreen({ onDone }) {
    const [dots, setDots] = useState("")

    useEffect(() => {   
        const timer = setTimeout(() => {
            onDone?.()
        }, 3000)
        return () => clearTimeout(timer)
    }, [onDone])

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return ""
                return prev + "."
            })
        }, 500)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center will-change-transform"
        >
            <motion.div
                className="text-6xl md:text-7xl will-change-transform relative"
                animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                🎂
                {/* Sparkles around cake */}
                <motion.div
                    className="absolute -top-2 -left-2"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: 360,
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Sparkles className="text-yellow-400" size={20} />
                </motion.div>
                <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: -360,
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3
                    }}
                >
                    <Sparkles className="text-pink-400" size={20} />
                </motion.div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="my-4 text-xl md:text-2xl font-semibold text-foreground text-center">
                Loading your birthday surprise{dots}
            </motion.p>

            {/* Loading bar */}
            <motion.div
                className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
            </motion.div>

        </motion.div>
    )
}
