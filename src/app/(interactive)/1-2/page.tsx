'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MoveRight } from "lucide-react";
import {motion} from "framer-motion";
import YellowButton from "~/component/yellow_button";
import { cn } from "~/lib/utils";
import { anuphan,notoThai } from "~/component/font";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // client router
export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
          router.push("/1-3"); // redirect ไป page /0-1
        }, 2000);
    
        return () => clearTimeout(timer);
      }, [router]);    return (
        <div className={cn(
            notoThai.className,
            "bg-[#5D5D5D] flex flex-col min-h-screen px-[20px] text-white items-center font-anuphan -z-10"
        )
        }>
            {/* <div className="absolute flex h-[48px] w-full items-center">
                <Link 
                    href="/0-1"
                    className="flex flex-row text-white "
                >
                    <ChevronLeft color="white"/>
                    <h1 className="text-white ">ย้อนกลับ</h1>
                </Link>
            </div> */}
          
            <motion.div
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //     duration: duration,
                //     delay: 1,
                // }} 
                className="flex flex-col items-left pt-[68px] pb-[20px] w-full z-10 font-semibold">
                
                <h1 className="text-[22px]">ก่อนความเงียบจะเข้าปกคลุม... </h1>
                <h1 className="text-[22px]">เมืองนี้เคยมี "เสียง"</h1>
            </motion.div>
            <div className="w-full flex-grow">
                <motion.div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{
                    //     duration: duration,
                    //     delay: 1,
                    // }}
                    className=" w-full"
                >
                    <Image
                        src="/img/scene1-1.webp"
                        width={390}
                        height={800}
                        alt="logo"
                        className="self-center w-full"
                    ></Image>
                </motion.div>
                <motion.div 
                        // initial={{ opacity: 0 }}
                        // animate={{ opacity: 1 }}
                        // transition={{
                        //     duration: duration,
                        //     delay: 2,
                        // }}
                    className="flex flex-col items-left pt-[20px] text-[18px] font-light z-10 w-full">
            

                        <h1>เมืองนี้เคย วุ่นวาย, โต้เถียง, และ มีชีวิตชีวา </h1>
                        <h1>มันอาจจะน่าเหนื่อยหน่ายในบางวัน</h1>
                
                </motion.div>
            </div>
            <motion.div 
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //     duration: duration,
                //     delay: 1.5,
                // }}
                className="flex flex-col py-[20px] h-[88px] w-full items-center z-10">
                
                {/* <Link href='/1-1' className="h-[48px] w-full">
                    <YellowButton text="เริ่มการเดินทาง"></YellowButton>
                </Link> */}
            </motion.div>
            
            
            
        </div>
    )
}