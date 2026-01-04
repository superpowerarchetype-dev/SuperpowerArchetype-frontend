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
  const t = useTranslations("3-1");

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#000000] text-white ")}>
        <LangToggle color='white' /> 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0 }} className="flex flex-col flex-1 w-full">
            <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-10">
                <Link href="/2-2" className="flex flex-row items-center text-white">
                    <ChevronLeft color="white" />
                    <h1 className={cn(anuphan.className, "text-white text-[15px] ml-1")}>{t("back")}</h1>
                </Link>
            </div>

            <motion.div className="flex flex-col items-left pt-[88px] pb-[20px] w-full  px-[20px] gap-y-2">
                <div>
                    <h1 className="text-[15px]">{t("dipBrush")}</h1>
                    {
                        locale === 'en' &&
                        <h1 className="text-[15px]">on the wall…</h1>
                    }
                </div>
            </motion.div>

            <motion.div className="flex flex-col justify-center items-center flex-1 w-full px-[0px]">
                <div className="absolute relative w-full h-full ">
                    <Image src="/img/scene3-1.webp" alt="scene" fill className="object-contain w-full" priority />
                </div>
            </motion.div>

            <div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10 px-[20px]">
                <Link href="/3-2" className="h-[48px] w-full">
                    <WhiteButton text={t("next")} />
                </Link>
            </div>
      </motion.div>
    </div>
  );
}