import "~/styles/globals.css";
import { type Metadata } from "next";
import { Anuphan, Noto_Sans_Thai_Looped } from "next/font/google";
import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "Activerse",
  description: "activerse project",
  icons: [{ rel: "icon", url: "/img/Logo.webp" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={cn(
        // anuphan.variable,
        // notoThai.variable,
        "relative mx-auto min-h-screen w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overscroll-none "
      )}
    >
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
