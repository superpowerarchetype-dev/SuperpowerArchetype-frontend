'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
    const options = [
        {
          id: "the_architect",
          lines: ["คนที่ไม่ได้สู้ด้วยอารมณ์", "แต่เปลี่ยนโลกด้วยแผนที่ไม่มีใครมองเห็น"],
        },
        {
          id: "the_echo",
          lines: ["คนที่กล้าพูดความรู้สึก", "และความจริงที่คนอื่นเงียบใส่"],
        },
        {
          id: "the_flame",
          lines: ["คนที่กล้าจุดไฟแรก", "แม้จะต้องเผชิญหน้าความกลัวคนเดียว"],
        },
        {
            id: "the_guardian",
            lines: ["คนที่ยอมลำบากเพื่อให้คนอื่นรอด", "โดยไม่เคยเรียกร้องคำขอบคุณ"],
          },
        {
            id: "the_seeder",
            lines: ["คนที่วางรากให้อนาคต", "แม้จะรู้ว่าตัวเองอาจไม่ได้อยู่ดูผลลัพธ์"],
          },
          {
            id: "the_spark",
            lines: ["คนที่เปลี่ยนบรรยากาศทั้งเมืองด้วยพลังชีวิตแบบ", "ไม่บีบคั้นใคร"],
          },
    ];

    const duration = 0.8;
    
    const [tieBreakDetail, setTieBreakDetail] = useState<typeof options>([]);

    useEffect(() => {
      const archetypes_name = [
        "the_architect",
        "the_echo",
        "the_flame",
        "the_guardian",
        "the_seeder",
        "the_spark",
      ];
  
      const tieBreakArchetypes = archetypes_name.filter((name) => {
        const val = localStorage.getItem(name);
        return val !== null && val === "true";
      });
  
      const filtered = options.filter((opt) =>
        tieBreakArchetypes.includes(opt.id)
      );
  
      setTieBreakDetail(filtered);
    }, []); 
    
    const [holdStates, setHoldStates] = useState<Record<string, boolean>>({});
    const handleHold = (id: string, isHold: boolean) => {
        setHoldStates((prev) => ({ ...prev, [id]: isHold }));
        localStorage.setItem("win_archetype",id)
    };

  

  const router = useRouter()


  const handleAnswer = (input:string) => {
    localStorage.setItem("win_archetype",input)
    router.push("/8-1")
  }

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between bg-white items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]"
      ,notoThai.className)}
    >
      {/* ปุ่มย้อนกลับ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15"
      >
        <Link href="Q12" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="#0A0A0A" />
          <h1 className="text-[15px] ml-1">ย้อนกลับ</h1>
        </Link>
      </motion.div>

      {/* ภาพพื้นหลัง */}
      

      {/* เนื้อหา */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: 1 }}
        className="flex flex-col h-screen w-full justify-start pt-[88px] text-center flex-1 z-10"
      >
        <h1 className="text-[17px] font-semibold">ภาพฝันนั้นสะท้อน "แก่นแท้"</h1>
        <h1 className="text-[17px] font-semibold ">ของความเป็นคุณอย่างแท้จริง แล้วคุณเองหละ</h1>
        <h1 className="text-[17px] font-semibold ">อยากถูกจดจำว่าเป็นฮีโร่แบบไหน?</h1>

        {/* ✅ วน loop แสดงปุ่มจาก options */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay: 1 }}
          className="flex flex-col pt-[40px] items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]"
        >
          {tieBreakDetail.map((opt) => {
            const isHold = holdStates[opt.id] ?? false;
            return (
              <div
                key={opt.id}
                className={cn(
                  `flex flex-col items-center w-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
                  ${isHold ? "bg-[#D1D1D1] border-b-2" : "bg-white border-b-4"}`,anuphan.className
                )}
              >
                <button
                  className="flex flex-col items-center justify-center w-full text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                  onMouseDown={() => handleHold(opt.id, true)}
                  onMouseUp={() => handleHold(opt.id, false)}
                  onMouseLeave={() => handleHold(opt.id, false)}
                  onTouchStart={() => handleHold(opt.id, true)}
                  onTouchEnd={() => handleHold(opt.id, false)}
                  onClick={() => handleAnswer(opt.id)}
                >
                  {opt.lines.map((line, i) => (
                    <h1 key={i}>{line}</h1>
                  ))}
                </button>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}
