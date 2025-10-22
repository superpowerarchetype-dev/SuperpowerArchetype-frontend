'use client'
import { motion } from "framer-motion"
import Image from "next/image"

export default function MotionScrollImage() {
  return (
    <div className="relative w-full overflow-hidden h-[300px]">
      <motion.div
        initial={{ x: "-12%" }}
        animate={{ x: "-55%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
        className="absolute flex"
      >
        <div className="relative w-[1000px] h-[300px]">
          <Image
            src="/img/scene1-3.webp"
            alt="Scroll once"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  )
}
