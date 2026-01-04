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
  const t = useTranslations("r-1");
  const duration = 0.8;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/1-7" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="black" />
          <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-left flex-1 w-full pt-[48px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className="flex flex-col items-center justify-center bg-[#F4F4F4] py-[20px] border-[2px] rounded-[4px]">
            <div className="flex flex-col text-[18px] pb-[20px] font-semibold items-center justify-center" >
                <h1>{t("readyToStart")}</h1>
                <h1>{t("lastVoice")}</h1>
                { locale === 'en' && 
                  <h1>vanish?</h1>
                }
            </div>

            <div className="flex flex-col text-[15px] items-center justify-center" >
                <h1>{t("alongTheWay")}</h1>
                <h1>{t("findHero")}</h1>
                <h1>{t("trustUs")}</h1>
                <h1>{t("topSecret")}</h1>
            </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/r-2" className="h-[48px] w-full">
          <WhiteButton text={t("next")} />
        </Link>
      </motion.div>
    </motion.div>
  );
}