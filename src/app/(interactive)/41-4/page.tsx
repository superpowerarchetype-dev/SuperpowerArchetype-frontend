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
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#F0F0F0] text-[#0A0A0A] px-[20px]"
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
            <Link href="/Q8" className="flex flex-row items-center ">
            <ChevronLeft color="#0A0A0A" />
            <h1
                className={cn(anuphan.className, "text-[15px] ml-1")}
            >
                ย้อนกลับ
            </h1>
            </Link>
        </div>
        
        <div className="flex flex-col flex-1 w-full pt-[88px] justify-center">
            {/* ภาพตรงกลาง */}
            <div className="flex flex-col  justify-center">
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: duration, delay: 1 }}
                    className="flex flex-col  justify-center items-center h-[300px] w-full "
                >
                    <div className="relative  w-full max-w-md h-full ">
                    <Image
                        src="/img/scene5-1.webp"
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
                    // transition={{ duration: duration, delay: 2 }}
                    className="flex flex-col flex-1 items-left justify-center text-center py-[20px] text-[15px] z-10 w-full"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 1 }}
                    
                    >
                        <h1 className="font-semibold text-[18px] pb-[40px] ">16 ชั่วโมงก่อนภารกิจใหญ่</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 2 }}
                    
                    >
                        <h1 className="font-light text-[15px]">The Silence รู้ทันแผนการของพวกคุณ</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 3 }}
                    className="pt-[20px]"
                    >
                        <h1 className="font-light text-[15px]">มันส่ง "เสียงกระซิบ" มาผ่านหมอก </h1>
                        <h1 className="font-light text-[15px]">เสียงที่ชั่วร้ายที่สุดเข้ามาในหัวของคุณ</h1>
                        <h1 className="font-light text-[15px]">มันคือเสียงที่รู้จักคุณดีกว่าที่คุณรู้จักตัวเอง</h1>
                    </motion.div>
                    


                </motion.div>
            </div>
        </div>

        {/* ปุ่มถัดไป */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration, delay: 3 }}
            className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/Q9" className="h-[48px] w-full">
            <WhiteButton text="ถัดไป" />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
