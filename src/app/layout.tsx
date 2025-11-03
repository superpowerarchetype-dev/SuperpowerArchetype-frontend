import "~/styles/globals.css";
import { type Metadata } from "next";
import { Anuphan, Noto_Sans_Thai_Looped } from "next/font/google";
import { cn } from "../lib/utils";
import Script from "next/script";
import Sounds from "~/component/sound";
import SoundToggle from "~/component/sound_toggle";


export const metadata: Metadata = {
  title: "Activerse",
  description: "Resist The Silence",
  icons: [{ rel: "icon", url: "/img/Logo.webp" }],
  openGraph: {
    title: "Activerse",
    description: "activerse project",
    url: "https://activerse.amnesty.or.th",
    images: [
      {
        url: "/img/Logo.webp", // OG image path
        width: 1200,
        height: 630,
        alt: "Activerse OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Activerse",
    description: "Resist The Silence",
    images: ["/img/Logo.webp"],
  },
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
      <head>
        {/* GTM script in head */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WMK9QLR');`}
        </Script> 
      </head>
      <body
        className=""
      >
        {/* GTM noscript immediately after body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WMK9QLR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Sounds/>

        {children}
      </body>
    </html>
  );
}
