"use client";

import React from "react";
import { Link, usePathname } from "~/lib/navigation"
import { cn } from "../lib/utils";
import { useLocale } from "next-intl";
import { Anuphan, Inter } from "next/font/google";
import { anuphan } from "./font";



const LangToggle = ({color}:{color:string}) => {
  const locale = useLocale()
  const path = usePathname();
  return (
    
    <div className={cn(
        "absolute z-200 text-white text-[14px] gap-x-[8px] flex flex-row right-[5%] top-[10px]",
        anuphan.variable
        )}
        >
        <Link href={path} locale={"th"}
        className={cn(
            "transition-colors duration-200 ", 
            locale === "th" ? `text-${color}` : `text-${color} opacity-[50%] hover:text-gray-300`
          )}
        >
            <h1>TH</h1>
        </Link>
        <h1 className={`text-${color} opacity-[50%]`}>|</h1>
        <Link href={path} locale={"en"}
        className={cn(
            "transition-colors duration-200 ", 
            locale === "en" ? `text-${color}` : `text-${color} opacity-[50%] hover:text-gray-300`
          )}
        >
            <h1>EN</h1>
        </Link>
    </div>
  );
};

export default LangToggle;
