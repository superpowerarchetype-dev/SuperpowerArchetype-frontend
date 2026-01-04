"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "~/lib/navigation";
import { notoThai } from "~/component/font";
import { cn } from "~/lib/utils";
import { ChevronLeft } from "lucide-react";
import { anuphan } from "~/component/font";
import YellowButton from "~/component/yellow_button";
import { FormService } from "~/app/service/FormService";
import { FormMappers } from "~/app/service/FormMapper";
import LangToggle from "~/component/lang_toggle";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
    const locale = useLocale();
    const t = useTranslations("10-1");
    async function submitForm() {
        void FormService.createForm(await FormMappers.mapForm());
    } 

  return (
    <div className={cn(notoThai.className, "flex flex-col min-h-screen w-full  text-[#0A0A0A] px-[20px]")}>
        <LangToggle color='black' /> 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 0 }} className="flex flex-col min-h-screen flex-glow">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="absolute z-10 top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
                <Link href="/9-1" className="flex flex-row items-center text-[#0A0A0A]">
                    <ChevronLeft color="#0A0A0A" />
                    <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
                </Link>
            </motion.div>
            
            <motion.div className="absolute top-0 left-0 h-screen flex-1 w-full overflow-hidden">
                <motion.div initial={{ x: "-25%" }} animate={{ x: "-50%" }} transition={{delay:0, duration: 6, ease: "easeInOut" }} className="absolute top-0 left-0 h-full flex">
                    <div className="relative w-[2000px] h-full mx-[20px]">
                        <Image src="/img/scene10-1.webp" alt="Scrolling Scene" fill className="object-contain" />
                    </div>
                </motion.div>
            </motion.div>

            <div className="relative flex flex-col flex-1 pt-[68px]">
                <div className="flex flex-col justify-center pt-[40px] pb-[40%] py-[20px] text-[15px] z-10 w-full">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0 }} className="pb-[40px]">
                        <h1>{t("dream")}</h1>
                        <h1>{t("unfinished")}</h1>
                        <h1>{t("hope")}</h1>
                        {
                            locale === 'en' &&
                            <h1>— a hope that still lives.</h1>
                        }
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 2 }} className="pb-[40px]">
                        <h1 className="pl-[20px]">{t("notJustMartyrs")}</h1>
                        {
                            locale === 'en' && 
                            <h1>willing to sacrifice,</h1>
                        }
                        <h1>{t("livingHero")}</h1>
                        {
                            locale === 'en' && 
                            <h1>continue fighting.</h1>
                        }
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 4 }} className="pb-[40px]">
                        <h1>{t("timeToKnow")}</h1>
                        <h1>{t("yourVoice")}</h1>
                        
                    </motion.div>
                </div>
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 6 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
                <Link href={`/pre-endcard`} className="h-[48px] w-full" onClick={submitForm}>
                    <YellowButton text={t("seeResult")} />
                </Link>
            </motion.div>
        </motion.div>
    </div>
  )
}