"use client";
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
  const t = useTranslations("72-2");
  const duration = 0.8;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0 }} className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#FFFFFF] text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/7-1" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="black" />
          <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-left flex-1 w-full pt-[48px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.8 }} className="text-[15px]">
            <h1>{t("sunlight")}</h1>
            <h1>{t("firstTime")}</h1>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 1.6 }} className="text-[18px] font-semibold pt-[20px]">
            <h1>{t("cityAlive")}</h1>
            {
              locale === 'en' &&
              <h1>and bustling again.</h1>
            }
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 2.4 }} className="text-[15px] pt-[20px]">
            <h1>{t("injured")}</h1>
            <h1>{t("beforeBlackout")}</h1>
            <h1>{t("vision")}</h1>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 3.6 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q12" className="h-[48px] w-full">
          <WhiteButton text={t("next")} />
        </Link>
      </motion.div>
    </motion.div>
  );
}