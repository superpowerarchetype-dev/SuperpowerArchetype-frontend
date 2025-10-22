'use client'
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import WhiteButton from "~/component/white_button";
import YellowButton from "~/component/yellow_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useRouter } from "next/navigation"; // client router

export default function Page() {
  const duration = 0.8;
  const router = useRouter()
  const [name,setName] = useState<string>("")
  const [gender,setGender] = useState<string>("")
  const [age,setAge] = useState<number>(-1)
  const [email,setEmail] = useState<string>("")

  const [isValidName,setIsValidName] = useState<number>(0)
  const [isValidGender,setIsValidGender] = useState<number>(0)
  const [isValidAge,setIsValidAge] = useState<number>(0)
  const [isValidEmail,setIsValidEmail] = useState<number>(0)

  const handleSubmit = () => {
    let valid = true;
    if (name.trim() === "") {
        setIsValidName(-1)
        valid = false
    } else {
        setIsValidName(1);
    }
    if (age < 0 || isNaN(age)) {
        setIsValidAge(-1)
        valid = false
    } else {
        setIsValidAge(1);
    }
    const validGenders = ["male", "female", "LGBTQIA+", "Not specify"];
    if (!validGenders.includes(gender)) {
        setIsValidGender(-1)
        valid = false;
    } else {
        setIsValidGender(1);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setIsValidEmail(-1);
        valid = false;
    } else {
        setIsValidEmail(1);
    }  
    
    if (valid) {
        
        localStorage.setItem("name",name)
        localStorage.setItem("gender",gender)
        localStorage.setItem("age",String(age))
        localStorage.setItem("email",email)

        console.log(`Form submitted: 
            ${localStorage.getItem("name")},
            ${localStorage.getItem("gender")},
            ${localStorage.getItem("age")},
            ${localStorage.getItem("email")},
            `)
                       
        router.push("/1-10")
      } else {
        console.log("Form validation failed.");
      }
  }



  

  return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
      className={cn(
        notoThai.className,
        "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]"
      )}
    >
      {/* ปุ่มย้อนกลับ */}
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/1-8" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="black" />
          <h1
            className={cn(anuphan.className, "text-[15px] ml-1")}
          >
            ย้อนกลับ
          </h1>
        </Link>
      </div>

      {/* ภาพตรงกลาง */}
      <div
        
        className="flex flex-col justify-center items-left flex-1 w-full pt-[48px]"
      >
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
            className="flex flex-col items-center justify-center bg-[#F4F4F4] py-[20px] px-[20px] border-[2px] rounded-[4px]"
        
        >
            <div className="flex flex-col text-[18px] pb-[20px] font-semibold items-center justify-center" >
                <h1>ก่อนเริ่มภารกิจ</h1>
                <h1>เราขอรู้จักคุณเพิ่มเติม</h1>
            </div>

            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">นามแฝง</h1>
                <textarea 
                    className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0]  resize-none
                    border-[1px]  rounded-[12px] focus:outline-none
                    justify-center items-center pl-[15px] align-middle 
                    ${isValidName !== -1 ? "border-[#D1D1D1]" : "border-[#CE1515]"}
                    `)
                    }
                    placeholder="ระบุชื่อที่คุณต้องการให้รู้จักในหน่วยต่อต้าน"
                    onChange={(e)=>setName(e.target.value)}
                    >
                </textarea>
                { isValidName === -1 && 
                <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>กรุณาระบุชื่อ/นามแฝงของคุณ</h1>
                }
            </div>

            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">เพศ</h1>
                <div 
                    className={cn(anuphan.className,`h-[40px]  w-full flex flex-row  resize-none
                    justify-center items-center  font-light gap-2
                    `)
                    }

                    >
                        <h1 
                        className={cn(anuphan.className,`h-[40px] w-[60px] leading-[45px] flex flex-col 
                        border-[1px]  rounded-[999px] focus:outline-none 
                        justify-center items-center align-middle
                        ${gender=="male" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}
                        `)}
                        onClick={()=>setGender("male")}
                        >ชาย</h1>
                        <h1 
                        className={cn(anuphan.className,`h-[40px] w-[60px] leading-[45px] flex flex-col bg-[#F0F0F0] 
                        border-[1px]  rounded-[999px] focus:outline-none border-[#D1D1D1]
                        justify-center items-center align-middle 
                        ${gender=="female" ?  "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}
                        `)}
                        onClick={()=>setGender("female")}
                        >หญิง</h1>
                        <h1 
                        className={cn(anuphan.className,`h-[40px] w-[100px] leading-[45px] flex flex-col bg-[#F0F0F0] 
                        border-[1px]  rounded-[999px] focus:outline-none border-[#D1D1D1]
                        justify-center items-center align-middle 
                        ${gender=="LGBTQIA+" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}
                        `)}
                        onClick={()=>setGender("LGBTQIA+")}
                        >LGBTQIA+</h1>
                        <h1 
                        className={cn(anuphan.className,`h-[40px] w-[70px] leading-[45px] flex flex-col bg-[#F0F0F0] 
                        border-[1px]  rounded-[999px] focus:outline-none border-[#D1D1D1]
                        justify-center items-center align-middle 
                        ${gender=="Not specify" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}
                        `)}
                        onClick={()=>setGender("Not specify")}
                        >ไม่ระบุ</h1>
                        
                        
                </div>
                { isValidGender === -1 && 
                <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>กรุณาระบุเพศของคุณ</h1>
                }
            </div>

            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">อายุ</h1>
                <textarea 
                    className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0]  resize-none
                    border-[1px]  rounded-[12px] focus:outline-none
                    justify-center items-center pl-[15px] align-middle 
                    ${isValidAge !== -1 ? "border-[#D1D1D1]" : "border-[#CE1515]"}
                    `)
                    }
                    placeholder="ตัวเลขนี้จะถูกเก็บเป็นความลับ"
                    onChange={(e)=>setAge(Number(e.target.value))}
                    >
                </textarea>
                { isValidAge === -1 && 
                <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>กรุณาระบุอายุของคุณ</h1>
                }
            </div>

            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">อีเมลสำหรับรับสาร</h1>
                <textarea 
                    className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0]  resize-none
                    border-[1px]  rounded-[12px] focus:outline-none
                    justify-center items-center pl-[15px] align-middle 
                    ${isValidEmail !== -1 ? "border-[#D1D1D1]" : "border-[#CE1515]"}
                    `)
                    }
                    placeholder="ช่องทางนี้เพื่อส่งมอบภารกิจต่อไป"
                    onChange={(e)=>setEmail(e.target.value)}
                    >
                </textarea>
                { isValidEmail === -1 && 
                <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>กรุณาระบุอีเมลของคุณ</h1>
                }
            </div>

            
        </motion.div>

    
        


      </div>

      

      {/* ปุ่มถัดไป */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ease: "easeOut", duration: duration, delay: 0.4 }}
        className="flex flex-col py-[20px] h-[88px] w-full items-center z-10"
        onClick={handleSubmit}
        >
        {/* <Link href="/1-10" className="h-[48px] w-full"> */}
          <YellowButton text="เริ่มภารกิจ" />
        {/* </Link> */}
      </motion.div>
    </motion.div>
  );
}
