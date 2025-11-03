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
    <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4, delay: 0 }}
        className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]"
      )}
    >
        <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 2 }}
            className="absolute bg-white h-screen w-full -z-10">     
        </motion.div>
      {/* ปุ่มย้อนกลับ */}
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 2 }}
            className="flex flex-col flex-1 w-full"
      >

        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/5-3" className="flex flex-row items-center">
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
            transition={{ duration: duration, delay: 3 }}
            className="flex flex-col bg-[#F4F4F4] justify-center text-center text-[15px]
            py-[20px] mt-[88px] w-full border-[2px] border-[#0A0A0A] rounded-[5px]" 
                >
                <h1 className="">หอควบคุมถูกทำลายสำเร็จ</h1>
                <h1>หมอกแห่งความเงียบสลายไป</h1>
                    


        </motion.div>
        <div className="flex flex-col flex-1 w-full">
            {/* ภาพตรงกลาง */}
            <div className="flex flex-col flex-1 justify-center">
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: duration, delay: 1 }}
                    className="flex flex-col flex-1 justify-center items-center h-[300px] w-full "
                >
                    <div className="relative  w-full max-w-md h-full ">
                    {/* <Image
                        src="/img/scene4-3.webp"
                        alt="scene"
                        fill
                        className="object-cover"
                        priority
                    /> */}
                    </div>
                </motion.div>

                {/* ข้อความ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 3 }}
                    className="flex flex-col justify-center text-center  
                    py-[40px]  z-10 w-full text-[#FFFF00]"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: duration, delay: 3 }}
                    
                    >
                        <h1 className="text-stroke-5-black font-semibold text-[24px] drop-shadow-[0_0_30px_rgba(255,255,0,0.6)] ">ทีมของคุณทำสำเร็จ</h1>
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
            <Link href="/72-2" className="h-[48px] w-full">
            <WhiteButton text="ถัดไป" />
            </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
