import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto_Mono } from "next/font/google";
import 'antd/dist/reset.css';
import '@splidejs/react-splide/css';

import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

import '@splidejs/react-splide/css/core';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["500", "700"],
});


export const metadata = {
  title: "Misky reposteria",
  description: "Misky reposteria",
  icons: {
    icon: "./favicon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}  flex flex-col min-h-screen`}>
        {/* <Navbar/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
