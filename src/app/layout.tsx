import type { Metadata } from "next";
import { Single_Day } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "@/components/loading";

const singleDay = Single_Day({ weight: "400" });

export const metadata: Metadata = {
  title: "Next.JS SSR Demo App",
  description: "Using The Rick and Morty AP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={"light"}>
      <body className={singleDay.className}>
        <Header />
        <div className="container flex flex-row">
          <div className="basis-1/4 overflow-auto max-h-[75vh] border-2 border-black p-2 rounded-2xl">
            <Suspense fallback={<Loading />}>
              <Sidebar />
            </Suspense>
          </div>
          <div className="basis-3/4">{children}</div>
        </div>
      </body>
    </html>
  );
}
