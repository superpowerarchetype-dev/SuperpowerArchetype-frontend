import Image from "next/image";

type ArchetypeKey =
  | "the_flame"
  | "the_guardian"
  | "the_seeder"
  | "the_spark"
  | "the_echo"
  | "the_architect";

export default function Ranking({first,second,third}:{first:string,second:string,third:string}){
    console.log(first,second,third)
    const mapText = {
        "the_flame" : ["นักสู้" , "Flame"],
        "the_guardian" : ["ผู้พิทักษ์" , "Guardian"],
        "the_seeder" : ["ผู้ปลูกสร้าง" , "Seeder"],
        "the_spark" : ["ผู้จุดประกาย" , "Spark"],
        "the_echo" : ["นักเล่าเรื่อง" , "Echo"],
        "the_architect" : ["นักวางกลยุทธ" , "Architect"],

    }
    const firstText1 = mapText[first as ArchetypeKey]?.[0] ?? "";
    const secondText1 = mapText[second as ArchetypeKey]?.[0] ?? "";
    const thirdText1 = mapText[third as ArchetypeKey]?.[0] ?? "";

    const firstText2 = mapText[first as ArchetypeKey]?.[1] ?? "";
    const secondText2 = mapText[second as ArchetypeKey]?.[1] ?? "";
    const thirdText2 = mapText[third as ArchetypeKey]?.[1] ?? "";
    return (
        <div className="relative flex items-center justify-center h-[200px] w-full">
            <Image
                src="/img/ranking.webp"
                height={150}
                width={350}
                alt='podium'
                className="absolute bottom-0 "
            >
            </Image>
            <div className="absolute bottom-[45px] flex flex-col text-center justify-center font-semibold text-[14px]">
                <h1>{firstText1}</h1>
                <h1>{firstText2}</h1>
                <Image
                src={`/img/strength_${first}.webp`}
                height={80}
                width={80}
                alt='podium'
                className="pt-[10px]"
                >
                </Image>

            </div>
            <div className="absolute left-[65px] bottom-[40px] flex flex-col text-center justify-center text-[12px]">
                <h1>{secondText1}</h1>
                <h1>{secondText2}</h1>
                <Image
                src={`/img/strength_${second}.webp`}
                height={56}
                width={56}
                alt='podium'
                className="pt-[10px]"
                >
                </Image>

            </div>
            <div className="absolute right-[60px] bottom-[40px] flex flex-col text-center justify-center text-[12px]">
                <h1>{thirdText1}</h1>
                <h1>{thirdText2}</h1>
                <Image
                src={`/img/strength_${third}.webp`}
                height={56}
                width={56}
                alt='podium'
                className="pt-[10px]"
                >
                </Image>

            </div>

        
        </div>
    )
}