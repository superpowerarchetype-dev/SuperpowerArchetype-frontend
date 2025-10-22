import { Anuphan, Noto_Sans_Thai_Looped, Rubik } from "next/font/google";

export const anuphan = Anuphan({
    subsets: ["latin", "thai"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-anuphan",
    display: 'swap',
  
  });
  
export const notoThai = Noto_Sans_Thai_Looped({
    subsets: ["latin", "thai"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-noto-thai-looped",
    display: 'swap',
  
  });

export const rubik = Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-rubik",
    display: 'swap',
  
  });