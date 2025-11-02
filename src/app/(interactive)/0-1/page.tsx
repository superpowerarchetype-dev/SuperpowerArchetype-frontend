'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MoveRight } from "lucide-react";
import {motion} from "framer-motion";
import YellowButton from "~/component/yellow_button";
import { cn } from "~/lib/utils";
import { anuphan,notoThai } from "~/component/font";

export default function Page() {
    const duration = 0.3

    return (
        <div className={cn(
            anuphan.className,
            "bg-black flex flex-col flex-1 h-screen px-[20px] text-white items-center font-anuphan -z-10"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: duration,
                    delay: 1.5,
                
            }}
            className="absolute h-screen"
            >
                <Image
                    src="/img/BG_Welcome.webp"
                    alt="welcome bg"
                    width={450}
                    height={720}
                    className="h-full "
                >
                </Image>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: duration,
                    delay: 1.5,
            }}
                className="z-10"
            >
            
            <div className="flex flex-col items-center pt-[68px] pb-[20px] w-full z-10">
                <Image
                    src="/img/amnesty_logo.webp"
                    width={72}
                    height={40}
                    alt="logo amnesty"
                    className="self-center "
                ></Image>
                <Image
                    src="/img/amnestyX.webp"
                    width={102}
                    height={48}
                    alt="logo amnesty x artist"
                    className="self-center "
                ></Image>
                <Image
                    src="/img/what_is_your.webp"
                    width={200}
                    height={48}
                    alt="logo amnesty x artist"
                    className="self-center "
                ></Image>

            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: duration,
                    delay: 0.5,
                }}
                className="flex flex-col flex-1 z-10 justify-center"
            >
                <Image
                    src="/img/Logo.webp"
                    width={390}
                    height={400}
                    alt="logo"
                    className="self-center w-full"
                ></Image>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: duration,
                    delay: 1.5,
                }}
                className="flex flex-col pt-[12%] items-center text-[14px] font-light z-10 font-anuphan">
                <h1 className="font-anuphan">ในทุกการเคลื่อนไหว มีฮีโร่ที่ซ่อนอยู่</h1>
                <h1 className="font-anuphan">บางคนคือไฟที่ลุกโชนท้าทายอำนาจ</h1>
                <h1 className="font-anuphan">บางคนคือเสียงสะท้อนที่ขยายความจริง</h1>
                <h1 className="font-anuphan">บางคนคือผู้วางแผน ผู้ปกป้อง ผู้ดูแล</h1>

                <h1 className="pt-[10%] font-anuphan">ทุกพลังมีความหมาย</h1>
                <h1 className="font-anuphan">และทุกพลังคือส่วนหนึ่งของการสร้างโลกที่ดีกว่า</h1>
            
            </motion.div>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: duration,
                        delay: 1.5,
                    }}
                    className="flex flex-col pt-[20%] pb-[20px] w-full items-center z-10">
                    <h1 className={cn(
                        notoThai.className,
                        "py-[20px] font-notoThai"
                    )}
                    >พร้อมหรือยังที่จะค้นพบ ซูเปอร์พาวเวอร์ในตัวคุณ?</h1>
                    <Link href='/1-1' className="h-[60px] w-full">
                        <YellowButton text="เริ่มการเดินทาง"></YellowButton>
                    </Link>
                </motion.div>
            
            
            
        </div>
    )
}