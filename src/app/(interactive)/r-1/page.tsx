'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";

export default function Page() {
  const duration = 0.8;

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
      className={cn(
        notoThai.className,
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/1-7" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="black" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </div>

      {/* ภาพตรงกลาง */}
      <div
        
        className="flex flex-col justify-center items-left flex-1 w-full pt-[48px]"
      >
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
            className="flex flex-col items-center justify-center bg-[#F4F4F4] py-[20px] border-[2px] rounded-[4px]"
        
        >
            <div className="flex flex-col text-[18px] pb-[20px] font-semibold items-center justify-center" >
                <h1>พร้อมจะเริ่มการเดินทางเพื่อค้นหา 'เสียง' </h1>
                <h1>สุดท้ายที่ยังเหลือแล้วใช่ไหม?</h1>
            </div>

            <div className="flex flex-col text-[15px] items-center justify-center" >
                <h1>ระหว่างทาง เราจะจดจำทุกการตัดสินใจของคุณ</h1>
                <h1>เพื่อร่วมค้นหาตัวตนฮีโร่ที่ซ่อนพลังอยู่ในตัวคุณ </h1>
                <h1>โปรดวางใจเพราะคำตอบทั้งหมดจะถูกเก็บเป็นความ</h1>
                <h1>ลับสุดยอดระหว่างเรา</h1>
            </div>
        </motion.div>

    
        


      </div>

      

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/r-2" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
