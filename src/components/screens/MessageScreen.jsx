"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Heart, Sparkles } from "lucide-react"
import { birthdayConfig, formatText } from "@/config/birthdayConfig"

export default function MessageScreen() {
    const [opened, setOpened] = useState(false)

    const handleOpen = () => {
        if (!opened) {
            setOpened(true)
            // Big confetti burst when opening
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.5 },
                colors: ["#ff8fab", "#ffb3c6", "#c77dff", "#ffe66d", "#a8e6cf", "#ffd3a5"],
            })
        }
    }

    return (
        <motion.div 
            className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center flex items-center justify-center gap-2">
                    <Heart className="text-pink-500 animate-pulse" size={28} />
                    {birthdayConfig.messageTitle}
                    <Heart className="text-pink-500 animate-pulse" size={28} />
                </h2>

                <motion.p 
                    className="text-primary/70 text-sm mt-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {opened ? birthdayConfig.messageOpenedSubtitle : birthdayConfig.messageSubtitle}
                </motion.p>
            </motion.div>

            <motion.div
                onClick={handleOpen}
                className={`card relative h-71.25 w-full rounded-[40px] overflow-hidden shadow-inner cursor-pointer transition-all bg-linear-to-b from-white/80 to-pink-200 flex items-center justify-center max-w-71.25`}
                whileHover={{ scale: opened ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <AnimatePresence>
                    {!opened && (
                        <motion.div
                            initial={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.7 }}
                            className="cover pointer-events-none z-10 bg-[#ffedea]!"
                        />
                    )}
                </AnimatePresence>

                <motion.div 
                    className="relative px-6 h-56 overflow-y-auto text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: opened ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: opened ? 0.3 : 0 }}
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: opened ? 0.5 : 0 }}
                    >
                        <p className="text-lg leading-relaxed">
                            {formatText(birthdayConfig.finalMessage.paragraph1)}
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            {formatText(birthdayConfig.finalMessage.paragraph2)}
                        </p>
                        <p className="text-lg leading-relaxed mt-4 font-semibold text-primary">
                            {formatText(birthdayConfig.finalMessage.paragraph3)}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Sparkle effects when opened */}
                <AnimatePresence>
                    {opened && (
                        <>
                            <motion.div
                                className="absolute top-4 right-4"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: 1, rotate: 360 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            >
                                <Sparkles className="text-yellow-400" size={24} />
                            </motion.div>
                            <motion.div
                                className="absolute top-4 left-4"
                                initial={{ scale: 0, rotate: 0 }}
                                animate={{ scale: 1, rotate: -360 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            >
                                <Sparkles className="text-pink-400" size={24} />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    )
}
