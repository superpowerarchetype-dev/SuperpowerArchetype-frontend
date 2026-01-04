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
  const t = useTranslations("1-4");
  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#2C2C2C] text-white px-[20px]")}>
      <LangToggle color='white' /> 
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/1-3" className="flex flex-row items-center text-white">
          <ChevronLeft color="white" />
          <h1 className={cn(anuphan.className, "text-white text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col justify-center items-center flex-1 w-full pt-[48px]">
        <div className="relative w-full max-w-md h-full ">
          <Image src="/img/scene1-4.webp" alt="scene" fill className="object-cover" priority />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full">
        <h1 className="font-semibold">{t("noOneRemembers")}</h1>
        <h1 className="font-semibold">{t("whenSilenceCame")}</h1>
        <h1 className="pt-[5%] text-[15px]">{t("infiltrated")}</h1>
        <h1 className="text-[15px]">{t("weakestDay")}</h1>
        <h1 className="text-[15px]">{t("tiredPeople")}</h1>
        {locale === 'en' &&
          <h1 className="text-[15px]">the unending chaos.</h1>
        }
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/1-5" className="h-[48px] w-full">
          <WhiteButton text={t("next")} />
        </Link>
      </motion.div>
    </div>
  );
}