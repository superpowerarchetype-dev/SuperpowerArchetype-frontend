"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "~/lib/navigation";
import { notoThai } from "~/component/font";
import { cn } from "~/lib/utils";
import { ChevronLeft } from "lucide-react";
import { anuphan } from "~/component/font";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("5-3");
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/Q11"); 
        }, 4000);
        return () => clearTimeout(timer);
      }, [router]);

  return (
    <div className={cn(notoThai.className, "flex flex-col min-h-screen w-full  text-white p")}>
        <LangToggle color='black' /> 
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1, delay: 0 }} className="flex flex-col min-h-screen flex-glow">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0 }} className="absolute z-100 top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
                <Link href="/5-2" className="flex flex-row items-center text-[#0A0A0A]">
                    <ChevronLeft color="#0A0A0A" />
                    <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
                </Link>
            </motion.div>
            
            {/* Layer 1 */}
            <motion.div className="absolute top-0 z-10 h-screen flex-1 w-screen overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{delay:0, duration: 0.4, ease: "easeInOut" }} className="absolute top-0 left-0 h-full ">
                    <div className="min-w-[500px] h-screen ">
                        <Image src="/img/scene5-3-1.webp" alt="Scrolling Scene" fill className="object-cover" />
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Layer 2 */}
            <motion.div className="absolute top-0 z-20 h-screen flex-1 w-screen overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{delay:1, duration: 0.4, ease: "easeInOut" }} className="absolute top-0 left-0 h-full ">
                    <div className="min-w-[500px] h-screen ">
                        <Image src="/img/scene5-3-2.webp" alt="Scrolling Scene" fill className="object-cover" />
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Layer 3 */}
            <motion.div className="absolute top-0 z-30 h-screen flex-1 w-screen overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{delay:2, duration: 0.4, ease: "easeInOut" }} className="absolute top-0 left-0 h-full ">
                    <div className="min-w-[500px] h-screen ">
                        <Image src="/img/scene5-3-3.webp" alt="Scrolling Scene" fill className="object-cover" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Layer 4 */}
            <motion.div className="absolute top-0 z-40 h-screen flex-1 w-screen overflow-hidden">
                <motion.div initial={{ opacity: 0 }} animate={{opacity: 1 }} transition={{delay:3, duration: 0.4, ease: "easeInOut" }} className="absolute top-0 left-0 h-full ">
                    <div className="min-w-[500px] h-screen ">
                        <Image src="/img/scene5-3-4.webp" alt="Scrolling Scene" fill className="object-cover" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    </div>
  )
}