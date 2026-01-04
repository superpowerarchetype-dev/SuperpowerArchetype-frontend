"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "~/lib/navigation";
import WhiteButton from "~/component/white_button";
import { notoThai } from "~/component/font";
import { cn } from "~/lib/utils";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("1-3");
  return (
    <div className={cn(notoThai.className, "flex flex-col min-h-screen w-full bg-[#5D5D5D] text-white px-[20px]")}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 0 }} className="flex flex-col min-h-screen flex-glow">
            <LangToggle color='white' /> 
            <div className="flex flex-col pt-[68px] pb-[20px] z-10 font-semibold">
                <h1 className="text-[22px]">{t("beforeSilence")}</h1>
                <h1 className="text-[22px]">{t("cityHadVoice")}</h1>
            </div>
            <div className="flex flex-col flex-1">
                <div className="h-[408px] flex-1 relative w-full overflow-hidden border-3 border-black">
                    <motion.div initial={{ x: "-28%" }} animate={{ x: "-50%" }} transition={{delay:1, duration: 4, ease: "easeInOut" }} className="absolute top-0 left-0 h-full flex">
                        <div className="relative w-[2000px] h-full mx-[20px]">
                            <Image src="/img/scene1-3.webp" alt="Scrolling Scene" fill className="object-contain" />
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center py-[20px] text-[18px] font-light z-10 w-full">
                    <h1>{t("cityChaos")}</h1>
                    <h1>{t("tiringDays")}</h1>
                    <h1 className="pt-[5%]">{t("chaosProof")}</h1>
                    <h1>{t("humanity")}</h1>
                </div>
            </div>
            <div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
                <Link href='/1-4' className="h-[48px] w-full">
                    <WhiteButton text={t("next")} />
                </Link>
            </div>
        </motion.div>
    </div>
  )
}