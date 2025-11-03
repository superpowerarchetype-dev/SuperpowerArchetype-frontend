'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useState } from "react";
import { useRouter } from "next/navigation";


function CalScore() {
    let the_flame = 0
    let the_guardian = 0
    let the_seeder = 0
    let the_echo = 0
    let the_spark = 0
    let the_architect = 0

    const Q1 = localStorage.getItem('Q1')
    if (Q1 === 'A') {
        the_flame += 1
    } else if (Q1 === 'B') {
        the_guardian += 1
    } else if (Q1 == 'C') {
        the_seeder += 1
    }

    const Q2 = localStorage.getItem('Q2')
    if (Q2 === 'A') {
        the_flame += 1
    } else if (Q2 === 'B') {
        the_echo += 1
    } else if (Q2 == 'C') {
        the_seeder += 1
    }

    const Q3 = localStorage.getItem('Q3')
    if (Q3 === 'A') {
        the_spark += 1
    } else if (Q3 === 'B') {
        the_architect += 1
    } else if (Q3 == 'C') {
        the_flame += 1
    }

    const Q4 = localStorage.getItem('Q4')
    if (Q4 === 'A') {
        the_guardian += 1
    } else if (Q4 === 'B') {
        the_flame += 1
    } else if (Q4 == 'C') {
        the_architect += 1
    }

    const Q5 = localStorage.getItem('Q5')
    if (Q5 === 'A') {
        the_echo += 1
    } else if (Q5 === 'B') {
        the_guardian += 1
    } else if (Q5 == 'C') {
        the_flame += 1
    }

    const Q6 = localStorage.getItem('Q6')
    if (Q6 === 'A') {
        the_spark += 1
    } else if (Q6 === 'B') {
        the_guardian += 1
    } else if (Q6 == 'C') {
        the_echo += 1
    }

    const Q7 = localStorage.getItem('Q7')
    if (Q7 === 'A') {
        the_echo += 1
    } else if (Q7 === 'B') {
        the_guardian += 1
    } else if (Q7 == 'C') {
        the_spark += 1
    }

    const Q8 = localStorage.getItem('Q8')
    if (Q8 === 'A') {
        the_architect += 1
    } else if (Q8 === 'B') {
        the_seeder += 1
    } else if (Q8 == 'C') {
        the_spark += 1
    }

    const Q9 = localStorage.getItem('Q9')
    if (Q9 === 'A') {
        the_seeder += 1
    } else if (Q9 === 'B') {
        the_architect += 1
    } else if (Q9 == 'C') {
        the_echo += 1
    }

    const Q10 = localStorage.getItem('Q10')
    if (Q10 === 'A') {
        the_flame += 1
    } else if (Q10 === 'B') {
        the_seeder += 1
    } else if (Q10 == 'C') {
        the_architect += 1
    }

    const Q11 = localStorage.getItem('Q11')
    if (Q11 === 'A') {
        the_guardian += 1
    } else if (Q11 === 'B') {
        the_spark += 1
    } else if (Q11 == 'C') {
        the_architect += 1
    }

    const Q12 = localStorage.getItem('Q12')
    if (Q12 === 'A') {
        the_seeder += 1
    } else if (Q12 === 'B') {
        the_echo += 1
    } else if (Q12 == 'C') {
        the_spark += 1
    }

    const archetypes = [the_architect,the_echo,the_flame,the_guardian,the_seeder,the_spark]
    const archetypes_name = ["the_architect","the_echo","the_flame","the_guardian","the_seeder","the_spark"]

    const max_score = Math.max(...archetypes)


    let win_archetypes = []
    for (let i = 0 ; i < 6 ; i++) {
        if (archetypes[i] == max_score) {
            localStorage.setItem(archetypes_name[i]!,"true")
            win_archetypes.push(archetypes_name[i])
        } else {
            localStorage.setItem(archetypes_name[i]!,"false")
        }
    }
    console.log(`score: ${archetypes_name} | ${archetypes}`)
    console.log(`win_archetypes: ${win_archetypes}`)
    return win_archetypes


}

export default function Page() {
  const duration = 0.8;
  const [isAHold, setIsAHold] = useState<boolean>(false);
  const [isBHold, setIsBHold] = useState<boolean>(false);
  const [isCHold, setIsCHold] = useState<boolean>(false);

  const router = useRouter()


  const handleAnswer = (input:string) => {
    localStorage.setItem("Q12",input)
    const win_archetypes = CalScore()
    if (win_archetypes.length == 1) {
        localStorage.setItem("win_archetype",win_archetypes[0]!)
        router.push("/8-1")
    } else {
        localStorage.setItem("win_archetype","unknown")
        router.push("/Q13")
    }
    

  }

  return (
    <div
      className={cn(
        notoThai.className,
        // ✅ ให้ bg ครอบเต็ม viewport ทั้งแนวตั้งแนวนอน
        "relative flex flex-col justify-between bg-[#FFFFFF] items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px] "
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px] z-15">
        <Link href="/72-2" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="#0A0A0A" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </motion.div>

    <motion.div 
        // initial={{filter: "blur(0px)"}}
        // animate={{ filter: "blur(3px)"}}
        // transition={{ duration: duration, delay: 1 }}
        className="absolute bottom-[30%] h-[50%] w-full z-5">
      <Image
        src="/img/Q12.webp"
        alt="scene"
        fill
        className="h-[70%] object-contain z-5"
        priority
      />
    </motion.div>
    <motion.div
       initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1 }}
      className="flex flex-col w-full justify-center pt-[88px]  text-center flex-1 z-10"
      >

        <h1 className="text-[17px] font-semibold">ในห้วงสุดท้าย</h1>
        <h1 className="text-[17px] font-semibold ">ภาพฝันแห่งอนาคตลอยขึ้นมาในใจ...</h1>
        <h1 className="text-[17px] font-semibold ">คุณเห็นอะไร?</h1>
      

      {/* ภาพตรงกลาง */}
      <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col justify-center items-center flex-1 w-full "
      >
        <div className="relative w-full max-w-md h-full ">
          {/* <Image
            src="/img/Q3.webp"
            alt="scene"
            fill
            className="object-contain "
            priority
          /> */}
        </div>
      </motion.div>

      {/* ข้อความ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration, delay: 1 }}
        className="flex flex-col items-center justify-center text-center py-[20px] text-[18px] font-light z-10 w-full gap-y-[20px]"
      >
        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isAHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsAHold(true)}
                onMouseUp={() => setIsAHold(false)}
                onMouseLeave={() => setIsAHold(false)}
                onTouchStart={() => setIsAHold(true)}   // mobile support
                onTouchEnd={() => setIsAHold(false)}    // mobile support
                onClick={() => handleAnswer("A")}
            >
                <h1>คุณเห็นเด็กๆ เติบโตมาในพื้นที่ปลอดภัย</h1>
                <h1>ที่คุณได้ร่วมสร้างรากฐานไว้</h1>
            </button>
        </div>

        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isBHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsBHold(true)}
                onMouseUp={() => setIsBHold(false)}
                onMouseLeave={() => setIsBHold(false)}
                onTouchStart={() => setIsBHold(true)}   // mobile support
                onTouchEnd={() => setIsBHold(false)}    // mobile support
                onClick={() => handleAnswer("B")}
            >
                <h1>คุณเห็นผู้คนที่เคยเจ็บปวด</h1>
                <h1>กำลังได้รับการเยียวยาด้วยความเข้าอกเข้าใจกัน</h1>
            </button>
        </div>

        <div
        className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
        ${isCHold ? 'bg-[#D1D1D1] border-b-2' : 'bg-white border-b-4'}`)}
        >
            <button
                className="flex flex-col items-center justify-center w-full h-full 
                text-black rounded-[4px] text-center py-[12px] px-[8px] text-[15px] font-medium"
                onMouseDown={() => setIsCHold(true)}
                onMouseUp={() => setIsCHold(false)}
                onMouseLeave={() => setIsCHold(false)}
                onTouchStart={() => setIsCHold(true)}   // mobile support
                onTouchEnd={() => setIsCHold(false)}    // mobile support
                onClick={() => handleAnswer("C")}
            >
                <h1>ถ้อยคำที่คุณเคยส่งออกไปกลายเป็นคำติดปาก</h1>
                <h1>หรือมุกตลกประจำเมือง และยังตราตรึงอยู่ในใจผู้คน</h1>
            </button>
        </div>
        
      </motion.div>
      </motion.div>

      {/* ปุ่มถัดไป */}
      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10"> */}
        {/* <Link href="/1-5" className="h-[48px] w-full">
          <WhiteButton text="ถัดไป" />
        </Link> */}
      {/* </motion.div> */}
    </div>
  );
}
