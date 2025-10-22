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
    localStorage.setItem("Q4",input)
    router.push("/3-4")

  }

  return (
    <div
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-white px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/3-3" className="flex flex-row items-center text-white">
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
      className="flex flex-col w-full justify-center pt-[68px]  text-center text-white flex-1"
      >
        <h1 className="text-[17px] font-semibold">เจ้าหมอกนั่นเคลื่อนตัวเข้าหาเพื่อนของคุณ</h1>
        <h1 className="text-[17px] font-semibold pb-[20px]">คุณจะทำอย่างไร</h1>
      

      {/* ภาพตรงกลาง */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col justify-center items-center flex-1 w-full "
      >
        <div className="relative w-full max-w-md h-full ">
          <Image
            src="/img/Q3.webp"
            alt="scene"
            fill
            className="object-contain "
            priority
          />
        </div>
      </motion.div> */}

      {/* ข้อความ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1 }}
        className="flex flex-col items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]"
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
                <h1>คุณสร้างแนวป้องกันทันที</h1>
                <h1>ตะโกนบอกให้ทุกคนตั้งสติและเกาะกลุ่มกันไว้</h1>
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
                <h1>คุณพุ่งเข้าไปขวาง</h1>
                <h1>เพื่อสร้างความโกลาหลเพื่อเบี่ยงเบนความสนใจ</h1>
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
                <h1>คุณกวาดสายตามองหาช่องทางที่คาดไม่ถึง</h1>
                <h1>เพื่อเปลี่ยนความเสียเปรียบให้เป็นต่อ</h1>
            </button>
        </div>
        
      </motion.div>
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
