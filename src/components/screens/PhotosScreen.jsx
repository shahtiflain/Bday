"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Mail, Heart } from "lucide-react"
import Button from "../Button"
import confetti from "canvas-confetti"
import { birthdayConfig } from "@/config/birthdayConfig"

export default function PhotosScreen({ onNext }) {
  const handlePhotoClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ff8fab", "#ffb3c6", "#c77dff", "#ffe66d"],
    })
  }

  // Ensure photos array exists and has items
  const photos = birthdayConfig.photos || []
  
  // Debug: Log photos array
  console.log('Photos array:', photos)
  
  if (photos.length === 0) {
    return (
      <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
        <p className="text-accent">No photos available</p>
      </div>
    )
  }

  return (
    <div className="bg-[#fff8fc] p-7 rounded-[60px] drop-shadow-2xl min-w-48 w-full max-w-110 relative flex flex-col items-center gap-4 my-10">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-2xl md:text-3xl font-semibold text-accent flex items-center justify-center gap-2"
        >
          <Heart className="text-pink-500 animate-pulse" size={28} />
          {birthdayConfig.photosTitle}
          <Heart className="text-pink-500 animate-pulse" size={28} />
        </h2>
        <p className="text-sm text-accent/70 mt-1">{birthdayConfig.photosSubtitle}</p>
      </motion.div>

      <motion.div 
        className="relative p-6 bg-gradient-to-b from-white/80 to-violet-200 w-full rounded-[40px] flex items-center justify-center shadow-inner"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-md h-[500px] md:h-[600px] relative">
          <Swiper
            effect="fade"
            modules={[EffectFade, Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="w-full h-full"
            onClick={handlePhotoClick}
            style={{
              '--swiper-navigation-color': '#ff8fab',
              '--swiper-pagination-color': '#ff8fab',
            }}
          >
            {photos.map((src, i) => (
              <SwiperSlide key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="h-full w-full rounded-3xl cursor-pointer relative">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                    {/* Image */}
                    <img
                      loading="lazy"
                      src={src}
                      alt={`Memory ${i + 1}`}
                      className="w-full h-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${src}`, e);
                        e.target.style.display = 'none';
                      }}
                      onLoad={(e) => {
                        console.log(`Image loaded successfully: ${src}`, e.target.naturalWidth, e.target.naturalHeight);
                      }}
                    />
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      <motion.div
        className="mt-4 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Button onClick={onNext} className="bg-[#ddd6ff] text-accent">
          <Mail size={18} /> {birthdayConfig.photosButtonText}
        </Button>
      </motion.div>
    </div>
  )
}
