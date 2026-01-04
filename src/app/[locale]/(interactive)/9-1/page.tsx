"use client";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("9-1");
  const duration = 0.8;
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/9-2"); 
    }, 5500);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0 }} className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#F0F0F0] px-[20px]")}>
        <LangToggle color='white' /> 
        <motion.div initial={{ y : "0%" , opacity: 1}} animate={{ y: "-30%" , opacity:0}} transition={{ opacity:{delay:3.5,duration:1}, y:{delay:1,duration:2.5} }} className="z-5 absolute h-screen w-full top-[20%]">
            <Image src="/img/scene9-1-firework.webp" alt="scene" fill className="object-contain" priority />
        </motion.div>
        
        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-20">
            <Link href="/8-1" className="flex flex-row items-center ">
                <ChevronLeft color="#F0F0F0" />
                <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
            </Link>
        </div>

        <div className="flex flex-col justify-start items-left flex-1 w-full pt-[158px] z-10">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 4.5 }} className="text-[15px]">
                <h1>{t("amidstJoy")}</h1>
                <h1>{t("silentTruth")}</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 5.5 }} className="text-[15px] pt-[20px]">
                <h1>{t("notGone")}</h1>
                <h1>{t("weakened")}</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 6.5 }} className="text-[15px] pt-[20px]">
                <h1>{t("notDead")}</h1>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 7.5 }} className="text-[15px] pt-[20px]">
                <h1>{t("understand")}</h1>
            </motion.div>
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:duration,delay:6.5}} className="z-5 absolute w-full h-screen -bottom-[35%]">
            <Image src="/img/scene9-1-shadow.webp" alt="scene" fill className="object-contain" priority />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 7.5 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
            <Link href="/10-1" className="h-[48px] w-full">
                <WhiteButton text={t("next")} />
            </Link>
        </motion.div>
    </motion.div>
  );
}