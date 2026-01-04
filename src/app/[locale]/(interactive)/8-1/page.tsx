"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { notoThai } from "~/component/font";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("8-1");
  const duration = 0.4;

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-white text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col flex-1 w-full">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }} className="flex flex-col text-left text-[15px] py-[20px] mt-[88px]">
            <h1>{t("openEyes")}</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col text-left text-[15px] mt-[10px]">
            <h1>{t("notHeaven")}</h1>
            <h1>{t("survived")}</h1>
        </motion.div>
        <div className="flex flex-col flex-1 w-full">
            <div className="flex flex-col flex-1 justify-center">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }} className="flex flex-col flex-1 justify-center items-center h-[300px] w-full ">
                    <div className="relative w-full max-w-md h-full ">
                        <Image src="/img/scene8-1.webp" alt="scene" fill className="object-contain" priority />
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 3 }} className="flex flex-col items-left justify-center text-left py-[20px] text-[15px] z-10 w-full">
                    <div>
                        <h1>{t("soundOutside")}</h1>
                        <h1>{t("laughter")}</h1>
                        <h1>{t("cheering")}</h1>
                        <h1>{t("celebrating")}</h1>
                        <h1>{t("forFreedom")}</h1>
                        <h1>{t("towerFallen")}</h1>
                    </div>
                </motion.div>
            </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/9-1" className="h-[48px] w-full" >
                <WhiteButton text={t("next")} />
            </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}