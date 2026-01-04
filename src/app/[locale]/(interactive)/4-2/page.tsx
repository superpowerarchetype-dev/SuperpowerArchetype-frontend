"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import LangToggle from "~/component/lang_toggle";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("4-2");
  const duration = 0.8;
  return (
    <motion.div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#5D5D5D] text-[#FFFFFF] px-[20px]")}>
      <LangToggle color='white' /> 
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15">
        <Link href="/Q5" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </div>

      <div className="flex flex-col flex-1 justify-center align-center items-left  w-full pt-[48px] ">
        <motion.div className="text-[15px] pb-[20px] z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.8 }}>
                <h1>{t("lookAround")}</h1>
                { 
                  locale === 'en' &&
                  <h1>sitting in silence.</h1>
                }
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 1.6 }}>
                <h1 className="pt-[20px]">{t("welcome")}</h1>
                <h1>{t("voiceOldMan")}</h1>
            </motion.div>
        </motion.div>

        <motion.div className="text-[15px] pt-[40px] z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 3.2 }}>
                <h1>{t("weAreLast")}</h1>
                <h1>{t("fogCannotTouch")}</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 4 }}>
                <h1 className="pt-[20px]">{t("power")}</h1>
                <h1>{t("resistFog")}</h1>
            </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 2.4 }} className="h-[200px] z-5">
            <Image src="/img/scene4-2.webp" alt="scene" fill className="object-cover" priority />
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 4 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q6" className="h-[48px] w-full">
          <WhiteButton text={t("next")} />
        </Link>
      </motion.div>
    </motion.div>
  );
}