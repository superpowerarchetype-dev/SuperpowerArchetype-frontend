"use client";

import Image from "next/image";
import { Link } from "~/lib/navigation";
import { motion } from "framer-motion";
import YellowButton from "~/component/yellow_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import LangToggle from "~/component/lang_toggle";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
    // กำหนด namespace ให้ตรงกับใน JSON
    const locale = useLocale();
    const t = useTranslations("0-1"); 
    const duration = 0.3;

    return (
        <div className={cn(
            anuphan.className,
            "bg-black flex flex-col flex-1 h-screen px-[20px] text-[#D1D1D1] items-center font-anuphan -z-10"
        )}>
            <LangToggle color='white' />
            
            {/* Background Image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 1.5 }}
                className="absolute h-screen w-full"
            >
                <Image
                    src="/img/BG_Welcome.webp"
                    alt="welcome bg"
                    fill
                    className="h-full fill object-cover"
                />
            </motion.div>

            {/* Logos */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 1.5 }}
                className="z-10"
            >
                <div className="flex flex-col items-center pt-[68px] pb-[20px] w-full z-10">
                    <Image
                        src="/img/amnesty_logo.webp"
                        width={72}
                        height={40}
                        alt="logo amnesty"
                        className="self-center"
                    />
                    <Image
                        src="/img/amnestyX.webp"
                        width={102}
                        height={48}
                        alt="logo amnesty x artist"
                        className="self-center"
                    />
                    <Image
                        src="/img/what_is_your.webp"
                        width={200}
                        height={48}
                        alt="logo what is your..."
                        className="self-center"
                    />
                </div>
            </motion.div>

            {/* Main Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 0.5 }}
                className="flex flex-col flex-1 z-10 justify-center"
            >
                <Image
                    src={`/img/Logo_${locale}.webp`}
                    width={390}
                    height={400}
                    alt="logo"
                    className="self-center w-full"
                />
            </motion.div>

            {/* Poem / Text Content */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 1.5 }}
                className="flex flex-col pt-max-[12%] items-center text-[14px] font-light z-10 font-anuphan"
            >
                <h1 className="font-anuphan">{t("heroHidden")}</h1>
                <h1 className="font-anuphan">{t("fire")}</h1>
                <h1 className="font-anuphan">{t("voice")}</h1>
                <h1 className="font-anuphan">{t("planner")}</h1>

                <h1 className="pt-[10%] font-anuphan font-regular text-white">{t("powerMeaning")}</h1>
                <h1 className="font-anuphan font-regular text-white">{t("betterWorld")}</h1>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: duration, delay: 1.5 }}
                className="flex flex-col pb-[20px] py-min-[15px] py-max-[20px] w-full items-center z-10"
            >
                <h1 className={cn(
                    notoThai.className,
                    "py-[20px] font-notoThai text-[15px]"
                )}>
                    {t("readyToDiscover")}
                </h1>
                
                <Link href='/1-1' className="h-[60px] w-full">
                    <YellowButton text={t("startJourney")} />
                </Link>
                
                <h1 className={cn(
                    anuphan.className,
                    "py-[20px] font-notoThai text-[12px]"
                )}>
                    {t("soundOn")}
                </h1>
            </motion.div>
        </div>
    );
}