'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai, rubik } from "~/component/font";

export default function Page() {
  const duration = 0.4;

  return (
    <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1, delay: 2 }}
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col flex-1 justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A]"
      )}
    >
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 1 }}
            className="flex flex-col flex-1 w-full"
        >
            {/* ปุ่มย้อนกลับ */}
            <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-10">
                <Link href="/3-2" className="flex flex-row items-center text-[#0A0A0A]">
                    <ChevronLeft color="#0A0A0A" />
                    <h1
                        className={cn(anuphan.className, "text-[15px] ml-1")}
                    >
                        ย้อนกลับ
                    </h1>
                </Link>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 2 }}
                className="flex flex-col items-center justify-center flex-1  pt-[68px]"
                >
                {/* <h1 className={cn(rubik.className,"text-[48px] text-fill-white text-stroke-2-black font-bold")}>The Silence</h1> */}
                {/* <svg viewBox="0 0 800 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_0_30px_rgba(10,10,10,0.8)]">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="#000000"/>
                    </linearGradient>
                  </defs>
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                        fontSize="120" fontFamily="Rubik, sans-serif"
                        fill="white" stroke="url(#g1)" strokeWidth="8"
                        className={cn(rubik.className,"font-bold tracking-tighter  ")}
                        >
                    The Silence
                  </text>
                </svg> */}
                <h1 className="text-white text-stroke-10-black text-center font-bold text-[60px] drop-shadow-[0_0_30px_rgba(10,10,10,0.8)] ">The Silence</h1>
                <h1 className="text-fill-white text-stroke-8-black font-bold text-[40px] drop-shadow-[0_0_30px_rgba(10,10,10,0.8)] ">มาแล้ว</h1>
            

            </motion.div>

            



            
            {/* ปุ่มถัดไป */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: duration, delay: 2 }}
              className="flex flex-col py-[20px] h-[88px] w-full items-center z-10 px-[20px]">
                <Link href="/Q4" className="h-[48px] w-full">
                <WhiteButton text="ถัดไป" />
                </Link>
            </motion.div>
      </motion.div>
    </motion.div>
  );
}
