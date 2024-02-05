import Sidebar from "@/components/sidebar";
import { Suspense } from "react";
import Loading from "@/components/loading";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="basis-1/4 overflow-auto max-h-screen sticky top-0 border-2 border-black p-2 my-2 rounded-2xl">
        <Suspense fallback={<Loading />}>
          <h2 className="text-center text-2xl underline sticky -top-2 bg-white w-full">Episodes</h2>
          <Sidebar />
        </Suspense>
      </div>
      <div className="basis-3/4">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}
