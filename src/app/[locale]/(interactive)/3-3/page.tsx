"use client";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("3-3");
  const duration = 0.4;

  return (
    <motion.div className={cn(notoThai.className, "relative flex flex-col flex-1 justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A]")}>
        <LangToggle color='black' /> 
        <motion.div className="flex flex-col flex-1 w-full">
            <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-10">
                <Link href="/3-2" className="flex flex-row items-center text-[#0A0A0A]">
                    <ChevronLeft color="#0A0A0A" />
                    <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
                </Link>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col items-center justify-center flex-1 pt-[68px]">
                <h1 className="text-white text-stroke-10-black text-center font-bold text-[60px] drop-shadow-[0_0_30px_rgba(10,10,10,0.8)] ">{t("theSilence")}</h1>
                <h1 className="text-fill-white text-stroke-8-black font-bold text-[40px] drop-shadow-[0_0_30px_rgba(10,10,10,0.8)] ">{t("isHere")}</h1>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10 px-[20px]">
                <Link href="/Q4" className="h-[48px] w-full">
                    <WhiteButton text={t("next")} />
                </Link>
            </motion.div>
      </motion.div>
    </motion.div>
  );
}