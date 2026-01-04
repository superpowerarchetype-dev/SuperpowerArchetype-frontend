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
    const t = useTranslations("1-1");
    const duration = 0.4;
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/1-3");
        }, 4000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="whitespace-pre-wrap">
            <LangToggle color='white' />
            <Link href="/1-2">
                <div className={cn(
                    notoThai.className,
                    "bg-[#5D5D5D] flex flex-col min-h-screen px-[20px] text-white items-center font-anuphan -z-10"
                )}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: duration, delay: 1 }} 
                        className="flex flex-col items-left pt-[68px] pb-[20px] w-full z-10 font-semibold"
                    >
                        <h1 className="text-[22px]">{t("beforeSilence")}</h1>
                        <h1 className="text-[22px]">{t("cityHadVoice")}</h1>
                    </motion.div>

                    <div className="w-full flex-grow">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: duration, delay: 1 }}
                            className="w-full"
                        >
                            <Image
                                src="/img/scene1-1.webp"
                                width={390}
                                height={800}
                                alt="scene"
                                className="self-center w-full object-contain"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: duration, delay: 2 }}
                            className="flex flex-col items-left pt-[20px] text-[18px] font-light z-10 w-full"
                        >
                            <h1>{t("cityChaos")}</h1>
                            <h1>{t("tiringDays")}</h1>
                        </motion.div>
                    </div>
                    <motion.div className="flex flex-col py-[20px] h-[88px] w-full items-center z-10" />
                </div>
            </Link>
        </div>
    );
}