"use client";
import { Link } from "~/lib/navigation";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import YellowButton from "~/component/yellow_button";
import { cn } from "~/lib/utils";
import { anuphan, notoThai } from "~/component/font";
import { useRouter } from "next/navigation";
import LangToggle from "~/component/lang_toggle";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("r-2");
  const duration = 0.8;
  const router = useRouter();
  const [name,setName] = useState<string>("");
  const [gender,setGender] = useState<string>("");
  const [age,setAge] = useState<number>(-1);
  const [email,setEmail] = useState<string>("");

  const [isValidName,setIsValidName] = useState<number>(0);
  const [isValidGender,setIsValidGender] = useState<number>(0);
  const [isValidAge,setIsValidAge] = useState<number>(0);

  const handleSubmit = () => {
    let valid = true;
    if (name.trim() === "") {
        setIsValidName(-1);
        valid = false;
    } else {
        setIsValidName(1);
    }
    if (age < 0 || isNaN(age)) {
        setIsValidAge(-1);
        valid = false;
    } else {
        setIsValidAge(1);
    }
    const validGenders = ["male", "female", "Agender","Non-binary" , "Prefer to self-identity", "Not specify"];
    if (!validGenders.includes(gender)) {
        setIsValidGender(-1);
        valid = false;
    } else {
        setIsValidGender(1);
    }

    if (valid) {
        localStorage.setItem("name",name);
        localStorage.setItem("gender",gender);
        localStorage.setItem("age",String(age));
        localStorage.setItem("email",email);
        router.push("/1-8");
      } else {
        console.log("Form validation failed.");
      }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className={cn(notoThai.className, "relative flex flex-col justify-between items-center w-full h-screen overflow-hidden text-[#0A0A0A] px-[20px]")}>
      <LangToggle color='black' /> 
      <div className="absolute top-0 left-0 flex h-[48px] w-full items-center px-[20px]">
        <Link href="/r-1" className="flex flex-row items-center text-[#0A0A0A]">
          <ChevronLeft color="black" />
          <h1 className={cn(anuphan.className, "text-[15px] ml-1")}>{t("back")}</h1>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-left flex-1 w-full pt-[30px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className="flex flex-col items-center justify-center bg-[#F4F4F4] py-[20px] px-[20px] border-[2px] rounded-[4px]">
            <div className="flex flex-col text-[18px] pb-[20px] font-semibold items-center justify-center" >
                <h1>{t("beforeMission")}</h1>
                <h1>{t("knowYou")}</h1>
            </div>

            {/* Name Input */}
            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">{t("alias")}</h1>
                <textarea className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0] resize-none border-[1px] rounded-[12px] focus:outline-none justify-center items-center pl-[15px] align-middle ${isValidName !== -1 ? "border-[#D1D1D1]" : "border-[#CE1515]"}`)}
                    placeholder={t("aliasPlaceholder")} onChange={(e)=>setName(e.target.value)}>
                </textarea>
                { isValidName === -1 && <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>{t("errorName")}</h1> }
            </div>

            {/* Gender Input */}
            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">{t("gender")}</h1>
                <div className={cn(anuphan.className,`h-[40px] w-full flex flex-row resize-none justify-center items-center font-light gap-2`)}>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[60px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="male" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("male")}>{t("male")}</h1>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[60px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="female" ?  "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("female")}>{t("female")}</h1>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[100px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="Agender" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("Agender")}>Agender</h1>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[100px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="Non-binary" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("Non-binary")}>Non-binary</h1>
                </div>
                <div className={cn(anuphan.className,`h-[40px] w-full flex flex-row resize-none justify-center items-center font-light gap-2 mt-[10px]`)}>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[200px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="Prefer to self-identity" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("Prefer to self-identity")}>{t("selfIdentity")}</h1>
                        <h1 className={cn(anuphan.className,`h-[40px] w-[100px] leading-[45px] flex flex-col border-[1px] rounded-[999px] focus:outline-none justify-center items-center align-middle ${gender=="Not specify" ? "border-[#000000] bg-[#FFFF00]" : "border-[#D1D1D1] bg-[#F0F0F0]"}`)} onClick={()=>setGender("Not specify")}>{t("notSpecify")}</h1>
                </div>
                { isValidGender === -1 && <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>{t("errorGender")}</h1> }
            </div>

            {/* Age Input */}
            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">{t("age")}</h1>
                <textarea className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0] resize-none border-[1px] rounded-[12px] focus:outline-none justify-center items-center pl-[15px] align-middle ${isValidAge !== -1 ? "border-[#D1D1D1]" : "border-[#CE1515]"}`)}
                    placeholder={t("agePlaceholder")} onChange={(e)=>setAge(Number(e.target.value))}>
                </textarea>
                { isValidAge === -1 && <h1 className={cn(anuphan.className,"text-[14px] text-[#CE1515]")}>{t("errorAge")}</h1> }
            </div>

            {/* Email Input */}
            <div className="w-full pb-[20px]">
                <h1 className="font-light text-[15px] pb-[4px] text-[#0A0A0A]">{t("email")} <span className="font-semibold text-[12px]">{t("optional")}</span></h1>
                <textarea className={cn(anuphan.className,`h-[50px] leading-[45px] w-full flex flex-col bg-[#F0F0F0] resize-none border-[1px] rounded-[12px] focus:outline-none justify-center items-center pl-[15px] align-middle border-[#D1D1D1]`)}
                    placeholder={t("emailPlaceholder")} onChange={(e)=>setEmail(e.target.value)}>
                </textarea>
                <h1 className="font-light text-[10px] mt-[10px]">{t("emailNote1")}</h1>
                <h1 className="font-light text-[10px]">{t("emailNote2")}</h1>
            </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "easeOut", duration: duration, delay: 0.4 }} className="flex flex-col py-[20px] h-[88px] w-full items-center z-10" onClick={handleSubmit}>
            <YellowButton text={t("startMission")} />
        </motion.div>
      </div>
    </motion.div>
  );
}