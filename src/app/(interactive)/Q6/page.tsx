'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const duration = 0.8;
  const [isAHold, setIsAHold] = useState<boolean>(false);
  const [isBHold, setIsBHold] = useState<boolean>(false);
  const [isCHold, setIsCHold] = useState<boolean>(false);

  const router = useRouter()

  const handleAnswer = (input:string) => {
    localStorage.setItem("Q6",input)
    router.push("/Q7")

  }

  return (
    <div
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between bg-[#5D5D5D] items-center w-full h-screen overflow-hidden text-white px-[20px] "
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 0.4, delay: 0 }}
            className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15">
        <Link href="/4-2" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </motion.div>


    <motion.div
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1 }}
      className="flex flex-col w-full justify-center pt-[68px]  text-center text-white flex-1 z-10"
      >
        <h1 className="text-[17px] font-semibold">บรรยากาศในอุโมงค์ตอนนี้</h1>
        <h1 className="text-[17px] font-semibold">คนที่นี่เพิ่งรู้จักกัน</h1>
        <h1 className="text-[17px] font-semibold pt-[20px]">คุณจะเข้าหาเขาอย่างไร?</h1>
      

      {/* ภาพตรงกลาง */}
     

      {/* ข้อความ */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: duration, delay: 1 }}
        className="flex flex-col items-center justify-center text-center pt-[40px] py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]"
      >
        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isAHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsAHold(true)}
                onMouseUp={() => setIsAHold(false)}
                onMouseLeave={() => setIsAHold(false)}
                onTouchStart={() => setIsAHold(true)}   // mobile support
                onTouchEnd={() => setIsAHold(false)}    // mobile support
                onClick={() => handleAnswer("A")}
            >
                <h1>คุณเดินเข้าไปชวนคุยอย่างเป็นกันเอง</h1>
                <h1>เพื่อเริ่มต้นความไว้เนื้อเชื่อใจ</h1>
            </button>
        </div>

        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isBHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsBHold(true)}
                onMouseUp={() => setIsBHold(false)}
                onMouseLeave={() => setIsBHold(false)}
                onTouchStart={() => setIsBHold(true)}   // mobile support
                onTouchEnd={() => setIsBHold(false)}    // mobile support
                onClick={() => handleAnswer("B")}
            >
                <h1>คุณเริ่มต้นแบ่งขนมปังและน้ำดื่มที่คุณมี</h1>
                <h1>จัดหาผ้าห่มให้คนที่หนาวสั่น</h1>
            </button>
        </div>

        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isCHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsCHold(true)}
                onMouseUp={() => setIsCHold(false)}
                onMouseLeave={() => setIsCHold(false)}
                onTouchStart={() => setIsCHold(true)}   // mobile support
                onTouchEnd={() => setIsCHold(false)}    // mobile support
                onClick={() => handleAnswer("C")}
            >
                <h1>คุณเดินไปหาคนที่ดูอ่อนล้า</h1>
                <h1>เป็นพื้นที่ปลอดภัยให้เขาได้ระบาย</h1>
                <h1>ความรู้สึกออกมา</h1>
            </button>
        </div>
        
      </motion.div>
      </motion.div>
      <motion.div 
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ease: "easeOut", duration: duration, delay: 2.4 }}
            className="h-[200px] z-5">
            <Image
                src="/img/scene4-2.webp"
                alt="scene"
                fill
                className="object-cover"
                priority
            />
        </motion.div>

      {/* ปุ่มถัดไป */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10"> */}
        {/* <Link href="/1-5" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link> */}
      {/* </motion.div> */}
    </div>
  );
}
