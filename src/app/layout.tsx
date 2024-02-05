import type { Metadata } from "next";
import { Single_Day } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Suspense } from "react";
import Loading from "@/components/loading";

const singleDay = Single_Day({ weight: "400" });

export const metadata: Metadata = {
  title: "Rick and Morty Characters",
  description: "Demo App",
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
        <div className="container flex flex-row ">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
