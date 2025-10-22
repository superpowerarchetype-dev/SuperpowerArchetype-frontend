'use client';
import { useState } from "react";
import { anuphan } from "./font";
import { cn } from "~/lib/utils";

export default function YellowButton({ text }: { text: string } , ) {
  const [isHold, setIsHold] = useState(false);

  return (
    <div
      className={cn(anuphan.className,`flex flex-col items-center w-full h-full border-2 border-[#0A0A0A] text-center transition-all duration-150 rounded-[4px]
      ${isHold ? 'bg-[#B2B20E] border-b-2' : 'bg-[#FFFF00] border-b-4'}`)}
    >
      <button
        className="flex items-center justify-center w-full h-full text-black rounded-[4px] text-center py-2"
        onMouseDown={() => setIsHold(true)}
        onMouseUp={() => setIsHold(false)}
        onMouseLeave={() => setIsHold(false)}
        onTouchStart={() => setIsHold(true)}   // mobile support
        onTouchEnd={() => setIsHold(false)}    // mobile support
      >
        {text}
      </button>
    </div>
  );
}
