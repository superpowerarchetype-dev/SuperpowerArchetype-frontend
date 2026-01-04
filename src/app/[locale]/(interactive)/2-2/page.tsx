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
  const t = useTranslations("2-2");

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#000000] text-white px-[20px]")}>
        <LangToggle color='white' /> 

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }} className="flex flex-col flex-1">
            <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
                <Link href="/2-1" className="flex flex-row items-center text-white">
                    <ChevronLeft color="white" />
                    <h1 className={cn(anuphan.className, "text-white text-[15px] ml-1")}>{t("back")}</h1>
                </Link>
            </div>

            <motion.div className="flex flex-col flex-1 justify-center items-center w-full pt-[48px] text-left">
                <div className="w-full max-w-md h-[300px] flex-none">
                    <Image src="/img/scene2-2.webp" alt="scene" width={400} height={300} className="object-contain" priority />
                    <div className="pt-[40px]">
                        <h1 className="text-[18px] font-semibold">{t("drawSky")}</h1>
                        <h1 className="text-[15px] ">{t("heSaid")}</h1>
                    </div>
                </div>
            </motion.div>

            <div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
                <Link href="/3-1" className="h-[48px] w-full">
                    <WhiteButton text={t("next")} />
                </Link>
            </div>
      </motion.div>
    </div>
  );
}