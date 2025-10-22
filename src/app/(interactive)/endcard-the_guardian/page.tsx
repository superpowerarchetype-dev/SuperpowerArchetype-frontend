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
    
        const image = new File([dataBlob], "sharable_the_guardian.png", {
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
            "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#FFFFFF] overflow-visible overflow-y-scroll overflow-x-hidden")}
            >
            <div
                className="flex flex-col flex-1 min-h-screen w-full text-[#FFFFFF] bg-[#2C2C2C] px-[20px] "
            
            >
                
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                className="-top-[3%] z-10 flex h-[60px] w-full justify-center items-center ">
                <Image
                    src="/img/logo_transparent.webp"
                    width={100}
                    height={120}
                    alt="logo amnesty"
                    className="absolute object-cover "
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
                        src="/img/sharable_the_guardian.webp"
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
                <h1 className="text-[18px] font-semibold pt-[20px] pb-[20px]">ผู้พิทักษ์ – Guardian</h1>
                <Image
                    src="/img/character_the_guardian.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"Soft Heart, Strong Shield!"</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือเกราะที่แข็งแกร่งของขบวนการ ผู้เปี่ยมด้วยความ</h1>
                            <h1>รับผิดชอบและความเสียสละ คุณเชื่อว่าการเปลี่ยนแปลง</h1>
                            <h1>ที่แท้จริงจะเกิดขึ้นไม่ได้หากคนในทีมรู้สึกไม่ปลอดภัย</h1>
                            <h1>คุณคือคนที่คอยดูแลบาดแผล ทั้งที่มองเห็นและมองไม่เห็น</h1>
                            <h1>และทำให้แน่ใจว่าทุกคนพร้อมที่จะสู้ต่อในวันพรุ่งนี้</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"ใครที่เราต้องปกป้อง?"</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาคนที่เปราะบางที่สุดในกลุ่มและยื่นมือเข้าไป</h1>
                            <h1>ช่วยเหลือเสมอ</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>โลกที่ทุกคนรู้สึกปลอดภัยทั้งทางร่างกายและจิตใจ</h1>
                            <h1>และกลุ่มคนที่เปราะบางที่สุดได้รับการดูแลเอาใจใส่เป็น</h1>
                            <h1>อันดับแรก</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px]">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">น้ำ</h1>
                            <Image
                                src="/img/element_the_guardian.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือการโอบอุ้ม การบรรเทา และการรักษา</h1>
                            <h1>มันไหลไปตามรูปทรง ดูดซับแรงกระแทก</h1>
                            <h1>และสร้างพื้นที่ปลอดภัย</h1>
                        </div>
 
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <div className="border-b-[2px] pb-[20px] border-[#0A0A0A]">
                        <h1 className="py-[10px] bg-[#000000] text-white text-center">พลังวิเศษของคุณ (Superpower)</h1>
                        <div className="px-[20px]">

                            <div className="flex flex-col gap-x-[5px] pt-[20px]">
                                <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พลังพิเศษ</h1>
                                <Image
                                    src="/img/superpower_the_guardian.webp"
                                    width={155}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Safeguard Barrier (ปราการคุ้มภัย)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>สนามพลังป้องกันที่ต้านทานทุกภัยคุกคาม เป็นเกราะ</h1>
                                <h1>ป้องกันเพื่อปกป้องทั้งผู้คน พื้นที่ หรือความรู้สึก </h1>
                                <h1>พลังนี้อาจปรากฏเป็นโล่พลังงานที่มองเห็น หรือเป็น</h1>
                                <h1>ความรู้สึกปลอดภัยและความไว้วางใจที่แผ่ออกไป</h1>
                                <h1>รอบตัวคุณ</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A]">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium pb-[20px] text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_guardian.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Safeguarding</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>เป็นที่พึ่งที่เชื่อถือได้ มีความรับผิดชอบสูงและสร้าง</h1>
                                <h1>ความปลอดภัยให้ทุกคน</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px]  pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>เมื่อทีมเกิดความขัดแย้งรุนแรง</h1>
                                <h1>คุณคือคนกลางที่จะเข้ามาไกล่เกลี่ยและสร้างกฎกติกาเพื่อ</h1>
                                <h1>ให้ทุกคนกลับมาคุยกันอย่างสันติได</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>เยือกเย็นในภาวะวิกฤต</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ในขณะที่คนอื่นตื่นตระหนก คุณจะสงบนิ่งและคิดถึง</h1>
                                <h1>ขั้นตอนต่อไปอย่างเป็นระบบ ทำให้คุณเป็นหลักที่มั่นคง</h1>
                                <h1>ของทีม</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>มีความภักดีสูง</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณจะไม่มีวันทรยศต่อทีมหรืออุดมการณ์</h1>
                                <h1>และจะปกป้องพวกพ้องจนถึงที่สุด</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A]">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_guardian.webp"
                                width={207}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>เน้นการตั้งรับมากเกินไป</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>การมุ่งเน้นที่ความปลอดภัยเพียงอย่างเดียว อาจทำให้คุณ</h1>
                                <h1>ปฏิเสธแผนการที่มีความเสี่ยงแต่ให้ผลตอบแทนสูง</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจไม่เห็นด้วยกับแผนการแทรกซึมของ Flame </h1>
                                <h1>แม้ว่ามันจะเป็นโอกาสเดียวที่จะชนะ</h1>
                                <h1>เพราะคุณมองว่ามันเสี่ยงเกินไป</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ความปลอดภัยเป็นสิ่งสำคัญ แต่การเติบโตก็เช่นกัน </h1>
                                <h1>ลองเชื่อใจในแผนของ Architect และพลังของเพื่อน</h1>
                                <h1>ร่วมทีม ให้พวกเขาลองเสี่ยงในขณะที่คุณคอยเป็น</h1>
                                <h1>แผนสำรองที่แข็งแกร่งที่สุด</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] ">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="items-center w-full">
                                <Image
                                    src="/img/skill_graph_the_guardian.webp"
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
                    <div className="px-[20px] border-b-[2px] border-[#0A0A0A]">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พันธมิตรในอุดมคติ</h1>
                           
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
                                <h1>คุณปกป้องต้นกล้าที่ Seeder เพาะปลูก ทำให้การเติบโต</h1>
                                <h1>ในระยะยาวเป็นไปได้จริง Seeder สร้างความมั่นคง</h1>
                                <h1>คุณรักษามันไว้</h1>
                            </div>

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
                                <h1>คุณคือผู้ที่ทำให้แผนการอันซับซ้อนของ Architect </h1>
                                <h1>เกิดขึ้นได้จริงอย่างปลอดภัย Architect สร้างพิมพ์เขียว</h1>
                                <h1>คุณดูแลการก่อสร้างให้เป็นไปตามนั้นและแข็งแรงที่สุด</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px]">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดที่ต้องระวัง</h1>
                        
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>The Flame</h1>
                            <Image
                                src="/img/strength_the_flame.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจมองว่า Flame บ้าบิ่นเกินไป ในขณะที่ Flame </h1>
                                <h1>ก็มองว่าคุณขี้กลัวเกินไป การหาจุดสมดุลระหว่าง</h1>
                                <h1>ความกล้าและความปลอดภัยคือความท้าทาย</h1>
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
                                <h1>คุณชอบความเป็นระเบียบและกิจวัตร แต่ Spark ชอบ</h1>
                                <h1>ความแปลกใหม่และความวุ่นวาย ซึ่งอาจทำให้คุณรู้สึกว่า</h1>
                                <h1>Spark กำลังสร้างความเสี่ยงที่ไม่จำเป็น</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การจัดการความเสี่ยง, การดูแลความปลอดภัยในพื้นที</h1>
                            <h1>ชุมนุม, การเป็นผู้ให้คำปรึกษาและสนับสนุนทางอารมณ์,</h1>
                            <h1>การวางแผนรับมือเหตุฉุกเฉิน</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มีใครในทีมที่คุณรู้สึกว่ากำลังเปราะบางที่สุดในตอนนี้ </h1>
                            <h1>และคุณจะสร้าง "พื้นที่ปลอดภัย" ที่แท้จริงให้พวกเขาได้</h1>
                            <h1>อย่างไร?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">ผู้พิทักษ์</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มักอยู่ในบทบาทที่เน้นการดูแล, การคุ้มครอง, </h1>
                            <h1>และความมั่นคง ถึงไม่เป็นที่สังเกต แต่มีความสำคัญ</h1>
                            <h1>อย่างยิ่ง</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• เจ้าหน้าที่ฝ่ายคุ้มครองและความปลอดภัย (ภาคสนาม, </li>
                            <li className="pl-[10px]">การคุ้มครองนักกิจกรรม)</li>
                            <li>• ผู้ประสานงานด้านความปลอดภัยของนักปกป้อง</li>
                            <li className="pl-[10px]">สิทธิมนุษยชน</li>
                            <li>• นักสังคมสงเคราะห์ผู้ดูแลผู้รอดชีวิต (ความรุนแรง</li>
                            <li className="pl-[10px]">ทางเพศ, ผู้ลี้ภัย, เหยื่อการทรมาน)</li>
                            <li>• ผู้จัดการโครงการด้านสุขภาวะและการสนับสนุน</li>
                            <li className="pl-[10px]">นักปกป้องสิทธิมนุษยชน</li>
                            <li>• ผู้ประสานงานการตอบโต้สถานการณ์ฉุกเฉิน</li>
                            <li>• บทบาทฝ่ายบุคคล/ปฏิบัติการที่ดูแลวัฒนธรรม</li>
                            <li className="pl-[10px]">ความปลอดภัยในองค์กร</li>
                            

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_guardian.webp"
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
                        <h1>มาร่วมเป็นส่วนหนึ่งของแอมเนสตี้</h1>
                        <h1>อินเตอร์เนชั่นแนล และปกป้องสังคมไปพร้อมกัน</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="https://www.amnesty.or.th/get-involved/%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3%e0%b8%aa%e0%b8%a1%e0%b8%b2%e0%b8%8a%e0%b8%b4%e0%b8%81/">
                        <YellowButtonSemibold text="สมัครเลย"></YellowButtonSemibold>
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