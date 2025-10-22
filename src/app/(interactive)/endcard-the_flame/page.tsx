"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import { toJpeg } from "html-to-image";
import YellowButton from "~/component/yellow_button";



export default function Page() {
    const convertImage = async (element: HTMLElement) => {
        let dataUrl = "";
        const minDataLength = 150000;
        const maxAttempts = 20;
    
        for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
          dataUrl = await toJpeg(element, { quality: 0.95 });
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
    
        const image = new File([dataBlob], "sharable_the_flame.png", {
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
                        src="/img/sharable_the_flame.webp"
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
                <h1 className="text-[18px] font-semibold pt-[20px]">นักสู้ – The Flame</h1>
                <Image
                    src="/img/character_the_flame.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"Ignite Justice, Burn Bright."</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px] bg-white">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือพลังขับเคลื่อนที่เปี่ยมไปด้วยไฟแห่งความถูกต้อง</h1>
                            <h1>คุณไม่ได้มองความอยุติธรรมเป็นเพียงปัญหา แต่เป็น</h1>
                            <h1>เหมือนศัตรูที่ต้องเผชิญหน้าโดยตรง เมื่อคนอื่นลังเลคุณ</h1>
                            <h1>คือคนแรกที่ก้าวออกไปยืนในแนวหน้า จิตวิญญาณ</h1>
                            <h1>ของคุณลุกโชนเมื่อเห็นการกดขี่ และคุณเชื่อว่าการนิ่งเฉย</h1>
                            <h1>คือการยอมรับความพ่ายแพ้</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"อะไรคือสิ่งที่ต้องถูกท้าทาย?"</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาโครงสร้างอำนาจที่ไม่เป็นธรรมและพร้อมที่จะ</h1>
                            <h1>สั่นคลอนมันเสมอ</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>โลกที่ความอยุติธรรมจะถูกเผชิญหน้าด้วยความกล้าหาญ</h1>
                            <h1>ในทันที ไม่มีการประนีประนอมหรือรอคอย ทุกคนกล้าที่จะ</h1>
                            <h1>ลุกขึ้นสู้เพื่อสิ่งที่ถูกต้อง</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">ไฟ</h1>
                            <Image
                                src="/img/element_the_flame.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือพลังของการเปลี่ยนแปลง ความเร่าร้อน </h1>
                            <h1>และความจริงที่เผาไหม้สิ่งที่ไม่ยั่งยืน</h1>
                        </div>
 
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <div className="border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <h1 className="py-[10px] bg-[#000000] text-white text-center">พลังวิเศษของคุณ (Superpower)</h1>
                        <div className="px-[20px]">

                            <div className="flex flex-col gap-x-[5px] pt-[20px]">
                                <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พลังพิเศษ</h1>
                                <Image
                                    src="/img/superpower_the_flame.webp"
                                    width={80}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Ignition Aura (ออร่าประกายเพลิง)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>เปลวพลังอารมณ์ที่ขับเคลื่อนด้วยกำลังแห่งไฟ</h1>
                                <h1>พร้อมจุดประกายความชอบธรรม กระตุ้นให้ผู้คนลุกขึ้นสู้ </h1>
                                <h1>พลังนี้ไม่ใช่แค่คำพูด แต่เป็นสนามพลังที่แผ่ออกไป</h1>
                                <h1>รอบตัวคุณ ปลุกความกล้าหาญในใจ และทำให้คนที่ลังเล</h1>
                                <h1>ตัดสินใจที่จะร่วมสู้กับคุณ</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_flame.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Delivery</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>กล้าหาญและมีเสน่ห์ดึงดูดใจ สามารถสร้างแรงบันดาลใจ</h1>
                                <h1>และนำทางผู้คนได้อย่างมั่นใจ</h1>
                            </div>
                            <h1 className={cn(rubik.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ในการชุมนุมที่เริ่มจะเสียขวัญกำลังใจ คุณสามารถคว้า</h1>
                                <h1>ไมโครโฟนและพูดปลุกใจเพียงไม่กี่ประโยคก็สามารถจุดไฟ</h1>
                                <h1>ให้ทุกคนกลับมาฮึกเหิมได้อีกครั้ง</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>กล้าเผชิญหน้า</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ไม่กลัวที่จะเป็นคนแรกที่ตั้งคำถามที่ไม่มีใครกล้าถาม</h1>
                                <h1>หรือท้าทายผู้มีอำนาจต่อหน้าสาธารณชน</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัดสินใจเร็ว</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ในสถานการณ์วิกฤตที่ต้องการผู้นำ คุณสามารถตัดสินใจ</h1>
                                <h1>ลงมือทำได้ทันทีโดยสัญชาตญาณ ซึ่งมักจะสร้าง</h1>
                                <h1>แรงกระเพื่อมให้เกิดการเปลี่ยนแปลงได้</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_flame.webp"
                                width={240}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>ใจร้อน หุนหันพลันแล่น</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ความรวดเร็วของคุณอาจนำไปสู่ชัยชนะที่คาดไม่ถึง</h1>
                                <h1>แต่ในทางกลับกันก็อาจทำให้แผนของทีมต้องพังลงเพราะ</h1>
                                <h1>ขาดการสื่อสาร</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจตัดสินใจเปลี่ยนเส้นทางการประท้วงกะทันหันโดย</h1>
                                <h1>ไม่ได้ปรึกษาทีม ทำให้ฝ่ายสนับสนุนที่เตรียมเสบียงไว้ให้</h1>
                                <h1>ไปผิดที่</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>พลังของคุณยิ่งใหญ่ แต่จะทรงพลังที่สุดเมื่อมีทิศทาง</h1>
                                <h1>ลองร่วมมือกับ Architect เพื่อให้การกระทำของคุณ</h1>
                                <h1>มีแผนรองรับ</h1>
                                <h1>และเปลี่ยนไฟที่แผดเผาให้กลายเป็นเลเซอร์ที่เฉียบคม</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="items-center w-full">
                                <Image
                                    src="/img/skill_graph_the_flame.webp"
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

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พันธมิตรในอุดมคติ</h1>
                           
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Architect</h1>
                            <Image
                                src="/img/strength_the_architect.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณคือหัวหอกที่พร้อมจะพุ่งทะยาน Architect คือคนที่ยื่น</h1>
                                <h1>แผนผังป้อมปราการและชี้จุดอ่อนให้คุณ ทำให้การบุกของ</h1>
                                <h1>คุณไม่ใช่แค่กล้าหาญ แต่ยังชาญฉลาดอีกด้วย</h1>
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
                                <h1>คุณคือผู้จุดไฟ Spark คือผู้ที่สาดน้ำมันให้ไฟนั้นลุกลาม</h1>
                                <h1>ไปทั่ว คุณสร้างประเด็นที่ทรงพลัง Spark ทำให้ประเด็นนั้น</h1>
                                <h1>กลายเป็นไวรัลในชั่วข้ามคืน</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดที่ต้องระวัง</h1>
                        
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Guardian</h1>
                            <Image
                                src="/img/strength_the_guardian.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>ความใจร้อนของคุณอาจทำให้ Guardian ที่เน้น</h1>
                                <h1>ความปลอดภัยรู้สึกกังวลและพยายามรั้งไว้ตลอดเวลา</h1>
                                <h1>ทำให้เกิดความขัดแย้งในจังหวะของการเคลื่อนไหว</h1>
                            </div>

                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Seeder</h1>
                            <Image
                                src="/img/strength_the_seeder.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณต้องการการเปลี่ยนแปลงทันที แต่ Seeder เชื่อใน</h1>
                                <h1>การเติบโตอย่างช้าๆ ซึ่งอาจทำให้คุณรู้สึกว่าพวกเขา</h1>
                                <h1>ไม่ทำอะไรเลย และพวกเขาก็อาจมองว่าคุณทำลาย</h1>
                                <h1>รากฐานที่พวกเขาสร้างมา</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การเป็นแนวหน้าในการประท้วงและการเดินขบวน, การ</h1>
                            <h1>รณรงค์ที่ต้องการการตัดสินใจที่รวดเร็ว, การเป็นกระบอก</h1>
                            <h1>เสียงในภาวะวิกฤต, การดีเบตเพื่อปกป้องอุดมการณ์</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>ความอยุติธรรมรูปแบบไหนที่จุดไฟในใจคุณได้มากที่สุด?</h1>
                            <h1>และคุณจะควบคุมไฟนั้นอย่างไรไม่ให้มันเผาไหม้ตัวคุณเอง</h1>
                            <h1>และพันธมิตร?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">นักสู้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มักจะรับบทบาทแนวหน้าในการรณรงค์และการประท้วง</h1>
                            <h1>ที่ซึ่งความกล้าหาญ, ความเร่งด่วน, </h1>
                            <h1>และการระดมพลเป็นหัวใจสำคัญ</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• ผู้จัดประท้วง / นักกิจกรรมรณรงค์</li>
                            <li>• นักปกป้องสิทธิมนุษยชน (HRD) ภาคพื้นดิน</li>
                            <li>• เจ้าหน้าที่ฝ่ายรณรงค์ (เน้นแคมเปญวิกฤตเร่งด่วน)</li>
                            <li>• ผู้ประสานงานปฏิบัติการโดยตรง (สิ่งแวดล้อม, </li>
                            <li className="pl-[10px]">แรงงาน, หรือสิทธิมนุษยชน)</li>
                            <li>• โฆษก / ผู้พูดในที่สาธารณะสำหรับประเด็นที่กำลัง</li>
                            <li className="pl-[10px]">ได้รับความสนใจ</li>
                            <li>• ผู้ระดมพลในชุมชนในเขตขัดแย้งหรือพื้นที่ต่อต้าน</li>

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_flame.webp"
                    alt="donate"
                    fill
                    className="object-cover"
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
                        <h1>ร่วมสร้างการเปลี่ยนแปลงของสังคม</h1>
                        <h1>ด้วยการลงชื่อยุติการฆ่าล้างเผ่าพันธุ์</h1>
                        <h1>ในฉนวนกาซา ไปพร้อมกัน</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="https://www.amnesty.or.th/petition/demand-a-ceasefire-by-all-parties-to-end-civilian-suffering/">
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
                <h1 className={cn(anuphan.className,"z-30 text-[14px] text-[#5D5D5D] text-center")}>© 2025 แอมเนสตี้ อินเตอร์เนชั่นแนล ประเทศไทย</h1>

                
                </motion.div>
                

        </motion.div>
    )
}