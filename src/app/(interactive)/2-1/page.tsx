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
    const [state,setState] = useState<Number>(1)
  return (
    <div className={cn(notoThai.className,
        "flex flex-col min-h-screen w-full bg-[#F0F0F0] text-[#0A0A0A] px-[20px]")}>
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
            className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/Q3" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="#0A0A0A" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </motion.div>

        
      {/* Header / Title */}
      {/* <div className="flex flex-col pt-[68px] pb-[20px] z-10 font-semibold">
        <h1 className="text-[22px]">ก่อนความเงียบจะเข้าปกคลุม... </h1>
        <h1 className="text-[22px]">เมืองนี้เคยมี "เสียง"</h1>
      </div> */}
      <div className="flex flex-col flex-1 pt-[68px]">
      {/* Scrollable Image */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2 }}
            className="h-[408px] flex-1 relative w-full overflow-hidden border-3 border-black">
            <motion.div
            initial={{ x: "-60%" }}  // ปรับให้เริ่มนอกกรอบ + padding
            animate={{ x: "-30%" }}
            transition={{delay:2.5, duration: 4, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full flex"
            >
            <div className="relative w-[2000px] h-full mx-[20px]">
                <Image
                src="/img/scene2-1.webp"
                alt="Scrolling Scene"
                fill
                className="object-contain"
                />
            </div>
            </motion.div>
        </motion.div>
        { state === 1 && 
            <div className="flex flex-col justify-center py-[20px] text-[15px] font-light z-10 w-full">
            
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="pb-[20px]"
                >
                    <h1>เช้าวันรุ่งขึ้น ศิลปินหนุ่มคนหนึ่งติดต่อคุณมา</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 2 }}
                >
                    <h1>เขาบอกว่าคำพูดของคุณทำให้เขาคิดได้</h1>
                    <h1>ว่าศิลปะไม่ควรตาย</h1>
                </motion.div>
            
            
            </div>
        }
        { state === 2 && 
            <div className="flex flex-col justify-center py-[20px] text-[15px] font-light z-10 w-full">  
                <h1>คุณนัดเจอกันที่จัตุรัสกลางเมือง เขาเอาสีมา ทั้งแดง</h1>
                <h1>ทั้งเหลือง ทั้งน้ำเงิน</h1>
            </div>
        }
        </div>

      {/* Footer Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 2 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        {state === 1 && 
            <div onClick={()=>setState(2)} className="h-[48px] w-full">
            <WhiteButton text="ถัดไป" />
            </div>
        }
        {state === 2 && 
            <Link href="/2-2" className="h-[48px] w-full">
            <WhiteButton text="ถัดไป" />
            </Link>
        }
      </motion.div>
      </motion.div>
    </div>
  )
}
