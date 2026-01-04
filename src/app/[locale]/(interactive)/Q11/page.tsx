"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LangToggle from "~/component/lang_toggle";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("Q11");
  const duration = 0.8;
  const [isAHold, setIsAHold] = useState<boolean>(false);
  const [isBHold, setIsBHold] = useState<boolean>(false);
  const [isCHold, setIsCHold] = useState<boolean>(false);
  const router = useRouter();

  const handleAnswer = (input:string) => {
    localStorage.setItem("Q11",input);
    router.push("/7-1");
  }

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#D1D1D1] text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/5-3" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="#0A0A0A" />
          <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }} className="pt-[68px] text-[15px] text-center text-[#0A0A0A]">
        <h1>{t("robots")}</h1>
        <h1>{t("laser")}</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col justify-center items-center flex-1 w-full ">
        <div className="relative w-full max-w-md h-full ">
          <Image src="/img/Q11.webp" alt="scene" fill className="object-contain " priority />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="py-[20px] text-[17px] font-semibold text-center text-[#0A0A0A]">
        <h1>{t("timeLeft")}</h1>
        {
          locale === 'en' &&
          <h1>What will you do?</h1>
        }
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]">
        {/* Choice A */}
        <div className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px] ${isAHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}>
            <button className="flex flex-col items-center justify-center w-full h-full text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsAHold(true)} onMouseUp={() => setIsAHold(false)} onMouseLeave={() => setIsAHold(false)} onTouchStart={() => setIsAHold(true)} onTouchEnd={() => setIsAHold(false)}
                onClick={() => handleAnswer("A")}>
                <h1>{t("choiceA_1")}</h1>
                <h1>{t("choiceA_2")}</h1>
            </button>
        </div>
        {/* Choice B */}
        <div className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px] ${isBHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}>
            <button className="flex flex-col items-center justify-center w-full h-full text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsBHold(true)} onMouseUp={() => setIsBHold(false)} onMouseLeave={() => setIsBHold(false)} onTouchStart={() => setIsBHold(true)} onTouchEnd={() => setIsBHold(false)}
                onClick={() => handleAnswer("B")}>
                <h1>{t("choiceB_1")}</h1>
                {
                  locale === 'en' &&
                  <h1>We’ve gotta charge in, head on!”</h1>
                }
            </button>
        </div>
        {/* Choice C */}
        <div className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px] ${isCHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}>
            <button className="flex flex-col items-center justify-center w-full h-full text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsCHold(true)} onMouseUp={() => setIsCHold(false)} onMouseLeave={() => setIsCHold(false)} onTouchStart={() => setIsCHold(true)} onTouchEnd={() => setIsCHold(false)}
                onClick={() => handleAnswer("C")}>
                <h1>{t("choiceC_1")}</h1>
                {
                  locale === 'en' &&
                  <h1>The system might have a particular pattern.”</h1>
                }
            </button>
        </div>
      </motion.div>
    </div>
  );
}