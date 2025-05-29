import type { Metadata } from "next";
import {DM_Sans } from "next/font/google";
import Navbar from "./components/navbar/navbar";

import "./globals.css";



const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "DI ALTA CLASSE",
  description: "Let’s make your visuals extraordinary!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}  antialiased w-full flex items-center flex-col`}
      >
        <Navbar/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
