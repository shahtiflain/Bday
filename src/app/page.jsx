"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"
import Balloons from "@/components/Balloons"
import Sparkles from "@/components/Sparkles"
import MusicPlayer from "@/components/MusicPlayer"
import FloatingHearts from "@/components/FloatingHearts"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [showEffects, setShowEffects] = useState(false)

  const screens = [
    <LoaderScreen key="loader" onDone={() => { setCurrentScreen(1); setShowEffects(true) }} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" />,
  ]

  return (
    <main className="min-h-screen overflow-hidden relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">

      {/* Background Effects */}
      {showEffects && (
        <>
          <Balloons count={12} />
          <FloatingHearts count={15} />
          <Sparkles count={30} intensity="normal" />
        </>
      )}

      {/* Music Player */}
      <MusicPlayer src="/music/birthday-song.mp3" autoPlay={showEffects} />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center w-full"
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div>
    </main>
  )
}
