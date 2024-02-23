import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<theActualDev />",
  description: "Olayinka's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title> {`<theActualDev />`} </title>
        <meta name="description" content="Olayinka's Portfolio" />
        <meta property="og:image" content="../public/AI.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="<theActualDev />" />
        <meta name="twitter:description" content="Olayinka's Portfolio" />
        <meta name="twitter:image" content="../public/AI.png" />
      </Head>
      <html lang="en">
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <Navbar />
          {children}
          {/* <StarsCanvas /> */}
        </body>
      </html>
    </>
  );
}
