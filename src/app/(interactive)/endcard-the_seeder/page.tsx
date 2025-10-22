"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import YellowButton from "~/component/yellow_button";
import { useRef } from "react";



export default function Page() {
    const exportedRef = useRef<HTMLImageElement | null>(null);

    const convertImage = async (element: HTMLElement) => {
      // Dynamic import to avoid SSR issues
      const htmlToImage = await import("html-to-image");
      let dataUrl = "";
      const minDataLength = 150000;
      const maxAttempts = 20;
  
      for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
        dataUrl = await htmlToImage.toJpeg(element, { quality: 0.95 });
      }
  
      return dataUrl;
    };
  
    const shareImage = async () => {
      if (!exportedRef.current) {
        console.log(exportedRef.current)
        return};
  
      const dataUrl = await convertImage(exportedRef.current);
  
      const dataBlob = await (await fetch(dataUrl)).blob();
      if (!dataBlob) return;
  
      const image = new File([dataBlob], "sharable_the_spark.png", {
        type: dataBlob.type,
      });
  
      const shareData: ShareData = {
        title: "Activerse",
        text: "คุณคือ...",
        files: [image],
      };
  
      try {
        await navigator.share(shareData);
        console.log("Shared successfully");
      } catch (err) {
        console.log("Error sharing", err);
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
                        src="/img/sharable_the_seeder.webp"
                        height={1000}
                        width={400}
                        alt="end card"
                        ref={exportedRef}
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
                <h1 className="text-[18px] font-semibold pt-[20px]">ผู้ปลูกสร้าง – Seeder</h1>
                <Image
                    src="/img/character_the_seeder.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"Good Things Grow Slow."</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px] bg-white">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือนักสร้างการเปลี่ยนแปลง ที่เชื่อในการเติบโตอย่าง</h1>
                            <h1>ช้าๆ แต่มั่นคงดั่งต้นไม้ใหญ่ คุณไม่ได้มองหาชัยชนะที่</h1>
                            <h1>ฉาบฉวย แต่มุ่งมั่นสร้างรากฐานที่แข็งแกร่งเพื่อคนรุ่นหลัง</h1>
                            <h1>คุณทำงานด้วยความอดทนและความมุ่งมั่นอยู่เบื้องหลัง</h1>
                            <h1>ความสำเร็จของทุกคน</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"อะไรคือสิ่งที่ต้องได้รับการบ่มเพาะ?"</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาศักยภาพที่ซ่อนอยู่และค่อยๆ ดูแลมันให้เติบโต</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>สังคมที่ฟื้นฟูตัวเองได้ ซึ่งการเยียวยา การดูแล </h1>
                            <h1>และการเติบโตอย่างยั่งยืนเป็นหัวใจสำคัญ ไม่ใช่แค่</h1>
                            <h1>การแก้ปัญหาเฉพาะหน้า</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">ดิน</h1>
                            <Image
                                src="/img/element_the_seeder.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือรากฐาน ความหนักแน่น ความมั่นคง </h1>
                            <h1>รวมกับ ไม้ อันหมายถึงการเติบโต การแตกกิ่งก้าน </h1>
                            <h1>และการฟื้นฟู</h1>
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
                                    src="/img/superpower_the_seeder.webp"
                                    width={94}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Sprout Sparkle (ประกายต้นกล้า)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>ประกายเมล็ดพันธุ์เล็กๆ ที่บรรจุศักยภาพของการเติบโตที</h1>
                                <h1>ยิ่งใหญ่เอาไว้ เมื่อโปรยออกไป จะกลายเป็นต้นกล้าจิ๋ว</h1>
                                <h1>ที่จะผลิบานในอนาคต พลังนี้อาจไม่เห็นผลทันที </h1>
                                <h1>แต่มันคือการหว่านเมล็ดพันธุ์แห่งการเปลี่ยนแปลงที่จะ</h1>
                                <h1>เติบโตไปทั่วทั้งเมืองในระยะยาว</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_seeder.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Cohesion</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>อดทนและใส่ใจในรายละเอียด สร้างพื้นฐานที่แข็งแกร่ง</h1>
                                <h1>ด้วยการใช้ทรัพยากรอย่างชาญฉลาด</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px]  pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ในขณะที่คนอื่นกำลังวางแผนประท้วง คุณคือคนที่กำลัง</h1>
                                <h1>สร้างเครือข่ายสนับสนุน จัดหาเสบียง และสร้าง</h1>
                                <h1>ความสัมพันธ์กับคนในชุมชนเพื่อให้การเคลื่อนไหวอยู่ได้ใน</h1>
                                <h1>ระยะยาว</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>มองการณ์ไกล</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณเข้าใจว่าการเปลี่ยนแปลงที่แท้จริงต้องใช้เวลา</h1>
                                <h1>คุณจึงไม่หวั่นไหวกับอุปสรรคเล็กๆ น้อยๆ </h1>
                                <h1>และมุ่งมั่นทำในสิ่งที่เชื่อมั่นต่อไป</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>สร้างความเป็นปึกแผ่น</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณมีความสามารถในการหลอมรวมผู้คนที่มีความ</h1>
                                <h1>สามารถแตกต่างกันให้ทำงานร่วมกันได้อย่างราบรื่นและ</h1>
                                <h1>มีประสิทธิภาพ</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_seeder.webp"
                                width={130}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>ชอบหลีกเลี่ยงการปะทะ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>การไม่ชอบความขัดแย้งอาจทำให้คุณลังเลที่จะพูดหรือ</h1>
                                <h1>ทำในสิ่งที่จำเป็นแต่ต้องเผชิญหน้ากับคนอื่น</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจจะรู้ว่ามีปัญหาในทีม แต่เลือกที่จะเงียบไว้เพราะ</h1>
                                <h1>ไม่อยากให้เกิดความขัดแย้ง ซึ่งอาจทำให้ปัญหานั้นใหญ่ขึ้น</h1>
                                <h1>ในอนาคต</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>ความสงบของคุณคือจุดแข็ง แต่บางครั้งการเผชิญหน้า</h1>
                                <h1>ก็จำเป็นต่อการเติบโต ลองให้ Echo ช่วยสื่อสารใน</h1>
                                <h1>ประเด็นที่ละเอียดอ่อน หรือให้ Flame เป็นตัวแทนใน</h1>
                                <h1>การเผชิญหน้าโดยมีคุณคอยสนับสนุนอยู่เบื้องหลัง</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="items-center w-full">
                                <Image
                                    src="/img/skill_graph_the_seeder.webp"
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
                            <h1 className={cn(rubik.className,"text-[18px]")}>Guardian</h1>
                            <Image
                                src="/img/strength_the_guardian.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสร้างรากฐานและโครงสร้าง Guardian คือผู้ที่คอย</h1>
                                <h1>ปกป้องมันจากพายุและการโจมตี ทำให้สิ่งที่คุณสร้าง</h1>
                                <h1>เติบโตได้อย่างปลอดภัย</h1>
                            </div>

                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Echo</h1>
                            <Image
                                src="/img/strength_the_echo.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณทำงานอยู่เบื้องหลัง Echo คือคนที่นำเรื่องราวการ</h1>
                                <h1>ทำงานและความทุ่มเทของคุณไปบอกเล่าให้โลกได้รับรู้</h1>
                                <h1>ทำให้คนเห็นคุณค่าของสิ่งที่มองไม่เห็น</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px] bg-white">

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
                                <h1>คุณอาจมองว่า Flame ทำอะไรไม่คิดถึงผลกระทบระยะยาว</h1>
                                <h1>ในขณะที่ Flame อาจมองว่าคุณทำงานช้าและไม่ทันการณ์</h1>
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
                                <h1>คุณเน้นความลึกซึ้งและยั่งยืน แต่ Spark เน้นความเร็วและ</h1>
                                <h1>กระแส ซึ่งอาจทำให้เป้าหมายในการทำงานของพวกคุณ</h1>
                                <h1>สวนทางกัน</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การพัฒนาชุมชน, การวางแผนโครงการระยะยาว, </h1>
                            <h1>การสร้างวัฒนธรรมองค์กรที่แข็งแรง, การจัดการ</h1>
                            <h1>ทรัพยากรอย่างยั่งยืน, การเป็นพี่เลี้ยง</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>"เมล็ดพันธุ์" แห่งการเปลี่ยนแปลงอะไรที่คุณกำลังปลูกอยู</h1>
                            <h1>ในตอนนี้ และมันต้องการ "น้ำ" "ดิน" และ "แสงแดด" </h1>
                            <h1>แบบไหนเพื่อที่จะเติบโตอย่างแข็งแกร่ง?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">ผู้ปลูกสร้าง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มักจะอยู่บทบาทที่ต้องใช้วิสัยทัศน์ระยะยาว, การศึกษา, </h1>
                            <h1>เยาวชน, และการก่อตั้งริเริ่มโครงการ</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• นักสิทธิมนุษยชนศึกษา / เจ้าหน้าที่ฝึกอบรม</li>
                            <li>• ผู้จัดการโครงการด้านความยั่งยืนและการพัฒนา</li>
                            <li>• นักจัดตั้งชุมชน (การเสริมพลังท้องถิ่นระยะยาว)</li>
                            <li>• นักวิจัยเพื่อการรณรงค์ (แคมเปญระยะยาว เช่น</li>
                            <li className="pl-[10px]">โทษประหาร, สิทธิผู้ลี้ภัย)</li>
                            <li>• นักปฏิบัติงานใน NGO ด้านสิ่งแวดล้อมหรือการพัฒนา</li>
                            <li>• ผู้เชี่ยวชาญด้านการเสริมสร้างศักยภาพ (ช่วยให้ NGO </li>
                            <li className="pl-[10px]">ท้องถิ่นเติบโตอย่างยั่งยืน)</li>
                            

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_seeder.webp"
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
                        <h1>ด้วยการบริจาคเพื่อส่งเสริมสิทธิมนุษยชนศึกษา</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="https://www.amnesty.or.th/petition/demand-a-ceasefire-by-all-parties-to-end-civilian-suffering/">
                        <YellowButtonSemibold text="บริจาคเลย"></YellowButtonSemibold>
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
                            <h1>ด้วยการลงชื่อยุติการฆ่าล้างเผ่าพันธุ์</h1>
                            <h1>ในฉนวนกาซา ไปพร้อมกัน</h1>
                            <Link
                            className="w-[120px] z-30 pt-[10px]"
                            href="https://act.amnesty.or.th/page/133465/donate/1"
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