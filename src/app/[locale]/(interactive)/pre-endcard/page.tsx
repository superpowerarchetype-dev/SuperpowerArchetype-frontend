"use client";

import { notoThai } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("pre-endcard");
    const [result,setResult] = useState<string>("")
    
    useEffect(()=> {
        setResult(localStorage.getItem("win_archetype") ?? "")
    },[result])

    const router = useRouter()
    useEffect(() => {
        if (!result) return;
        const timer = setTimeout(() => {
          router.push(`/endcard-${result}`);
        }, 3000);
        return () => clearTimeout(timer);
    }, [result, router]);

    return (
        <motion.div className={cn(notoThai.className, "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#FFFFFF] overflow-visible overflow-y-scroll overflow-x-hidden")}>
            <div className="flex flex-col flex-1 min-h-screen w-full text-[#000000] bg-[#FFFFFF] px-[20px]">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0 }}
                    className="-top-[3%] z-10 flex h-[60px] w-full justify-center items-center">
                </motion.div>
                <motion.div className="flex flex-col items-center text-[15px] pt-[60px] font-semibold pb-[20px]">
                    <h1>{t("youAre")}</h1>
                </motion.div>
            </div>
        </motion.div>
    )
}