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
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ease: "easeOut", duration: duration, delay: 0 }}
      className={cn(
        notoThai.className,
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#5D5D5D] text-[#FFFFFF] px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15">
        <Link href="/Q5" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </div>

      {/* ภาพตรงกลาง */}
      <div
        
        className="flex flex-col flex-1 justify-center align-center items-left  w-full pt-[48px] "
      >
        <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ease: "easeOut", duration: duration, delay: 0.8 }}
            className="text-[15px] pb-[20px] z-10"
        
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: duration, delay: 0.8 }}
            >
                <h1>คุณมองไปรอบตัวมีคนแปลกหน้า 7-8 คน นั่งเงียบ ๆ</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: duration, delay: 1.6 }}
            >
                <h1 className="pt-[20px]">ยินดีต้อนรับสู่ “The Underground”</h1>
                <h1>เสียงผู้ชายแก่ดังขึ้น</h1>
            </motion.div>
        </motion.div>

        <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ease: "easeOut", duration: duration, delay: 1.6 }}
            className="text-[15px] pt-[40px] z-10"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: duration, delay: 3.2 }}
            >
                <h1>"และพวกเราคือคนกลุ่มสุดท้าย</h1>
                <h1>ที่หมอกนั่นไม่สามารถทำอะไรเราได้"</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ease: "easeOut", duration: duration, delay: 4 }}
            >
                <h1 className="pt-[20px]">คุณค้นพบว่าตนมีพลังวิเศษ</h1>
                <h1>พลังที่สามารถต้านทานหมอกร้ายได้</h1>
            </motion.div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 2.4 }}
            className="h-[200px] z-5">
            <Image
                src="/img/scene4-2.webp"
                alt="scene"
                fill
                className="object-cover"
                priority
            />
        </motion.div>

      </div>

      

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 4 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q6" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
