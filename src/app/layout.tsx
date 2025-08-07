// import type { Metadata } from "next";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";



export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
  return (
    <html lang="en">

      <body
        className={`border-amber-700 antialiased`}
      >
        <Nav/>
        <div className=" w-full">
        {children}
        </div>
      </body>
    </html>
  );
}
