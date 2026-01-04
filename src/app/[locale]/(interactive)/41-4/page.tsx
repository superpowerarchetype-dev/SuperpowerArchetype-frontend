"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("41-4");
  const duration = 0.4;
  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#F0F0F0] text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col flex-1 w-full">
        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/Q8" className="flex flex-row items-center ">
            <ChevronLeft color="#0A0A0A" />
            <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
            </Link>
        </div>
        <div className="flex flex-col flex-1 w-full pt-[88px] justify-center">
            <div className="flex flex-col justify-center">
                <motion.div className="flex flex-col justify-center items-center h-[300px] w-full ">
                    <div className="relative w-full max-w-md h-full ">
                    <Image src="/img/scene5-1.webp" alt="scene" fill className="object-contain" priority />
                    </div>
                </motion.div>

                <motion.div className="flex flex-col flex-1 items-left justify-center text-center py-[20px] text-[15px] z-10 w-full">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }}>
                        <h1 className="font-semibold text-[18px] pb-[40px] ">{t("16hours")}</h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }}>
                        <h1 className="font-light text-[15px]">{t("knowPlan")}</h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 3 }} className="pt-[20px]">
                        <h1 className="font-light text-[15px]">{t("whisper")}</h1>
                        <h1 className="font-light text-[15px]">{t("evilVoice")}</h1>
                        <h1 className="font-light text-[15px]">{t("knowYouBetter")}</h1>
                    </motion.div>
                </motion.div>
            </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 3 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/Q9" className="h-[48px] w-full">
            <WhiteButton text={t("next")} />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}