"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { notoThai } from "~/component/font";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const locale = useLocale();
  const t = useTranslations("1-8");
  const duration = 0.8;

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#2C2C2C] text-white px-[20px]")}>
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]"></div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 0.8 }} className="flex flex-col items-center pt-[68px] pb-[20px] w-full z-10 font-semibold">
        <h1 className="text-[18px]">{t("day47")}</h1>
        <h1 className="text-[18px]">{t("afterSilence")}</h1>
        { locale === 'en' &&
          <h1 className="text-[18px]">the city.</h1>
        }
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 0.8 }} className="flex flex-col justify-center items-center w-full h-full">
        <div className="relative w-full h-full">
          <Image src="/img/scene1-4.webp" alt="scene" fill className="object-cover" priority />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1.6 }} className="flex flex-col flex-1 items-center justify-center text-center py-[20px] text-[15px] font-light z-10 w-full">
        <h1>{t("walkStreet")}</h1>
        <h1>{t("wallArt")}</h1>
        <h1>{t("greyPaint")}</h1>
        { locale === 'en' &&
          <h1>dull, grey strokes.</h1>
        }
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1.6 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
        <Link href="/Q1" className="h-[48px] w-full">
          <WhiteButton text={t("next")} />
        </Link>
      </motion.div>
    </div>
  );
}