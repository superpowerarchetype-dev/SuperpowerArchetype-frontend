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
  const t = useTranslations("4-1");
  const duration = 0.4;
  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#5D5D5D] text-white px-[20px]")}>
      <LangToggle color='white' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col flex-1 w-full">
        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/34-4" className="flex flex-row items-center text-white">
            <ChevronLeft color="white" />
            <h1 className={cn(anuphan.className, "text-white text-[15px] ml-1")}>{t("back")}</h1>
            </Link>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }} className="flex flex-col items-left justify-center text-left pt-[88px] w-full">
            <h1 className="text-[18px] font-semibold">{t("timePlace")}</h1>
        </motion.div>
        <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col flex-1 justify-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }} className="flex flex-col flex-1 justify-center items-center h-[300px] w-full ">
                    <div className="relative flex-1 w-full max-w-md h-full ">
                    <Image src="/img/scene4-1.webp" alt="scene" fill className="object-contain" priority />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col items-left justify-center text-left py-[20px] text-[15px] z-10 w-full">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 1 }}>
                        <h1 className="">{t("wakeUp")}</h1>
                        <h1>{t("hand")}</h1>
                    </motion.div>
                </motion.div>
            </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/Q5" className="h-[48px] w-full">
            <WhiteButton text={t("next")} />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}