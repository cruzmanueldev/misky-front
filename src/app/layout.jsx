import "./globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import FloatContactUs from "@/components/home/FloatContactUs";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/home/home/Welcome";
import AnalyticsLoader from "@/components/AnalyticsLoader.client"
import CookieConsent from "@/components/CookieConsent.client"
import IconMaintenance from '@/assets/home/mantenimiento.png'
import 'antd/dist/reset.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "Mabelita Oficial",
    template: "%s | Mabelita",
  },
  // description: "Tienda online de productos Misky. Delivery rápido y calidad garantizada.",
  // keywords: ["Misky", "tienda", "delivery", "productos"],
  // openGraph: {
  //   title: "Misky Reposteria",
  //   description: "Compra productos de calidad con entrega rápida.",
  //   url: "https://miskyreposteria.es/",
  //   siteName: "Misky",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
      </head>
      <body className={`flex flex-col min-h-screen`}>
        <main className="flex-1">
          {children}
          <AnalyticsLoader gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID} />

          <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-white">

            <div className="w-full max-w-md h-3 mb-10 overflow-hidden rounded-sm">
              <div
                className="h-full w-[200%] animate-[marquee_18s_linear_infinite]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #BED0FB 0px, #BED0FB 14px, #fff 14px, #fff 28px)",
                }}
              />
            </div>

            <div className="mb-4">
              <Image
                src={IconMaintenance}
                alt="Sitio en mantenimiento"
                width={420}
                height={420}
                priority
                className="w-80 h-80 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]"
              />
            </div>

            <div className="my-3 text-4xl font-medium text-slate-900 leading-none">
              <span className="relative inline-flex h-3 w-3 mr-3 align-middle -translate-y-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </span>
              Web en mantenimiento
            </div>

            <div className="text-slate-600 font-medium max-w-md">
              <div className="text-md md:text-lg leading-6 md:leading-relaxed">
                Estamos realizando mejoras importantes.
              </div>
              <div className="text-md md:text-lg leading-6 md:leading-relaxed">
                El sitio estará disponible de nuevo muy pronto.
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
