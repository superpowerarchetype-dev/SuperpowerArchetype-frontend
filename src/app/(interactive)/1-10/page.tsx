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
    <div
      className={cn(
        notoThai.className,
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#2C2C2C] text-white px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        {/* <Link href="/1-3" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1
            className={cn(anuphan.className, "text-white text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link> */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: duration,
            delay: 0.8,
        }} 
        className="flex flex-col items-center pt-[68px] pb-[20px] w-full z-10 font-semibold">
        
        <h1 className="text-[18px]">วันที่ 47 </h1>
        <h1 className="text-[18px]">หลังจาก The Silence เข้ายึดครอง</h1>
      </motion.div>

      {/* ภาพตรงกลาง */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 0.8 }}
        className="flex flex-col justify-center items-center  w-full h-full"
      >
        <div className="relative w-full  h-full">
          <Image
            src="/img/scene1-4.webp"
            alt="scene"
            fill
            className="object-cover "
            priority
          />
        </div>
      </motion.div>

      {/* ข้อความ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1.6 }}
        className="flex flex-col flex-1 items-center justify-center text-center py-[20px] text-[15px] font-light z-10 w-full"
      >
        <h1 className="">คุณเดินผ่านถนนสายเก่าที่เคยเป็นย่านศิลปะ</h1>
        <h1 className="">ตอนนี้ฝาผนังที่เคยเต็มไปด้วยงานศิลปะ</h1>
        <h1 className="">สีสันสดใส กลับถูกทาทับด้วยสีเทาหม่น</h1>

        
      </motion.div>

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1.6 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q1" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </motion.div>
    </div>
  );
}
