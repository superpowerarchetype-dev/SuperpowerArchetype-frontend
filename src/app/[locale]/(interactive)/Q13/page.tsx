"use client";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
    const t = useTranslations("Q13");
    
    // แปลง options เป็น function เพื่อใช้ t() ได้ หรือ map ทีหลัง
    // ในที่นี้เราจะดึง key จาก translation แทน
    const optionKeys = [
        "the_architect", "the_echo", "the_flame", 
        "the_guardian", "the_seeder", "the_spark"
    ];

    const duration = 0.8;
    const [tieBreakDetail, setTieBreakDetail] = useState<string[]>([]);

    useEffect(() => {
      const tieBreakArchetypes = optionKeys.filter((name) => {
        const val = localStorage.getItem(name);
        return val !== null && val === "true";
      });
      setTieBreakDetail(tieBreakArchetypes);
    }, []); 
    
    const [holdStates, setHoldStates] = useState<Record<string, boolean>>({});
    const handleHold = (id: string, isHold: boolean) => {
        setHoldStates((prev) => ({ ...prev, [id]: isHold }));
        localStorage.setItem("win_archetype", id);
    };

    const router = useRouter();
    const handleAnswer = (input:string) => {
        localStorage.setItem("win_archetype", input);
        router.push("/8-1");
    }

    return (
    <div className={cn("relative flex flex-col justify-between bg-white items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]", notoThai.className)}>
      <LangToggle color='black' /> 
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }} className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15">
        <Link href="Q12" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="#0A0A0A" />
          <h1 className="text-[15px] ml-1">{t("back")}</h1>
        </Link>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration, delay: 1 }} className="flex flex-col h-screen w-full justify-start pt-[88px] text-center flex-1 z-10">
        <h1 className="text-[17px] font-semibold">{t("reflection")}</h1>
        <h1 className="text-[17px] font-semibold ">{t("trueSelf")}</h1>
        <h1 className="text-[17px] font-semibold ">{t("whatHero")}</h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration, delay: 1 }} className="flex flex-col pt-[40px] items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]">
          {tieBreakDetail.map((id) => {
            const isHold = holdStates[id] ?? false;
            return (
              <div key={id} className={cn(`flex flex-col items-center w-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px] ${isHold ? "bg-[#D1D1D1] border-b-2" : "bg-white border-b-4"}`, anuphan.className)}>
                <button className="flex flex-col items-center justify-center w-full text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                  onMouseDown={() => handleHold(id, true)} onMouseUp={() => handleHold(id, false)} onMouseLeave={() => handleHold(id, false)} onTouchStart={() => handleHold(id, true)} onTouchEnd={() => handleHold(id, false)}
                  onClick={() => handleAnswer(id)}>
                  {/* ใช้ t.rich เพื่อรองรับบรรทัดใหม่หรือ styling ถ้ามี */}
                  <h1>{t(`${id}.line1`)}</h1>
                  <h1>{t(`${id}.line2`)}</h1>
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}