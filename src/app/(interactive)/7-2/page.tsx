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
        transition={{ease: "easeOut", duration: duration, delay: 0 }}
      className={cn(
        notoThai.className,
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#FFFFFF] text-[#0A0A0A] px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/7-1" className="flex flex-row items-center text-[#0A0A0A]">
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
            transition={{ease: "easeOut", duration: duration, delay: 0.8 }}
            className="text-[15px]"
        
        >
            <h1>แสงแดดอ่อนๆ</h1>
            <h1>ส่องลงมาเป็นครั้งแรกในรอบหลายสัปดาห์</h1>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 1.6 }}
            className="text-[18px] font-semibold pt-[20px]"
        >
            <h1>เมืองกลับมามีชีวิตชีวาอีกครั้ง</h1>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 2.4 }}
            className="text-[15px] pt-[20px]"
        >
            <h1>แต่คุณก็บาดเจ็บสาหัสจากแรงระเบิด</h1>
            <h1>ในห้วงสุดท้ายก่อนสติจะดับวูบ... </h1>
            <h1>คุณเห็นภาพอนาคตฉายชัดขึ้นมาในใจ</h1>
        </motion.div>

      </div>

      

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 3.6 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q12" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
