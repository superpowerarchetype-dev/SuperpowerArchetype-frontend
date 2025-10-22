"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import * as htmlToImage from "html-to-image";
import YellowButton from "~/component/yellow_button";



export default function Page() {
    const convertImage = async (element: HTMLElement) => {
        let dataUrl = "";
        const minDataLength = 150000;
        const maxAttempts = 20;
    
        for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
          dataUrl = await htmlToImage.toJpeg(element, { quality: 0.95 });
        }
    
        return dataUrl;
      };
  
    const shareImage = async () => {
        // const exportedWords = document.getElementById("exported");
        const exportedImage = document.getElementById("sharable_result");
        if (!exportedImage) return;
    
        const dataUrl = await convertImage(exportedImage);
    
        const dataBlob = await (await fetch(dataUrl)).blob();
        if (!dataBlob) return;
    
        const image = new File([dataBlob], "sharable_the_architect.png", {
            type: dataBlob.type,
            });
            const shareData: ShareData = {
            title: "Activerse",
            text: "คุณคือ...",
            files: [image],
            };
            try {
            void navigator.share(shareData);
            console.log("Shared successfully");
            } catch (err) {
            console.log("Error");
            }
      };
    return (
        
        <motion.div 
            
            className={cn(notoThai.className, 
            "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#F0F0F0] overflow-visible overflow-y-scroll overflow-x-hidden")}
            >
            <div
                className="flex flex-col flex-1 min-h-screen w-full text-[#FFFFFF] bg-[#2C2C2C] px-[20px]"
            
            >
                
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="-top-[3%] z-10 flex h-[60px] w-full justify-center items-center">
                <Image
                    src="/img/logo_transparent.webp"
                    width={100}
                    height={120}
                    alt="logo amnesty"
                    className="absolute object-cover"
                ></Image>
            </motion.div>
            
            <motion.div
                className="flex flex-col items-center text-[18px] font-semibold  pb-[20px]"
            >
                <h1>คุณคือ...</h1>
            </motion.div>
            <motion.div 
                className="flex flex-col flex-1 "
            >
                <motion.div
                    className="flex flex-col flex-1 items-center "
                >
                    <Image
                        src="/img/sharable_the_architect.webp"
                        height={1000}
                        width={400}
                        alt="end card"
                        id="sharable_result"
                        className="border-[2px]"
                    />

                </motion.div>
                <motion.div 
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1, delay: 6 }}
                    className="flex flex-col py-[20px] h-[88px] w-full items-center z-20">
                    
                        <div onClick={shareImage} className="h-[48px] w-full font-semiblod">
                            <YellowButtonSemibold text="บันทึกรูปและแชร์เลย!" />
                        </div>
                </motion.div>
            </motion.div>
            </div>
            <motion.div
                className="flex flex-col min-h-screen w-full overflow-y-scroll z-30 px-[20px] pb-[30px] items-center"
            >

                <h1 className="text-[16px] pt-[40px]">รายงานวิเคราะห์เชิงลึก</h1>
                <h1 className="text-[18px] font-semibold pt-[20px]">นักวางกลยุทธ์ – Architect</h1>
                <Image
                    src="/img/character_the_architect.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"Master the Mind. Master the Plan."</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px] bg-white">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือมันสมองของทีม คุณมองเห็นภาพรวม วิเคราะห์หา</h1>
                            <h1>รูปแบบ และวางแผนที่ซับซ้อนเพื่อสร้างการเปลี่ยนแปลง</h1>
                            <h1>เชิงระบบที่แท้จริง คุณไม่เชื่อในโชคหรือความบังเอิญ </h1>
                            <h1>แต่เชื่อในแผนการที่ผ่านการคิดมาอย่างดีที่สุด</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"อะไรคือระบบที่มีประสิทธิภาพที่สุด?"</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาจุดอ่อนในระบบปัจจุบันและออกแบบระบบใหม่ที่</h1>
                            <h1>ดีกว่าเสมอ</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>โลกที่ระบบต่างๆ มีความโปร่งใส มีประสิทธิภาพ</h1>
                            <h1>และรับใช้มวลมนุษยชาติอย่างแท้จริง ไม่ใช่ในทางกลับกัน</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">โลหะ</h1>
                            <Image
                                src="/img/element_the_architect.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือความชัดเจน แข็งแกร่ง และโครงสร้าง</h1>
                            <h1>ดุจดาบหรือโครงเหล็กที่กำหนดขอบเขตและทิศทาง</h1>

                        </div>
 
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <div className="border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <h1 className="py-[10px] bg-[#000000] text-white text-center">พลังวิเศษของคุณ (Superpower)</h1>
                        <div className="px-[20px] ">

                            <div className="flex flex-col gap-x-[5px] pt-[20px]">
                                <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พลังพิเศษ</h1>
                                <Image
                                    src="/img/superpower_the_architect.webp"
                                    width={184}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Blueprint Core (ตรรกะสมองกล)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>พลังจิตอัจฉริยะ ที่สามารถจำลองระบบที่ซับซ้อนและ</h1>
                                <h1>แก้ปัญหาได้แบบเรียลไทม์ ใช้สร้างพิมพ์เขียว วางแผน </h1>
                                <h1>และทำนายผลลัพธ์ของสถานการณ์ต่าง ๆ ได้อย่างแม่นยำ</h1>
                                <h1>พลังนี้ทำให้คุณมองเห็น "ตัวแปร" ทั้งหมดและ "เส้นทาง"</h1>
                                <h1>ที่ดีที่สุดที่คนอื่นมองไม่เห็น</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_architect.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Strategy</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คิดเชิงระบบและมองการณ์ไกล วางแผนและสร้าง</h1>
                                <h1>โครงสร้างที่ยั่งยืนได้อย่างยอดเยี่ยม</h1>
                            </div>
                            <h1 className={cn(rubik.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ในขณะที่คนอื่นกำลังถกเถียงกันว่าจะทำอะไรดี คุณคือ</h1>
                                <h1>คนที่สามารถร่างแผนปฏิบัติการ 5 ขั้นตอน</h1>
                                <h1>พร้อมแผนสำรอง A, B, และ C ได้ในเวลาอันสั้น</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>มีวิสัยทัศน์</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสามารถคาดการณ์ปัญหาและโอกาสในอนาคต</h1>
                                <h1>ทำให้ทีมเตรียมพร้อมรับมือได้ก่อนเสมอ</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>ยึดมั่นในตรรกะ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>การตัดสินใจของคุณมาจากข้อมูลและการวิเคราะห</h1>
                                <h1>ไม่ใช่อารมณ์ ทำให้แผนของคุณมีความน่าเชื่อถือ</h1>
                                <h1>และมีโอกาสสำเร็จสูง</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_architect.webp"
                                width={143}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>เสพติดความสมบูรณ์แบบมากจนเกินไป</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>การวิเคราะห์ที่มากเกินไปอาจทำให้คุณตัดสินใจลงมือทำช้า</h1>
                                <h1>หรือที่เรียกว่า "Analysis Paralysis"</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจจะใช้เวลาปรับแก้แผนนานเกินไปจนพลาด</h1>
                                <h1>"จังหวะ" ที่ดีที่สุดในการลงมือทำ</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>แผนที่ดีที่สุดคือแผนที่ได้เริ่มลงมือทำ พลังขับเคลื่อนของ </h1>
                                <h1>Flame สามารถเป็นแรงผลักดันที่ยอดเยี่ยมในการเริ่มต้น</h1>
                                <h1>โครงการ แม้แผนจะยังไม่สมบูรณ์ 100% ก็ตาม จงเชื่อมั่น</h1>
                                <h1>ในความสามารถในการปรับแผนระหว่างทางของคุณ</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="items-center w-full">
                                <Image
                                    src="/img/skill_graph_the_architect.webp"
                                    width={309}
                                    height={309}
                                    alt="superpower"
                                    className="object-cover w-full h-[350px] pt-[20px]"
                                />
                            </div>
                        </div>

                        
                    </div>

                    

                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พันธมิตรของคุณ (Alliance)</h1>
                    <div className="px-[20px] border-b-[2px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px] ">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พันธมิตรในอุดมคติ</h1>
                           
                        </div>

                        <div className="pt-[20px] ">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Guardian</h1>
                            <Image
                                src="/img/strength_the_guardian.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสร้างแผนที่ซับซ้อน Guardian คือผู้ที่ทำให้แผนนั้น</h1>
                                <h1>เกิดขึ้นจริงได้อย่างรอบคอบและปลอดภัย</h1>
                            </div>

                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>The Flame</h1>
                            <Image
                                src="/img/strength_the_flame.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณต้องการพลังขับเคลื่อนในการเริ่มต้นของ Flame </h1>
                                <h1>เพื่อเปลี่ยนแผนบนกระดาษให้กลายเป็นการกระทำ</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px] ">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดที่ต้องระวัง</h1>
                        
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Echo</h1>
                            <Image
                                src="/img/strength_the_echo.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจมองว่า Echo ใช้อารมณ์มากเกินไปและไม่เป็น</h1>
                                <h1>กลาง ในขณะที่ Echo อาจมองว่าคุณเย็นชาและมองข้าม</h1>
                                <h1>ปัจจัยด้านความเป็นมนุษย์</h1>
                            </div>

                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Spark</h1>
                            <Image
                                src="/img/strength_the_spark.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณต้องการความแม่นยำ แต่พลังงานของ Spark นั้นเน้น</h1>
                                <h1>การด้นสดและคาดเดายากในสายตาของคุณ คุณกังวล</h1>
                                <h1>อยู่ลึก ๆ ว่ามันอาจทำให้ทุกอย่างไม่เป็นไปตามแผน</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px] ">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การวางแผนกลยุทธ์, การออกแบบระบบใหม่,</h1>
                            <h1>การวิเคราะห์ข้อมูลและหาเทรนด์,</h1>
                            <h1>การบริหารโครงการที่ซับซ้อน, การเป็นที่ปรึกษา</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>ระบบที่ไม่มีประสิทธิภาพที่สุดที่คุณเห็นในชีวิตประจำวันคือ</h1>
                            <h1>อะไร และคุณจะเริ่มร่าง "พิมพ์เขียว" เพื่อแก้ไขมันใน</h1>
                            <h1>ก้าวแรกได้อย่างไร?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">นักวางกลยุทธ์</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มีบทบาทสำคัญในการวางแผนโครงสร้าง, กลยุทธ์,</h1>
                            <h1>และการมองการณ์ไกล</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• นักยุทธศาสตร์การรณรงค์ / ผู้วางแผนการสนับสนุน</li>
                            <li>• ที่ปรึกษาหรือนักวิเคราะห์นโยบาย</li>
                            <li>• ทนายความด้านการดำเนินคดีเชิงกลยุทธ์</li>
                            <li>• ผู้อำนวยการฝ่ายวิจัย</li>
                            <li>• หัวหน้าฝ่ายพัฒนาองค์กร</li>
                            <li>• นักวิจัยในคลังสมอง / นักทฤษฎีขบวนการเคลื่อนไหว</li>

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_architect.webp"
                    alt="donate"
                    fill
                    className="absolute left-[50%] object-cover"
                    priority
                    />
                </div>
                <div className="absolute w-full h-screen bg-[black] opacity-[75%]">
                    
                </div>
                <div className={cn(anuphan.className,"flex flex-col items-center px-[20px] w-full justify-center text-white text-[17px] font-semobold z-30 gap-y-[20px]")}>
                    <Image
                        src="/img/amnesty_logo_circle.webp"
                        width={50}
                        height={50}
                        alt="amnesty_logo"
                    />
                    <div className="text-center">
                        <h1>ร่วมลงชื่อเพื่อกดดันการกำกับดูแล</h1>
                        <h1>การค้าอุปกรณ์ควบคุมฝูงชนโดยทันท</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="https://www.amnesty.or.th/petition/petition-for-torture-free-trade-treaty/">
                        <YellowButtonSemibold text="ลงชื่อเลย"></YellowButtonSemibold>
                    </Link>
                </div>
                
            </motion.div>
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
                <h1 className={cn(anuphan.className,"z-30 text-[14px] text-[#5D5D5D] text-center")}>© 2025 แอมเนสตี้ อินเตอร์เนชั่นแนล ประเทศไทย</h1>

                
                </motion.div>
                

        </motion.div>
    )
}