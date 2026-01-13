"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "~/lib/navigation";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import YellowButton from "~/component/yellow_button";
import { useEffect, useRef, useState } from "react";
import Ranking from "~/component/ranking";
import { useLocale, useTranslations } from "next-intl";
import LangToggle from "~/component/lang_toggle";

export default function Page() {
    const locale = useLocale();
    const t = useTranslations("endcard-the_seeder");
    
    // ... (State & Logic เดิม) ...
    const [first,setFirst] = useState<string>("")
    const [second,setSecond] = useState<string>("")
    const [third,setThird] = useState<string>("")
    const [theFlameScore,setTheFlameScore] = useState<number>()
    const [theGuardianScore,setTheGuardianScore] = useState<number>()
    const [theSeederScore,setTheSeederScore] = useState<number>()
    const [theSparkScore,setTheSparkScore] = useState<number>()
    const [theEchoScore,setTheEchoScore] = useState<number>()
    const [theArchitectScore,setTheArchitectScore] = useState<number>()

    useEffect(()=> {
        setFirst(localStorage.getItem("win_archetype") ?? "")
    },[first])

    useEffect(() => {
        const storedFlame = Number(localStorage.getItem("the_flame_score")) || 0;
        const storedGuardian = Number(localStorage.getItem("the_guardian_score")) || 0;
        const storedSeeder = Number(localStorage.getItem("the_seeder_score")) || 0;
        const storedSpark = Number(localStorage.getItem("the_spark_score")) || 0;
        const storedEcho = Number(localStorage.getItem("the_echo_score")) || 0;
        const storedArchitect = Number(localStorage.getItem("the_architect_score")) || 0;
        setTheFlameScore(storedFlame);
        setTheGuardianScore(storedGuardian);
        setTheSeederScore(storedSeeder);
        setTheSparkScore(storedSpark);
        setTheEchoScore(storedEcho);
        setTheArchitectScore(storedArchitect);
    }, []); 

    useEffect(() => {
        const scores = [
            { name: "the_flame", score: theFlameScore ?? 0 },
            { name: "the_guardian", score: theGuardianScore ?? 0 },
            { name: "the_seeder", score: theSeederScore?? 0 },
            { name: "the_spark", score: theSparkScore?? 0 },
            { name: "the_echo", score: theEchoScore?? 0 },
            { name: "the_architect", score: theArchitectScore?? 0 },
        ];
        const filtered = scores.filter(item => item.name.toLowerCase() !== first.toLowerCase());
        const sorted = filtered.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
        const top2 = sorted.slice(0, 2);
        setSecond(top2[0]?.name ?? "");
        setThird(top2[1]?.name ?? "");
    }, [theFlameScore, theGuardianScore, theSeederScore, theSparkScore, theEchoScore, theArchitectScore, first]);

    const exportedRef = useRef<HTMLImageElement | null>(null);
    const convertImage = async (element: HTMLElement) => {
        const htmlToImage = await import("html-to-image");
        let dataUrl = "";
        const minDataLength = 150000;
        const maxAttempts = 20;
        for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
          dataUrl = await htmlToImage.toJpeg(element, { quality: 0.95 });
        }
        return dataUrl;
    };
    const shareImage = async () => {
        try {
            const response = await fetch(`/img/sharable_the_seeder_${locale}.webp`);
            const blob = await response.blob();
            const file = new File([blob], "sharable_the_seeder.webp", { type: blob.type });
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: "Activerse",
                    text: t("sharePrompt"), 
                    files: [file]
                });
            } else {
                console.log("Sharing not supported on this browser/device");
                alert("อุปกรณ์นี้ไม่รองรับการแชร์รูปภาพโดยตรง");
            }
        } catch (err) { 
            console.error("Error sharing:", err); 
        }
    };

    const reportRef = useRef<HTMLDivElement | null>(null);

    return (
        <motion.div className={cn(notoThai.className, "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#F0F0F0] overflow-visible overflow-y-scroll overflow-x-hidden")}>
            <LangToggle color="white" />
            <div className="flex flex-col flex-1 pb-[20px] w-full text-[#FFFFFF] bg-[#2C2C2C] px-[20px]">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="-top-[3%] pt-[80px] z-10 flex h-[60px] w-full justify-center items-center">
                    <Image src="/img/logo_transparent.webp" width={300} height={330} alt="logo amnesty" className="object-cover" />
                </motion.div>
                
                <motion.div className="flex flex-col items-center text-[18px] font-semibold pt-[50px]">
                    <h1 className="text-[15px]">{t("title")}</h1>
                </motion.div>
                <div className="flex flex-col w-full z-30 px-[20px] pb-[30px] items-center content-center">
                    <h1 className="text-[28px] font-semibold pt-[20px] text-stroke-4-black">{t("characterName")}</h1>
                    <Image src="/img/character_the_seeder.webp" height={200} width={200} alt="character" 
                    className="drop-shadow-[0_0_40px_rgba(200,255,000,0.4)] "/>
                    <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>{t("quote")}</h1>
                </div>

                <motion.div className="flex flex-row h-[200px] w-full bg-white border-[3px] border-black rounded-[4px]">
                    <motion.div className="flex flex-col w-[120px] items-center">
                        <Image src={`/img/sharable_the_seeder_${locale}.webp`} height={142} width={100} alt="end card" ref={exportedRef} id="sharable_result" 
                        className="absolute object-cover border-[1px] border-black my-[10px] " />
                    </motion.div>
                    <motion.div className="flex flex-col flex-1 py-[20px] px-[10px] h-full w-full content-center z-20 gap-y-[5px]">
                        <h1 className="font-semibold text-[#0A0A0A] text-[20px] mt-[10px] whitespace-pre-line">{t("shareVoice")}</h1>
                        <h1 className="text-[#0A0A0A] text-[17px] whitespace-pre-line">{t("sharePrompt")}</h1>
                        <div onClick={shareImage} className="mt-[15px] h-[48px] font-semibold">
                            <YellowButtonSemibold text={t("shareBtn")} />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex flex-col items-center pt-[20px] pb-[10px]">
                    <h1 className="text-[18px]">{t("viewReports")}</h1>
                    <div className="animate-bounce pt-[20px]">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_1269_862)">
                            <path d="M19.9579 11.6657C20.6583 11.1269 21.6629 11.2575 22.2017 11.9579C22.7403 12.6582 22.6096 13.6628 21.9095 14.2017L13.2423 20.8688C12.6672 21.311 11.8657 21.3112 11.2907 20.8688L2.62509 14.2017C1.92478 13.663 1.79281 12.6583 2.33134 11.9579C2.87009 11.2575 3.87469 11.127 4.57509 11.6657L12.2657 17.5798L19.9579 11.6657ZM19.9579 2.33134C20.6583 1.79281 21.663 1.92478 22.2017 2.62509C22.7401 3.32546 22.6097 4.33015 21.9095 4.86884L13.2423 11.5345C12.6672 11.9769 11.8658 11.9769 11.2907 11.5345L2.62509 4.86884C1.92489 4.33022 1.79311 3.32547 2.33134 2.62509C2.86996 1.92489 3.87471 1.79311 4.57509 2.33134L12.2657 8.24697L19.9579 2.33134Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_1269_862" x="0" y="0" width="24.5337" height="23.2007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1269_862"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1269_862" result="shape"/>
                            </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center bg-[#F0F0F0] px-[20px] pb-[30px]">
                <div className="w-full flex flex-col items-center bg-[#FFFFFF] border-[2px] border-[#0A0A0A] mt-[40px] my-[10px] rounded-[5px]">
                    <h1 className="text-[16px] w-full py-[10px] mb-[20px] font-semibold bg-[#000000] text-white text-center">{t("rankingTitle")}</h1>
                    <Ranking first={first} second={second} third={third} locale={locale}/>
                </div>
            </div>

            <motion.div ref={reportRef} className="flex flex-col min-h-screen w-full overflow-y-scroll z-30 px-[20px] pb-[30px] items-center">
                
                {/* --- Bilingual Content (ใช้ t()) --- */}
                
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("identity.title")}</h1>
                    <div className="px-[20px] bg-white">
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">{t("identity.descTitle")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                            {t("identity.desc")}
                        </div>
                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">{t("identity.questionTitle")}</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">{t("identity.question")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                            {t("identity.questionDesc")}
                        </div>
                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">{t("identity.idealWorldTitle")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                            {t("identity.idealWorldDesc")}
                        </div>
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("element.title")}</h1>
                    <div className="px-[20px] bg-white">
                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold text-[#0A0A0A] text-left align-middle">{t("element.name")}</h1>
                            <Image src="/img/element_the_seeder.webp" width={20} height={20} alt="element" className="object-contain" />
                        </div>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                            {t("element.desc")}
                        </div>
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <div className="border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("superpower.title")}</h1>
                        <div className="px-[20px]">
                            <div className="flex flex-col gap-x-[5px] pt-[20px]">
                                <h1 className="text-[16px] font-medium text-[#0A0A0A] text-left align-middle">{t("superpower.subTitle")}</h1>
                                <Image src="/img/superpower_the_seeder.webp" width={94} height={120} alt="superpower" className="object-contain" />
                            </div>
                            <h1 className="text-[17px] font-semibold text-[#0A0A0A] text-left align-middle">{t("superpower.name")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("superpower.desc")}
                            </div>
                        </div>
                    </div>

                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium text-[#0A0A0A] text-left align-middle">{t("strengths.title")}</h1>
                            <Image src="/img/strength_the_seeder.webp" width={120} height={120} alt="strength" className="object-contain" />
                        </div>
                        <div>
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>Cohesion</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("strengths.cohesionDesc")}
                            </div>
                            <h1 className={cn(rubik.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>{t("strengths.example")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("strengths.cohesionEx")}
                            </div>
                            
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>{t("strengths.visionTitle")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("strengths.visionDesc")}
                            </div>
                            
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>{t("strengths.unityTitle")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("strengths.unityDesc")}
                            </div>
                        </div>
                    </div>

                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium text-[#0A0A0A] text-left align-middle">{t("growth.title")}</h1>
                            <Image src="/img/growth_edge_the_seeder.webp" width={130} height={120} alt="growth" className="object-contain" />
                        </div>
                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>{t("growth.weaknessTitle")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("growth.weaknessDesc")}
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle font-semibold")}>{t("growth.example")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("growth.weaknessEx")}
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>{t("growth.adviceTitle")}</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("growth.adviceDesc")}
                            </div>
                        </div>
                    </div>

                    <div className="px-[20px] bg-white">
                         <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A] align-middle">{t("skills.title")}</h1>
                            { locale === 'th' &&
                                <div className="flex items-center justify-center w-full h-[350px]">
                                    <Image src={`/img/skill_graph_the_seeder_${locale}.webp`} width={309} height={309} alt="skill" className="object-cover mt-[40px]" /> 
                                </div>
                            }
                            { locale === 'en' &&
                                <div className="flex items-center justify-center w-full h-[350px]">
                                    <Image src={`/img/skill_graph_the_seeder_${locale}.webp`} width={309} height={309} alt="skill" className="object-cover " /> 
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("alliance.title")}</h1>
                    <div className="px-[20px] border-b-[2px] border-[#0A0A0A] bg-white">
                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium text-[#0A0A0A] text-left align-middle">{t("alliance.idealTitle")}</h1>
                        </div>
                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Guardian</h1>
                            <Image src="/img/strength_the_guardian.webp" width={100} height={120} alt="character" />
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("alliance.guardianDesc")}
                            </div>
                        </div>
                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Echo</h1>
                            <Image src="/img/strength_the_echo.webp" width={100} height={120} alt="character" />
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("alliance.echoDesc")}
                            </div>
                        </div>
                    </div>

                    <div className="px-[20px] bg-white">
                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium text-[#0A0A0A] text-left align-middle">{t("alliance.cautionTitle")}</h1>
                        </div>
                         <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Flame</h1>
                            <Image src="/img/strength_the_flame.webp" width={100} height={120} alt="character" className="py-[5px]" />
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("alliance.flameDesc")}
                            </div>
                        </div>
                         <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Spark</h1>
                            <Image src="/img/strength_the_spark.webp" width={100} height={120} alt="character" />
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                                {t("alliance.sparkDesc")}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("environment.title")}</h1>
                    <div className="px-[20px]">
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">{t("environment.shineTitle")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                           {t("environment.shineDesc")}
                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">{t("environment.questionTitle")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                             {t("environment.questionDesc")}
                        </div>
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">{t("role.title")}</h1>
                    <div className="px-[20px]">
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">{t("role.name")}</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left whitespace-pre-line")}>
                           {t("role.desc")}
                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">{t("role.commonTitle")}</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>{t("role.list.0")}</li>
                            <li>{t("role.list.1")}</li>
                            <li>{t("role.list.2")}</li>
                            <li>{t("role.list.3")}</li>
                            <li>{t("role.list.4")}</li>
                            <li>{t("role.list.5")}</li>
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* --- Hardcoded Thai Content --- */}
            
            {/* Donation Overlay */}
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image src="/img/donate_the_seeder.webp" alt="donate" fill className="object-cover" priority />
                </div>
                <div className="absolute w-full h-screen bg-[black] opacity-[75%]" />
                <div className={cn(anuphan.className,"flex flex-col items-center px-[20px] w-full justify-center text-white text-[17px] font-semobold z-30 gap-y-[20px]")}>
                    <Image src="/img/amnesty_logo_circle.webp" width={50} height={50} alt="amnesty_logo" />
                    <div className="text-center whitespace-pre-line">
                        <h1>ร่วมสร้างการเปลี่ยนแปลงของสังคม</h1>
                        <h1>ด้วยการบริจาคเพื่อส่งเสริม</h1>
                        <h1>สิทธิมนุษยชนศึกษา</h1>
                    </div>
                    <Link className="w-full px-[30px] pt-[10px]" href="https://act.amnesty.or.th/page/133465/donate/1">
                        <YellowButtonSemibold text="บริจาคเลย" />
                    </Link>
                </div>
            </motion.div>

            {/* Carousel */}
            <motion.div 
                className="relative flex flex-col flex-1 text-[#0A0A0A] w-full bg-white py-[20px] px-[20px] min-h-[450px]"
                >
                <h1 className={cn(anuphan.className, "text-[14px] pt-[20px]")}>เพิ่มเติมจาก</h1>
                <h1 className={cn(anuphan.className, "text-[15px] font-medium pt-[10px]")}>
                    แอมเนสตี้ อินเตอร์เนชั่นแนล ประเทศไทย
                </h1>

                {/* ✅ scroll container */}
                <div className="flex flex-row flex-1 overflow-x-auto scroll-smooth snap-x snap-mandatory pt-[20px] gap-[16px] pb-[20px] 
                -mx-[20px] "
                >
                    {/* Card 1 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center pl-[20px]">
                    <Image
                        src="/img/donate_the_flame.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                        <div
                            className={cn(
                            anuphan.className,
                            "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                            )}
                        >
                            <h1>ร่วมสร้างการเปลี่ยนแปลงของสังคม</h1>
                            <h1>ด้วยการลงชื่อยุติการฆ่าล้างเผ่าพันธุ์</h1>
                            <h1>ในฉนวนกาซา ไปพร้อมกัน</h1>
                            <Link
                            className="w-[120px] z-30 pt-[10px]"
                            href="https://www.amnesty.or.th/petition/demand-a-ceasefire-by-all-parties-to-end-civilian-suffering/"
                            >
                            <YellowButton text="ลงชื่อเลย" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center">
                    <Image
                        src="/img/donate_the_guardian.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                    <div
                        className={cn(
                        anuphan.className,
                        "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                        )}
                    >
                        <h1>มาร่วมเป็นส่วนหนึ่ง</h1>
                        <h1>ของแอมเนสตี้ อินเตอร์เนชั่นแนล</h1>
                        <h1>และปกป้องสังคมไปพร้อมกัน</h1>
                        <Link
                        className="w-[120px] z-30 pt-[10px]"
                        href="https://www.amnesty.or.th/get-involved/%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3%e0%b8%aa%e0%b8%a1%e0%b8%b2%e0%b8%8a%e0%b8%b4%e0%b8%81/"
                        >
                        <YellowButton text="สมัครเลย" />
                        </Link>
                    </div>
                    </div>

                    {/* Card 3 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center">
                    <Image
                        src="/img/donate_the_seeder.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                    <div
                        className={cn(
                        anuphan.className,
                        "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                        )}
                    >
                        <h1>ร่วมสร้างการเปลี่ยนแปลงของสังคม</h1>
                        <h1>ด้วยการบริจาคเพื่อส่งเสริม</h1>
                        <h1>สิทธิมนุษยชนศึกษา</h1>
                        <Link
                        className="w-[120px] z-30 pt-[10px]"
                        href="https://act.amnesty.or.th/page/133465/donate/1?_gl=1*1nrzx4m*_gcl_au*MTAzMTU5MTgwMS4xNzU2ODcwMDYx*_ga*MjkzNzU5NTMwLjE3NTY4NzAwNjE.*_ga_W1X1E55L4S*czE3NTk3NDEwNTIkbzI2JGcxJHQxNzU5NzQzMjAzJGo1MiRsMCRoMA..*_ga_HXKEV50EK4*czE3NTk3NDEwNTIkbzI4JGcxJHQxNzU5NzQzMjAyJGo1MyRsMCRoMA"
                        >
                        <YellowButton text="บริจาคเลย" />
                        </Link>
                    </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center ">
                    <Image
                        src="/img/donate_the_spark.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                        <div
                            className={cn(
                            anuphan.className,
                            "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                            )}
                        >
                            <h1>ร่วมติดตามแอมเนสตี้ อินเตอร์เนชั่นแนล</h1>
                            <h1>และสร้างการเปลี่ยนแปลงของสังคมไปด้วยกัน</h1>
                            <Link
                            className="w-[120px] z-30 pt-[10px]"
                            href="https://linktr.ee/amnestythailand"
                            >
                            <YellowButton text="ติดตามเลย" />
                            </Link>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center ">
                    <Image
                        src="/img/donate_the_echo.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                        <div
                            className={cn(
                            anuphan.className,
                            "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                            )}
                        >
                            <h1>มาร่วมส่งต่อกำลังใจ</h1>
                            <h1>และเขียนจดหมายให้เพื่อนๆ ของเราในเรือนจำ</h1>
                            <Link
                            className="w-[120px] z-30 pt-[10px]"
                            href="https://freeratsadon.amnesty.or.th/list"
                            >
                            <YellowButton text="เขียนเลย" />
                            </Link>
                        </div>
                    </div>
                    
                    {/* card 6 */}
                    <div className="relative flex-shrink-0 h-[260px] w-[350px] snap-center ">
                    <Image
                        src="/img/donate_the_architect.webp"
                        fill
                        alt="donate"
                        className="object-cover "
                        priority
                    />
                    <div className="absolute inset-0 bg-black opacity-75 " />
                        <div
                            className={cn(
                            anuphan.className,
                            "absolute inset-0 flex flex-col justify-center px-[20px] py-[20px] text-left text-white z-30"
                            )}
                        >
                            <h1>ร่วมลงชื่อเพื่อกดดันการกำกับดูแล</h1>
                            <h1>การค้าอุปกรณ์ควบคุมฝูงชนโดยทันที</h1>
                            <Link
                            className="w-[120px] z-30 pt-[10px]"
                            href="https://www.amnesty.or.th/petition/petition-for-torture-free-trade-treaty/"
                            >
                            <YellowButton text="ลงชื่อเลย" />
                            </Link>
                        </div>
                    </div>

                    
                </div>
            </motion.div>

            {/* Credits Section */}
            <div className="flex flex-col min-h-screen w-full bg-[url(/img/scene1-8.webp)] relative">
                <div className="absolute opacity-[80%] min-h-screen w-full bg-black"></div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} 
                    className="-top-[3%] pt-[80px] z-10 flex h-[60px] w-full justify-center items-center">
                    <Image src="/img/logo_transparent.webp" width={300} height={330} alt="logo amnesty" className="object-cover" />
                </motion.div>
                <div className="flex flex-col flex-1 pt-[70px] relative z-20">
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Project Lead & Creative Director</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Johnparot Wongthes</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Project Manager</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Punnasit Chivapong</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Story & Narrative Development</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Johnparot Wongthes</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Punnasit Chivapong</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Archetype Development</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Johnparot Wongthes</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>UX & Gamification Design</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Punnasit Chivapong</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>UI Design</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Kanis Surajarus</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Web Development</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Veerawat Vanamonthon</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Illustration & Character Design</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Tanis Werasakwong (Sa-ard)</h1>
                    </div>
                    <div className="z-30 pb-[30px]">
                        <h1 className={cn(anuphan.className,"z-30 text-[12px] text-[#D1D1D1] text-center")}>Made Possible By</h1>
                        <h1 className={cn(anuphan.className,"z-30 text-[15px] text-[#FFFFFF] text-center")}>Amnesty International Thailand</h1>
                    </div>
                    <div className="z-30 flex flex-col items-center w-full absolute bottom-[10px] pb-[20px]">
                        <h1 className={cn(anuphan.className,"text-[14px] text-[#D1D1D1] text-center")}>© 2025 แอมเนสตี้ อินเตอร์เนชั่นแนล ประเทศไทย</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}