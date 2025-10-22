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
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="flex flex-col flex-1 w-full"
      >

        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/Q4" className="flex flex-row items-center text-white">
            <ChevronLeft color="white" />
            <h1
                className={cn(anuphan.className, "text-white text-[15px] ml-1")}
            >
                ย้อนกลับ
            </h1>
            </Link>
        </div>
        <div className="flex flex-col flex-1 w-full">
            {/* ภาพตรงกลาง */}
            <div className="flex flex-col flex-1 justify-center">
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 0.4, delay: 0 }}
                    className="flex flex-col justify-center items-center h-[300px] w-full pt-[48px]"
                >
                    <div className="relative w-full max-w-md h-full ">
                    <Image
                        src="/img/scene3-4.webp"
                        alt="scene"
                        fill
                        className="object-contain"
                        priority
                    />
                    </div>
                </motion.div>

                {/* ข้อความ */}
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 0.4, delay: 0 }}
                    className="flex flex-col items-left justify-center text-left py-[20px] text-[15px] font-light z-10 w-full gap-y-[8px]"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    
                    >
                        <h1 className="">แต่สายไป</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 2 }}
                    
                    >
                        <h1 className="">The Silence ได้ลักพาตัวเพื่อนของคุณไปแล้ว</h1>
                    </motion.div>
                    


                </motion.div>
            </div>
        </div>

        {/* ปุ่มถัดไป */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/Q5" className="h-[48px] w-full">
            <WhiteButton text="ถัดไป" />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
