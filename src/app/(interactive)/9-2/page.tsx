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
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#F0F0F0] px-[20px]"
      )}
    >
        {/* <motion.div
            // initial={{ y : "0%" , opacity: 1}}
            // animate={{ y: "-30%" , opacity:0}}
            // transition={{
            //     opacity:{delay:3.5,duration:1},
            //     y:{delay:1,duration:2.5}
            // }}
            

            className="z-5 absolute h-screen w-full top-[20%]"
        >
            <Image
                src="/img/scene9-1-firework.webp"
                alt="scene"
                fill
                className="object-contain"
                priority
            />

        </motion.div> */}
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-20">
        <Link href="/8-1" className="flex flex-row items-center ">
          <ChevronLeft color="#F0F0F0" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </div>

      {/* ภาพตรงกลาง */}
      <div
        
        className="flex flex-col justify-start items-left flex-1 w-full pt-[158px] z-10"
      >
        <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ease: "easeOut", duration: duration, delay: 4.5 }}
            className="text-[15px]"
        
        >
            <h1>แต่ท่ามกลางเสียงแห่งความสุขนั้น...</h1>
            <h1>คุณกลับสัมผัสได้ถึงความจริงอันเงียบเชียบ</h1>
        </motion.div>

        <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ease: "easeOut", duration: duration, delay: 5.5 }}
            className="text-[15px]  pt-[20px]"
        >
            <h1>ความจริงที่ว่า The Silence ไม่ได้หายไปไหน</h1>
            <h1>มันแค่อ่อนแอลง... และกำลังรอวันหวนคืน</h1>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 1 }}
            className="text-[15px] pt-[20px]"
        >
            <h1>มันยังไม่ตาย... เช่นเดียวกับคุณ</h1>

        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 2 }}
            className="text-[15px] pt-[20px]"
        >
            <h1>และในวินาทีนั้น คุณก็เริ่มเข้าใจ...</h1>

        </motion.div>

      </div>

      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:duration,delay:1}}
        className="z-5 absolute w-full h-screen -bottom-[35%]"
      >
            <Image
                src="/img/scene9-1-shadow.webp"
                alt="scene"
                fill
                className="object-contain"
                priority
            />
      </motion.div>

      

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 2 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/10-1" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
