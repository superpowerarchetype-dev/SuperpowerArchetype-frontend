"use client";

import Image from "next/image";
import { Link } from "~/lib/navigation";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { notoThai } from "~/component/font";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("1-2"); // ใช้ namespace 1-2 (เนื้อหาเหมือน 1-1 แต่แยกตามชื่อไฟล์)
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/1-3");
        }, 2000);
        return () => clearTimeout(timer);
    }, [router]);    
    
    return (
        <div className={cn(
            notoThai.className,
            "bg-[#5D5D5D] flex flex-col min-h-screen px-[20px] text-white items-center font-anuphan -z-10 whitespace-pre-wrap"
        )}>
            <LangToggle color='white' />
          
            <motion.div className="flex flex-col items-left pt-[68px] pb-[20px] w-full z-10 font-semibold">
                <h1 className="text-[22px]">{t("beforeSilence")}</h1>
                <h1 className="text-[22px]">{t("cityHadVoice")}</h1>
            </motion.div>
            
            <div className="w-full flex-grow">
                <motion.div className="w-full">
                    <Image
                        src="/img/scene1-1.webp"
                        width={390}
                        height={800}
                        alt="scene"
                        className="self-center w-full"
                    />
                </motion.div>
                <motion.div className="flex flex-col items-left pt-[20px] text-[18px] font-light z-10 w-full">
                    <h1>{t("cityChaos")}</h1>
                    <h1>{t("tiringDays")}</h1>
                </motion.div>
            </div>
            <motion.div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10" />
        </div>
    );
}