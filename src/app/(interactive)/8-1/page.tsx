'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useEffect } from "react";
import { FormService } from "~/app/service/FormService";
import { FormMappers } from "~/app/service/FormMapper";

export default function Page() {
  const duration = 0.4;


    

  return (
    <div
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-white text-[#0A0A0A] px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="flex flex-col flex-1 w-full"
      >

        {/* <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/5-3" className="flex flex-row items-center">
            <ChevronLeft color="#0A0A0A" />
            <h1
                className={cn(anuphan.className, "text-[15px] ml-1")}
            >
                ย้อนกลับ
            </h1>
            </Link>
        </div> */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration, delay: 1 }}
            className="flex flex-col text-left text-[15px]
            py-[20px] mt-[88px] " 
                >
                <h1 className="">คุณลืมตา...</h1>

                  
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration, delay: 2 }}
            className="flex flex-col text-left text-[15px]
            mt-[10px] " 
                >
                <h1>ที่นี่ไม่ใช่สวรรค์ ไม่ใช่ความว่างเปล่า</h1>
                <h1>คุณรอดแล้ว</h1>
                  
        </motion.div>
        <div className="flex flex-col flex-1 w-full">
            {/* ภาพตรงกลาง */}
            <div className="flex flex-col flex-1 justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 2 }}
                    className="flex flex-col flex-1 justify-center items-center h-[300px] w-full "
                >
                    <div className="relative  w-full max-w-md h-full ">
                    <Image
                        src="/img/scene8-1.webp"
                        alt="scene"
                        fill
                        className="object-contain"
                        priority
                    />
                    </div>
                </motion.div>

                {/* ข้อความ */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: duration, delay: 3 }}
                    className="flex flex-col items-left justify-center text-left py-[20px] text-[15px] z-10 w-full"
                >
                    <motion.div
                    //     initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 0.4, delay: 2 }}
                    
                    >
                        <h1 className="">เสียงจากข้างนอกลอดเข้ามาในห้อง...</h1>
                        <h1>เสียงหัวเราะ บทเพลง </h1>
                        <h1 className="">เสียงพูดคุยโห่ร้องด้วยความยินดี</h1>
                        <h1>เมืองกำลังเฉลิมฉลองอิสรภาพที่คุณต่อสู้</h1>
                        <h1 className="">เพื่อให้ได้มันมา</h1>
                        <h1>หอคอยพังทลาย หมอกร้ายได้สลายไปแล้วจริงๆ</h1>
                    </motion.div>
                    


                </motion.div>
                
            </div>
        </div>

        {/* ปุ่มถัดไป */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: duration, delay: 1 }}
            className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/9-1" className="h-[48px] w-full" >
                <WhiteButton text="ถัดไป" />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
