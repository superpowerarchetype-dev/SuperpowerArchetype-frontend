"use client";

import { anuphan, notoThai, rubik } from "~/component/font";
import { cn } from "~/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import YellowButtonSemibold from "~/component/yellow_button_semibold";
import YellowButton from "~/component/yellow_button";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import Ranking from "~/component/ranking";
import Scroll from "~/component/scroll";


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

    const [showScroll, setShowScroll] = useState(true);
    const reportRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (!entry) {
                console.log("not entry")
                return; // ✅ Guard clause to satisfy TypeScript
            }

            if (entry.isIntersecting) {
            setShowScroll(false);
            } else {
            setShowScroll(true);
            }
            console.log(showScroll)
        },
        { threshold: 0 }
        );

        const current = reportRef.current;
        if (current) observer.observe(current);

        return () => {
        if (current) observer.unobserve(current);
        };
    }, []);

    return (
        
        <motion.div 
            
            className={cn(notoThai.className, 
            "absolute flex flex-col flex-1 min-h-screen w-full text-[#0A0A0A] bg-[#F0F0F0] overflow-visible overflow-y-scroll overflow-x-hidden")}
            >
                {showScroll ?
                <Scroll></Scroll> : <></>
                }
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
                        src="/img/sharable_the_spark.webp"
                        height={1000}
                        width={400}
                        alt="end card"
                        id="sharable_result"
                        ref={exportedRef}
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
            <div className="w-full flex flex-col  items-center  bg-[#FFFFFF]  px-[20px] pb-[30px]">
                    <div className="w-full flex flex-col  items-center  bg-[#F0F0F0]  mt-[40px] my-[10px] rounded-[5px]">
                        <h1 className="text-[16px] py-[20px] font-semibold text-[#0A0A0A]">3 อันดับตัวตนของคุณ</h1>
                        <Ranking first={first} second={second} third={third}></Ranking>
                    </div>
             </div>
            <motion.div
                ref={reportRef}
                className="flex flex-col min-h-screen w-full overflow-y-scroll z-30 px-[20px] pb-[30px] items-center"
            >
                

                <div className="w-full items-centermt-[40px] my-[10px] ">
                    <h1 className="text-[16px] font-semibold py-[10px] mt-[20px] text-[#0A0A0A] text-center">รายงานวิเคราะห์เชิงลึก</h1>
                </div>
                <h1 className="text-[18px] font-semibold pt-[20px]">ผู้จุดประกาย – Spark</h1>
                <Image
                    src="/img/character_the_spark.webp"
                    height={150}
                    width={150}
                    alt= "character"

                />
                <h1 id="result_quote" className={cn(rubik.className,"text-[16px] font-semibold")}>"Meme It, Beam It!"</h1>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ตัวตนของคุณ (Core Identity)</h1>
                    <div className="px-[20px] bg-white">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำอธิบายตัวตน</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณคือพลังงานที่ทำให้เกิดกระแสแห่งการเปลี่ยนแปลง </h1>
                            <h1>ด้วยเสน่ห์และความคิดสร้างสรรค์ คุณทำให้ไอเดียต่างๆ</h1>
                            <h1>กลายเป็นไวรัลได้ในชั่วข้ามคืน คุณเชื่อว่าการเปลี่ยนแปลง</h1>
                            <h1>ไม่จำเป็นต้องเคร่งเครียดเสมอไป แต่สามารถสนุกสนาน</h1>
                            <h1>มีสีสัน และเข้าถึงผู้คนในวงกว้างได้</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">คำถามสำคัญในใจ</h1>
                        <h1 className="text-[17px] font-semibold pt-[10px] text-[#0A0A0A] text-left">"อะไรที่เราสามารถปลุกกระแสได้?"</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>คุณมองหาไอเดียที่ใช่และจังหวะที่เหมาะสมในการสร้าง</h1>
                            <h1>โมเมนตัม</h1>
                        </div>

                        <h1 className="text-[16px] font-medium pt-[30px] text-[#0A0A0A] text-left">โลกในอุดมคติ</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>โลกที่เรื่องราวและไอเดียดีๆ สามารถแพร่กระจายไปราวกับ</h1>
                            <h1>ไฟป่า ขับเคลื่อนให้เกิดการเคลื่อนไหวและการเปลี่ยนแปลง</h1>
                            <h1>ในชั่วพริบตา</h1>
                        </div>
                    </div>
                </div>


                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">ธาตุ (Element)</h1>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">ลม</h1>
                            <Image
                                src="/img/element_the_spark.webp"
                                width={20}
                                height={20}
                                alt="element"
                                className="object-contain"
                            />
                        </div>

                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                            <h1>คือการเคลื่อนไหว การเชื่อมต่อ และการแพร่กระจายอย่าง</h1>
                            <h1>รวดเร็ว </h1>
                            <h1>รวมกับไฟฟ้าซึ่งคือพลังงานที่กระตุ้นและจุดประกาย</h1>
                            <h1>ฉับพลัน</h1>
                        </div>
 
                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px]">
                    <div className="border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">
                        <h1 className="py-[10px] bg-[#000000] text-white text-center">พลังวิเศษของคุณ (Superpower)</h1>
                        <div className="px-[20px] ">

                            <div className="flex flex-col gap-x-[5px] pt-[20px] ">
                                <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พลังพิเศษ</h1>
                                <Image
                                    src="/img/superpower_the_spark.webp"
                                    width={125}
                                    height={120}
                                    alt="superpower"
                                    className="object-contain"
                                />
                            </div>
                            <h1 className="text-[17px] font-semibold  text-[#0A0A0A] text-left align-middle">Viral Lightning (สายฟ้าไวรัล)</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                                <h1>แสงวูบวาบที่ทั้งดังทั้งไว ปล่อยพลังพุ่งเข้าไปดึงดูดผู้คน </h1>
                                <h1>ให้หันมาสนใจได้อย่างรวดเร็ว พลังนี้คือความสามารถใน</h1>
                                <h1>การจับกระแสและสร้างคอนเทนต์ที่ "ใช่" ในเวลาที่ "ใช่" </h1>
                                <h1>ทำให้เกิดการแชร์ต่ออย่างมหาศาล</h1>
                            </div>
                        </div>
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดแข็ง (Strengths)</h1>
                            <Image
                                src="/img/strength_the_spark.webp"
                                width={120}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <h1 className={cn(rubik.className,"text-[17px] pt-[12px]  text-[#0A0A0A] text-left align-middle")}>Influence</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>เปี่ยมพลังและเชื่อมต่อผู้คนได้ดี สร้างความตื่นเต้นและ</h1>
                                <h1>แรงบันดาลใจให้ทีม</h1>
                            </div>
                            <h1 className={cn(rubik.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณสามารถเปลี่ยนประเด็นที่ดูน่าเบื่อให้กลายเป็น</h1>
                                <h1>Challenge สนุกๆ บน TikTok หรือสร้าง Meme</h1>
                                <h1>ที่คมคายจนกลายเป็นกระแสไวรัลได</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>ปรับตัวเร็ว</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณเข้าใจธรรมชาติของโลกออนไลน์ที่เปลี่ยนแปลงตลอด</h1>
                                <h1>เวลา และสามารถปรับกลยุทธ์ได้อย่างรวดเร็ว</h1>
                                <h1>เพื่อให้เข้ากับสถานการณ์</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] font-medium pt-[12px] text-[#0A0A0A] text-left align-middle")}>สร้างสรรค์และมีอารมณ์ขัน</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณเต็มไปด้วยไอเดียใหม่ๆ และรู้วิธีนำเสนอที่สนุกสนาน </h1>
                                <h1>ไม่เหมือนใคร และน่าดึงดูด</h1>
                            </div>
                        </div>
                        
                        
 
                    </div>
                    <div className="px-[20px] border-b-[2px] pb-[20px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-col gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">ด้านที่ต้องพัฒนา (Growth Edge)</h1>
                            <Image
                                src="/img/growth_edge_the_spark.webp"
                                width={143}
                                height={120}
                                alt="superpower"
                                className="object-contain"
                            />
                        </div>

                        <div className="pb-[20px]">
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>สมาธิสั้น และ ทำงานไม่เป็นระบบ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>พลังงานที่ล้นเหลืออาจทำให้คุณกระโดดไปมาระหว่าง</h1>
                                <h1>โปรเจกต์์และทำงานไม่ลึกซึ้ง</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[14px] pt-[12px] text-[#0A0A0A] text-left align-middle")}>ตัวอย่าง: </h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจจะตื่นเต้นกับไอเดียใหม่ๆ และเริ่มทำทันที</h1>
                                <h1>แต่พอเริ่มมีคนสนใจคุณก็อาจจะเบื่อและหันไปทำอย่างอื่น</h1>
                                <h1>แทน ทำให้โครงการขาดความต่อเนื่อง</h1>
                            </div>
                            <h1 className={cn(anuphan.className,"text-[17px] pt-[12px] font-semibold text-[#0A0A0A] text-left align-middle")}>คำแนะนำ</h1>
                            <div className={cn(anuphan.className,"text-[14px] pt-[3px] text-[#0A0A0A] text-left")}>
                                <h1>พลังของคุณคือการจุดประกาย แต่คุณต้องการคนที่จะ</h1>
                                <h1>ดูแลไฟนั้นต่อ พึ่งพา Architect เพื่อช่วยวางโครงสร้าง</h1>
                                <h1>และกรอบความคิด จะทำให้พลังสร้างสรรค์ของคุณ</h1>
                                <h1>มีทิศทางที่ชัดเจนและเกิดผลกระทบที่ยั่งยืน</h1>
                            </div>

                        </div>

                    </div>
                    <div className="px-[20px] bg-white">

                        <div className="flex flex-col   gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] text-[#0A0A0A]  align-middle">ทักษะในด้านต่างๆ (Skills Graph)</h1>
                            <div className="flex items-center justify-center w-full h-[350px]">
                                <Image
                                    src="/img/skill_graph_the_spark.webp"
                                    width={309}
                                    height={309}
                                    alt="superpower"
                                    className="object-cover  mt-[40px]"
                                />
                            </div>
                        </div>

                        
                    </div>

                    

                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] rounded-[3px] ">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พันธมิตรของคุณ (Alliance)</h1>
                    <div className="px-[20px] border-b-[2px] border-[#0A0A0A] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px] ">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">พันธมิตรในอุดมคติ</h1>
                           
                        </div>

                        <div className="pt-[20px] ">
                            <h1 className={cn(rubik.className,"text-[18px]")}>The Flame</h1>
                            <Image
                                src="/img/strength_the_flame.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                // className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณต้องการประเด็นที่ร้อนแรงและจริงใจจาก Flame</h1>
                                <h1>เพื่อใช้เป็นเชื้อไฟในการสร้างกระแส Flame สร้าง</h1>
                                <h1>ความหมาย คุณสร้างการเข้าถึง</h1>
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
                                <h1>คุณสร้างกระแส Architect สร้างการเคลื่อนไหวที่เป็น</h1>
                                <h1>ระบบ การร่วมมือกันจะทำให้พลังไวรัลของคุณไม่ได้จบ</h1>
                                <h1>แค่ในโลกออนไลน์ แต่สามารถนำไปสู่การเปลี่ยนแปลง</h1>
                                <h1>ในโลกแห่งความจริงได้</h1>
                            </div>

                        </div>

 
                    </div>

                    <div className="px-[20px] bg-white">

                        <div className="flex flex-row gap-x-[5px] pt-[20px]">
                            <h1 className="text-[16px] font-medium  text-[#0A0A0A] text-left align-middle">จุดที่ต้องระวัง</h1>
                        
                        </div>

                        <div className="pt-[20px]">
                            <h1 className={cn(rubik.className,"text-[18px]")}>Seeder</h1>
                            <Image
                                src="/img/strength_the_seeder.webp"
                                width={100}
                                height={120}
                                alt = "character"
                                className="py-[5px]"

                            />

                            <div className={cn(anuphan.className,"text-[14px] pt-[8px] pb-[20px] text-[#0A0A0A] text-left")}>
                                <h1>คุณอาจมองว่า Seeder ทำงานช้าและน่าเบื่อ ในขณะที่ </h1>
                                <h1>Seeder อาจมองว่าคุณทำงานฉาบฉวยและไม่ยั่งยืน</h1>
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
                                <h1>คุณรักความสนุกและความวุ่นวาย แต่ Guardian </h1>
                                <h1>ชอบกฎเกณฑ์และความเป็นระเบียบ</h1>
                                <h1>ซึ่งอาจทำให้คุณรู้สึกอึดอัด</h1>
                            </div>

                        </div>


                        </div>
                </div>
                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">พื้นที่ของคุณ (Ideal Environment)</h1>
                    <div className="px-[20px] ">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คุณจะเฉิดฉายในสถานการณ์แบบนี้</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>การรณรงค์ผ่านโซเชียลมีเดีย, การสร้างแบรนด์และ</h1>
                            <h1>การตลาด, การจัดอีเวนต์และแฟลชม็อบ,</h1>
                            <h1>การสร้างเครือข่ายและระดมพลออนไลน์</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">คำถามเพื่อการไตร่ตรอง</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>อะไรคือข้อความหรือไอเดียที่คุณเชื่อมั่นมากพอที่จะทำให้</h1>
                            <h1>มันกลายเป็นกระแสไวรัล และคุณจะทำมันได้อย่างไรโดย</h1>
                            <h1>ไม่สูญเสียแก่นแท้ของมัน?</h1>

                        </div>

                    </div>
                </div>

                <div className="border-[2px] border-[#0A0A0A] w-full items-center mt-[20px] pb-[20px] rounded-[3px] bg-white">
                    <h1 className="py-[10px] bg-[#000000] text-white text-center">บทบาทและอาชีพในขบวนการเคลื่อนไหว</h1>
                    <div className="px-[20px] ">

                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">ผู้จุดประกาย</h1>
                        <div className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <h1>มีบทบาทสำคัญต่อขบวนการ เพราะเป็นพี่วางกลยุทธ์</h1>
                            <h1>การสื่อสารและสร้างการรับรู้ให้ไกลและดังที่สุด</h1>

                        </div>
                        <h1 className="text-[16px] font-medium pt-[20px] text-[#0A0A0A] text-left">บทบาททั่วไป</h1>
                        <ul className={cn(anuphan.className,"text-[14px] pt-[8px] text-[#0A0A0A] text-left")}>
                            <li>• นักรณรงค์ดิจิทัล / ผู้จัดการโซเชียลมีเดีย</li>
                            <li>• เจ้าหน้าที่สื่อและมวลชนสัมพันธ์</li>
                            <li>• ผู้เชี่ยวชาญด้านการมีส่วนร่วมของสาธารณชน</li>
                            <li>• อินฟลูเอนเซอร์ / ทูตสำหรับประเด็นต่างๆ</li>
                            <li>• โปรดิวเซอร์สร้างสรรค์ (วิดีโอ, ภาพ, พอดแคสต์)</li>
                            <li>• ผู้ระดมพลสำหรับกิจกรรม</li>

                        </ul>

                    </div>
                </div>


            </motion.div>
            <motion.div className="relative flex flex-col flex-1 items-center justify-center min-h-screen w-full bg-black">
                <div className="absolute w-full h-screen">
                    <Image
                    src="/img/donate_the_spark.webp"
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
                        <h1>ร่วมติดตามแอมเนสตี้ อินเตอร์เนชั่นแนล</h1>
                        <h1>และสร้างการเปลี่ยนแปลงของสังคมไปด้วยกัน</h1>
                    </div>
                    <Link 
                        className="w-full px-[30px] pt-[10px]"
                        href="http://linktr.ee/amnestythailand">
                        <YellowButtonSemibold text="ติดตามเลย"></YellowButtonSemibold>
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