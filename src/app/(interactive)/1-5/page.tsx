'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";

export default function Page() {
  const duration = 0.4;

  return (
    <div
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#2C2C2C] text-white px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/1-4" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1
            className={cn(anuphan.className, "text-white text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </div>

      {/* ภาพตรงกลาง */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1, delay: 0 }}
        className="flex flex-col justify-center items-center flex-1 w-full pt-[48px]"
      >
        <div className="relative w-full max-w-md h-full ">
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
        transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col items-center justify-center text-center py-[20px] text-[15px] font-light z-10 w-full"
      >
        <h1 className="">มันกระซิบคำสัญญาถึง</h1>
        <h1 className="font-semibold text-[18px] py-[1%] ">"ความสงบสุข" และ "ความเป็นระเบียบ"</h1>

        <h1 className="">
        ที่หลายคนโหยหา และเพื่อหนีจากความโกลาหล
        </h1>
        <h1 className="">ผู้คนจึงยอมรับมัน</h1>

      </motion.div>

      {/* ปุ่มถัดไป */}
      <div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/1-6" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </div>
    </div>
  );
}
