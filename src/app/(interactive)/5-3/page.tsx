'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import WhiteButton from "~/component/white_button"
import { notoThai } from "~/component/font"
import { cn } from "~/lib/utils"
import { ChevronLeft } from "lucide-react"
import { anuphan } from "~/component/font"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/Q11"); 
        }, 4000);
    
        return () => clearTimeout(timer);
      }, [router]);

    

  return (
    <div className={cn(notoThai.className,
        "flex flex-col min-h-screen w-full  text-white p")}>
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
                className="absolute z-100 top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/5-2" className="flex flex-row items-center text-[#0A0A0A]">
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
                className="absolute top-0  z-10 h-screen flex-1 w-screen overflow-hidden">
                <motion.div
                initial={{ opacity: 0 }}  // ปรับให้เริ่มนอกกรอบ + padding
                animate={{opacity: 1 }}
                transition={{delay:0, duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full "
                >
                <div className="min-w-[500px] h-screen ">
                    <Image
                    src="/img/scene5-3-1.webp"
                    alt="Scrolling Scene"
                    fill
                    className="object-cover"
                    />
                </div>
                </motion.div>
        </motion.div>
        <motion.div 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.4, delay: 2 }}
                className="absolute top-0  z-20 h-screen flex-1 w-screen overflow-hidden">
                <motion.div
                initial={{ opacity: 0 }}  // ปรับให้เริ่มนอกกรอบ + padding
                animate={{opacity: 1 }}
                transition={{delay:1, duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full "
                >
                <div className="min-w-[500px] h-screen ">
                    <Image
                    src="/img/scene5-3-2.webp"
                    alt="Scrolling Scene"
                    fill
                    className="object-cover"
                    />
                </div>
                </motion.div>
                <motion.div 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.4, delay: 2 }}
                className="absolute top-0  z-30 h-screen flex-1 w-screen overflow-hidden">
                <motion.div
                initial={{ opacity: 0 }}  // ปรับให้เริ่มนอกกรอบ + padding
                animate={{opacity: 1 }}
                transition={{delay:2, duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full "
                >
                <div className="min-w-[500px] h-screen ">
                    <Image
                    src="/img/scene5-3-3.webp"
                    alt="Scrolling Scene"
                    fill
                    className="object-cover"
                    />
                </div>
                </motion.div>
                <motion.div 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.4, delay: 2 }}
                className="absolute top-0  z-40 h-screen flex-1 w-screen overflow-hidden">
                <motion.div
                initial={{ opacity: 0 }}  // ปรับให้เริ่มนอกกรอบ + padding
                animate={{opacity: 1 }}
                transition={{delay:3, duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full "
                >
                <div className="min-w-[500px] h-screen ">
                    <Image
                    src="/img/scene5-3-4.webp"
                    alt="Scrolling Scene"
                    fill
                    className="object-cover"
                    />
                </div>
                </motion.div>
        </motion.div>
        </motion.div>
        </motion.div>

        
      {/* Header / Title */}
      {/* <div className="flex flex-col pt-[68px] pb-[20px] z-10 font-semibold">
        <h1 className="text-[22px]">ก่อนความเงียบจะเข้าปกคลุม... </h1>
        <h1 className="text-[22px]">เมืองนี้เคยมี "เสียง"</h1>
      </div> */}


      {/* Footer Button */}
        {/* <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, delay: 5 }}
            className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            
                <Link href="/5-3" className="h-[48px] w-full">
                <WhiteButton text="ถัดไป" />
                </Link>
        </motion.div> */}
      </motion.div>
    </div>
  )
}
