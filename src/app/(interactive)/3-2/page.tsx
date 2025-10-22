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
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#000000] text-white "
      )}
    >
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex flex-col flex-1 w-full"
        >
            {/* ปุ่มย้อนกลับ */}
            <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-10">
                <Link href="/3-1" className="flex flex-row items-center text-white">
                    <ChevronLeft color="white" />
                    <h1
                        className={cn(anuphan.className, "text-white text-[15px] ml-1")}
                    >
                        ย้อนกลับ
                    </h1>
                </Link>
            </div>

            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //     duration: duration,
                //     delay: 1,
                // }} 
                className="flex flex-col items-left pt-[88px] pb-[20px] w-full  px-[20px] gap-y-2">
                
                <h1 className="text-[15px]">แต่เมื่อเขาจุ่มแปรงสีน้ำเงินลงบนผนัง...</h1>
                <h1 className="text-[15px]">หมอกเข้มข้นเริ่มโผล่ออกมาจากซอกตึก</h1>
                </motion.div>

            {/* ภาพตรงกลาง */}
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 1, delay: 0 }}
                className="flex flex-col justify-center items-center flex-1 w-full px-[0px]"
            >
                <div className="absolute relative w-full h-full ">
                <Image
                    src="/img/scene3-2.webp"
                    alt="scene"
                    fill
                    className="object-contain w-full"
                    priority
                />
                </div>
            </motion.div>



            
            {/* ปุ่มถัดไป */}
            <div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10 px-[20px]">
                <Link href="/3-3" className="h-[48px] w-full">
                <WhiteButton text="ถัดไป" />
                </Link>
            </div>
      </motion.div>
    </div>
  );
}
