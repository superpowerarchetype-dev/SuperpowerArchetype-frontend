'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import WhiteButton from "~/component/white_button"
import { notoThai } from "~/component/font"
import { cn } from "~/lib/utils"
import { ChevronLeft } from "lucide-react"
import { anuphan } from "~/component/font"
import { useState } from "react"

export default function Page() {
  return (
    <div className={cn(notoThai.className,
        "flex flex-col min-h-screen w-full  text-white px-[20px]")}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.1,
                delay: 0,
            }}
            className="flex flex-col min-h-screen flex-glow"
        >

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="absolute z-10 top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/5-1" className="flex flex-row items-center text-[#0A0A0A]">
            <ChevronLeft color="#0A0A0A" />
            <h1
                className={cn(anuphan.className, "text-[15px] ml-1")}
            >
                ย้อนกลับ
            </h1>
            </Link>
        </motion.div>
        <motion.div 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.4, delay: 2 }}
                className="absolute top-0 left-0 h-screen flex-1 w-full overflow-hidden">
                <motion.div
                initial={{ x: "-25%" }}  // ปรับให้เริ่มนอกกรอบ + padding
                animate={{ x: "-55%" }}
                transition={{delay:0, duration: 10, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full flex"
                >
                <div className="relative w-[2000px] h-full mx-[20px]">
                    <Image
                    src="/img/scene5-2.webp"
                    alt="Scrolling Scene"
                    fill
                    className="object-contain"
                    />
                </div>
                </motion.div>
        </motion.div>

        
      {/* Header / Title */}
      {/* <div className="flex flex-col pt-[68px] pb-[20px] z-10 font-semibold">
        <h1 className="text-[22px]">ก่อนความเงียบจะเข้าปกคลุม... </h1>
        <h1 className="text-[22px]">เมืองนี้เคยมี "เสียง"</h1>
      </div> */}
      
      <div className="relative flex flex-col-reverse flex-1 pt-[68px]">
            <div className="flex flex-col justify-center pt-[200px] py-[20px] text-[15px] z-10 w-full">
            
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 0 }}
                    className="pb-[20px]"
                >
                    <h1>ทุกคนกลับมาแข็งแกร่งและแน่วแน่อีกครั้ง</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5, delay: 5 }}
                >
                    <h1>แต่เมื่อมาถึงจุดหมาย</h1>
                    <h1>สิ่งที่พบคือกับดักที่ซับซ้อนกว่าที่คาดไว้มาก</h1>
                </motion.div>
            
            
            </div>
       
        </div>

      {/* Footer Button */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 5 }}
            className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            
                <Link href="/5-3" className="h-[48px] w-full">
                <WhiteButton text="ถัดไป" />
                </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
