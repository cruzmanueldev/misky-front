import "./globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import FloatContactUs from "@/components/home/FloatContactUs";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/home/home/Welcome";
import AnalyticsLoader from "@/components/AnalyticsLoader.client"
import CookieConsent from "@/components/CookieConsent.client"

import 'antd/dist/reset.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: {
    default: "Misky reposteria",
    template: "%s | Misky",
  },
  description: "Tienda online de productos Misky. Delivery rápido y calidad garantizada.",
  keywords: ["Misky", "tienda", "delivery", "productos"],
  openGraph: {
    title: "Misky Reposteria",
    description: "Compra productos de calidad con entrega rápida.",
    url: "https://miskyreposteria.es/",
    siteName: "Misky",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
      </head>
      <body className={`flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-1">
          {children}
          <AnalyticsLoader gaMeasurementId={process.env.NEXT_PUBLIC_GA_ID} />
          <CookieConsent />
        </main>
        <FloatContactUs />
        <Footer />
        <Welcome/>
      </body>
    </html>
  );
}
