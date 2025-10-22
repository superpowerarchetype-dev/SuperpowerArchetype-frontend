"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import { toJpeg } from "html-to-image";
import YellowButton from "~/component/yellow_button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Page() {
  
    const [result,setResult] = useState<String>("")
    

    useEffect(()=> {
        setResult(localStorage.getItem("win_archetype") ?? "")
        console.log(result)
        },[result])

    const router = useRouter()
    useEffect(() => {
        console.log("redirect effect run with result:", result);
        if (!result) return;
      
        const timer = setTimeout(() => {
          console.log("redirecting to:", `/endcard-${result}`);
          router.push(`/endcard-${result}`);
        }, 3000);
      
        return () => clearTimeout(timer);
      }, [result, router]);

    
    return (
        
        <motion.div 
            
            className={cn(notoThai.className, 
            "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#FFFFFF] overflow-visible overflow-y-scroll overflow-x-hidden")}
            >
            <div
                className="flex flex-col flex-1 min-h-screen w-full text-[#000000] bg-[#FFFFFF] px-[20px]"
            
            >
                
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0 }}
                className="-top-[3%] z-10 flex h-[60px] w-full justify-center items-center">
                {/* <Image
                    src="/img/logo_transparent.webp"
                    width={100}
                    height={120}
                    alt="logo amnesty"
                    className="absolute object-cover"
                ></Image> */}
            </motion.div>
            
            <motion.div
                className="flex flex-col items-center text-[18px] font-semibold  pb-[20px]"
            >
                <h1>คุณคือ...</h1>
            </motion.div>
        
            </div>
           
           
          
                

        </motion.div>
    )
}