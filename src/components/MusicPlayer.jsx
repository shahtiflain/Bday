"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function MusicPlayer({ src, autoPlay = false }) {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [showControls, setShowControls] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay prevented or file not found:", err)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  // Handle file not found
  useEffect(() => {
    if (audioRef.current) {
      const handleError = () => {
        console.log("Music file not found. Please add birthday-song.mp3 to public/music/")
        setIsPlaying(false)
      }
      audioRef.current.addEventListener("error", handleError)
      return () => {
        audioRef.current?.removeEventListener("error", handleError)
      }
    }
  }, [src])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
    }
  }, [isMuted])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  if (!src) return null

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      <motion.div
        className="fixed bottom-20 right-4 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showControls ? 1 : 0.3, y: 0 }}
        onHoverStart={() => setShowControls(true)}
        onHoverEnd={() => setShowControls(false)}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-full p-3 shadow-lg flex items-center gap-2">
          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-pink-200 text-pink-700 hover:bg-pink-300 transition-colors"
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </motion.button>

          <AnimatePresence>
            {showControls && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="flex items-center gap-2 overflow-hidden"
              >
                <button
                  onClick={toggleMute}
                  className="p-1 text-gray-600 hover:text-gray-800"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="w-20 h-1 bg-pink-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #f1caeb 0%, #f1caeb ${volume * 100}%, #e0e0e0 ${volume * 100}%, #e0e0e0 100%)`,
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  )
}
