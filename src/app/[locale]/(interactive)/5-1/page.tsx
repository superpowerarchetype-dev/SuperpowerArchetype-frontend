"use client";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("5-1");
  const duration = 0.4;
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/5-2"); 
    }, 4000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden bg-[#D1D1D1] text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="flex flex-col flex-1 w-full">
        <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
            <Link href="/Q10" className="flex flex-row items-center ">
            <ChevronLeft color="#0A0A0A" />
            <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
            </Link>
        </div>
        <div className="flex flex-col flex-1 w-full pt-[88px] justify-center">
            <div className="flex flex-col justify-center">
                <motion.div className="flex flex-col flex-1 items-left justify-center text-left gap-y-[3px] py-[20px] text-[18px] z-10 w-full">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 1 }}>
                        <h1 className="font-semibold text-[18px] ">{t("morningNext")}</h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration, delay: 2 }}>
                        <h1 className="font-semibold text-[18px] ">{t("distance")}</h1>
                    </motion.div>
                </motion.div>
            </div>
        </div>
      </motion.div>
    </div>
  );
}