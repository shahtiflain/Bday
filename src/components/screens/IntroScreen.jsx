"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles } from "lucide-react"
import Button from "../Button"
import confetti from "canvas-confetti"
import { birthdayConfig, formatText } from "@/config/birthdayConfig"

export default function IntroScreen({ onNext }) {
    const handleStart = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#ff8fab", "#ffb3c6", "#c77dff", "#ffe66d", "#a8e6cf"],
        })
        setTimeout(() => {
            onNext?.()
        }, 500)
    }

    return (
        <motion.div
            className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl  min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
        >
            <motion.div 
                className="relative h-44 md:h-52 bg-linear-to-b from-white/80 to-pink-200 w-full rounded-[40px] flex items-end justify-center shadow-inner overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.img
                    loading="lazy"
                    src="/gifs/intro.gif"
                    alt="Cute"
                    className="w-26 md:w-32"
                    animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                {/* Floating sparkles around the gif */}
                <motion.div
                    className="absolute top-4 left-4"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: 360,
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Sparkles className="text-yellow-400" size={20} />
                </motion.div>
                <motion.div
                    className="absolute top-4 right-4"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: -360,
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                >
                    <Sparkles className="text-pink-400" size={20} />
                </motion.div>
            </motion.div>

            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h1 className="text-2xl md:text-3xl font-semibold text-primary drop-shadow leading-tight will-change-transform"
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(255,105,180,0.4))",
                    }}>
                    {formatText(birthdayConfig.introTitle)}
                </h1>
                <motion.p 
                    className="mt-4 text-foreground will-change-transform"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {birthdayConfig.introSubtitle}
                </motion.p>
            </motion.div>

            <motion.div
                className="mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Button
                    onClick={handleStart}
                    className="bg-[#f1caeb] text-primary hover:bg-[#e8b8df]"
                >
                    <Gift size={20} />
                    {birthdayConfig.introButtonText}
                </Button>
            </motion.div>
        </motion.div >
    )
}
