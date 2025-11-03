"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import YellowButton from "~/component/yellow_button";
import { useEffect, useRef, useState } from "react";
import Ranking from "~/component/ranking";

export default function Page() {
    const [first,setFirst] = useState<string>("")
    const [second,setSecond] = useState<string>("")
    const [third,setThird] = useState<string>("")

    const [theFlameScore,setTheFlameScore] = useState<number>()
    const [theGuardianScore,setTheGuardianScore] = useState<number>()
    const [theSeederScore,setTheSeederScore] = useState<number>()
    const [theSparkScore,setTheSparkScore] = useState<number>()
    const [theEchoScore,setTheEchoScore] = useState<number>()
    const [theArchitectScore,setTheArchitectScore] = useState<number>()
    
    

    useEffect(()=> {
        setFirst(localStorage.getItem("win_archetype") ?? "")
        console.log(first)
        },[first])

    useEffect(() => {
        const storedFlame = Number(localStorage.getItem("the_flame_score")) || 0;
        const storedGuardian = Number(localStorage.getItem("the_guardian_score")) || 0;
        const storedSeeder = Number(localStorage.getItem("the_seeder_score")) || 0;
        const storedSpark = Number(localStorage.getItem("the_spark_score")) || 0;
        const storedEcho = Number(localStorage.getItem("the_echo_score")) || 0;
        const storedArchitect = Number(localStorage.getItem("the_architect_score")) || 0;
    
        setTheFlameScore(storedFlame);
        setTheGuardianScore(storedGuardian);
        setTheSeederScore(storedSeeder);
        setTheSparkScore(storedSpark);
        setTheEchoScore(storedEcho);
        setTheArchitectScore(storedArchitect);
        }, []); 

    useEffect(() => {
        const scores = [
            { name: "the_flame", score: theFlameScore ?? 0 },
            { name: "the_guardian", score: theGuardianScore ?? 0 },
            { name: "the_seeder", score: theSeederScore?? 0 },
            { name: "the_spark", score: theSparkScore?? 0 },
            { name: "the_echo", score: theEchoScore?? 0 },
            { name: "the_architect", score: theArchitectScore?? 0 },
        ];
        const filtered = scores.filter(
            (item) => item.name.toLowerCase() !== first.toLowerCase()
          );
        
        // sort descending
        const sorted = filtered.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
        const top2 = sorted.slice(0, 2);
    
        setSecond(top2[0]?.name ?? "");
        setThird(top2[1]?.name ?? "");
        }, [
        theFlameScore,
        theGuardianScore,
        theSeederScore,
        theSparkScore,
        theEchoScore,
        theArchitectScore,
        ]);
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
                        src="/img/sharable_the_echo.webp"
                        height={1000}
                        width={400}
                        ref={exportedRef}
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
                <div className="w-full flex flex-col  items-center  bg-[#FFFFFF]  mt-[40px] my-[10px] rounded-[5px]">
                    <h1 className="text-[16px] py-[20px] font-semibold text-[#0A0A0A]">3 อันดับตัวตนของคุณ</h1>
                    <Ranking first={first} second={second} third={third}></Ranking>
                </div>
                <div className="w-full items-center  bg-[#000000] border  mt-[40px] my-[10px] rounded-[5px]">
                    <h1 className="text-[16px] py-[10px] text-white text-center">รายงานวิเคราะห์เชิงลึก</h1>
                </div>
                <h1 className="text-[18px] font-semibold pt-[20px]">นักเล่าเรื่อง – Echo</h1>
                <Image
                    src="/img/character_the_echo.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"One Whisper Awaken Thousands."</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px] bg-white">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือผู้ที่เปลี่ยนข้อมูลให้กลายเป็นความรู้สึก</h1>
                            <h1>คุณใช้พลังแห่งการถ่ายทอด เชื่อมโยงใจของผู้คน</h1>
                            <h1>ทำให้ประเด็นที่ซับซ้อนกลายเป็นเรื่องเล่าที่จับใจ</h1>
                            <h1>คุณเชื่อว่าสถิติและข้อมูลไม่สามารถเปลี่ยนแปลงโลกได้ </h1>
                            <h1>หากขาดเรื่องราวที่สะท้อนความเป็นมนุษย์</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"อะไรคือความจริงที่ยังไม่ถูกเล่าขาน?" </h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาเสียงที่เงียบงันและเรื่องราวที่ถูกซ่อนไว้</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>โลกที่ความเข้าอกเข้าใจเป็นภาษากลาง ที่ซึ่งทุกเรื่องราว</h1>
                            <h1>ได้รับการให้เกียรติและรับฟังอย่างเท่าเทียม</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">อีเธอร์</h1>
                            <Image
                                src="/img/element_the_echo.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือธาตุแห่งพื้นที่ว่าง ความทรงจำ และสิ่งที่มองไม่เห็น</h1>
                            <h1>มันคือการสื่อสารในมิติที่ละเอียดเกินกว่าจะสัมผัสตรง ๆ</h1>

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
                                    src="/img/superpower_the_echo.webp"
                                    width={184}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Resonance Thread</h1>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">(คลื่นมนต์แห่งเรื่องราว)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>มนตราวิเศษที่สามารถถักทอเรื่องราว ให้ลึกซึ้งเข้าถึงผู้คน</h1>
                                <h1>เปลี่ยนความเศร้าหมองในใจให้เป็น แสงประกายแห่ง</h1>
                                <h1>ความหวัง พลังนี้คือความสามารถในการค้นหา "หัวใจ"</h1>
                                <h1>ของทุกประเด็นและสื่อสารมันออกไปจนผู้คนรู้สึกราวกับ</h1>
                                <h1>เป็นเรื่องของตัวเอง</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_echo.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Narrative</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>เข้าใจจิตใจผู้คนลึกซึ้ง ถ่ายทอดเรื่องราวและความรู้สึกได</h1>
                                <h1>อย่างน่าประทับใจ</h1>
                            </div>
                            <h1 className={cn(rubik.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>แทนที่จะพูดถึงสถิติคนไร้บ้าน หรือข้อมูลแข็งๆ คุณเลือกที</h1>
                                <h1>จะเล่าเรื่องราวชีวิตที่น่าสะเทือนใจของคนไร้บ้านเพียง</h1>
                                <h1>คนเดียว ซึ่งสร้างผลกระทบทางอารมณ์ได้มากกว่าข้อมูล</h1>
                                <h1>เป็นร้อยเท่า</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>สร้างความรู้สึกร่วม</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสามารถทำให้ผู้คนรู้สึกเชื่อมโยงกับประเด็นที่ดูห่างไกล</h1>
                                <h1>และซับซ้อนในระดับอารมณ์ได</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>เป็นผู้ฟังที่ดี</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสามารถรับฟังและทำความเข้าใจเรื่องราวของผู้อื่นได้</h1>
                                <h1>อย่างแท้จริง ทำให้ผู้คนไว้วางใจและกล้าที่จะเปิดใจกับคุณ</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_echo.webp"
                                width={143}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>จมอยู่กับเรื่องเล่า จนเลี่ยงการลงมือทำจริง</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจใช้เวลาไปกับการทำความเข้าใจและถ่ายทอด</h1>
                                <h1>อารมณ์ จนละเลยการวางแผนที่เป็นรูปธรรม</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจจะสัมภาษณ์และเขียนเรื่องราวที่ทรงพลังได้สำเร็จ</h1>
                                <h1>แต่ไม่ได้วางแผนต่อว่าจะนำเรื่องราวนั้นไปใช้ขับเคลื่อนการ</h1>
                                <h1>เปลี่ยนแปลงอย่างไร</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>เรื่องเล่าของคุณคืออาวุธที่ทรงพลังที่สุด การทำงาน</h1>
                                <h1>ร่วมกับ Architect จะช่วยสร้าง "สนามรบ" หรือวาง</h1>
                                <h1>กลยุทธ์ที่จะใช้อาวุธนี้ให้เกิดประโยชน์สูงสุด</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="items-center w-full">
                                <Image
                                    src="/img/skill_graph_the_echo.webp"
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
                            <h1 className={cn(rubik.className,"text-[18px]")}>Seeder</h1>
                            <Image
                                src="/img/strength_the_seeder.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณช่วยบอกเล่าเรื่องราวการทำงานที่เงียบงันของ</h1>
                                <h1>Seeder ให้โลกได้รับรู้ และ Seeder ก็สร้างพื้นที่ที่มั่นคง</h1>
                                <h1>ให้คุณได้ทำงานสร้างสรรค์อย่างลึกซึ้ง</h1>
                            </div>

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
                                <h1>คุณต้องการพื้นที่ที่ปลอดภัยจาก Guardian เพื่อที่จะ</h1>
                                <h1>ถ่ายทอดเรื่องราวที่เปราะบางได้อย่างเต็มที่ และ Guardian</h1>
                                <h1>ก็ต้องการให้คุณช่วยเยียวยาบาดแผลทางใจของทีม</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดที่ต้องระวัง</h1>
                        
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Architect</h1>
                            <Image
                                src="/img/strength_the_architect.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจมองว่า Architect เย็นชาและยึดติดกับข้อมูลมาก</h1>
                                <h1>เกินไป ในขณะที่ Architect อาจมองว่าคุณใช้อารมณ์มาก</h1>
                                <h1>เกินไปในการตัดสินใจ</h1>
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
                                <h1>คุณเน้นความละเอียดอ่อน แต่ Flame เน้นความตรงไป</h1>
                                <h1>ตรงมา ซึ่งอาจทำให้การสื่อสารระหว่างกันเกิดความ</h1>
                                <h1>เข้าใจผิดได้ง่าย</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การเขียนสุนทรพจน์, การสร้างภาพยนตร์สารคดี,</h1>
                            <h1>การสัมภาษณ์เชิงลึก, การบำบัดผ่านศิลปะ, </h1>
                            <h1>การสร้างแบรนด์ที่เน้นเรื่องราว</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>เรื่องราวของใครในสังคมที่ยังไม่เคยถูกรับฟัง</h1>
                            <h1>และคุณจะใช้พลังของคุณเพื่อทำให้เรื่องราวนั้นดังก้อง</h1>
                            <h1>ไปทั่วได้อย่างไร?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px]">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">นักเล่าเรื่อง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มักจะอยู่ในบทบาทที่ขับเคลื่อนด้วยเรื่องราวและเน้นการ</h1>
                            <h1>สื่อสาร ซึ่งเปลี่ยนสิทธิมนุษยชนให้เป็นเรื่องเล่าที่มีชีวิต</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• เจ้าหน้าที่บันทึกคำให้การและเอกสาร</li>
                            <li>• นักยุทธศาสตร์การเล่าเรื่อง</li>
                            <li>• นักวิจัยสิทธิมนุษยชน (เน้นการสัมภาษณ์ผู้รอดชีวิต)</li>
                            <li>• นักเขียนเนื้อหาและการสื่อสาร (บล็อก, รายงาน, </li>
                            <li className="pl-[10px]">บทความยาว)</li>
                            <li>• นักกิจกรรมเชิงศิลปะ (ละคร, ภาพยนตร์, กวีนิพนธ์, </li>
                            <li className="pl-[10px]">ดนตรีเพื่อสิทธิมนุษยชน)</li>
                            <li>• นักเขียนคำโฆษณา / หัวหน้าฝ่ายสร้างสรรค์สำหรับ</li>
                            <li className="pl-[10px]">แคมเปญ</li>
                            <li>• นักข่าวเชิงประเด็น เชิงลึก นักสารคดี</li>

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_echo.webp"
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
                        <h1>มาร่วมส่งต่อกำลังใจ </h1>
                        <h1>และเขียนจดหมายให้เพื่อนๆ ของเราในเรือนจำ</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="https://freeratsadon.amnesty.or.th/list">
                        <YellowButtonSemibold text="เขียนเลย"></YellowButtonSemibold>
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