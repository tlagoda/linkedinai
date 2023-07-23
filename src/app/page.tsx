"use client";

import Header from "./components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-myblue-500">
      <Header />
      <div className="bg-myblue-500 text-slate-100 min-h-screen">
        <div className="flex my-10 w-2/3 mx-auto">
          <div className="w-1/2 mx-10">
            <h3 className="text-6xl mb-10 font-bold">
              Unlock Limitless LinkedIn Potential with Kouim
            </h3>
            <p className="mb-10">
              Unlock your LinkedIn potential with Kouim, the AI-powered post
              generator. Create custom posts, add media, and effortlessly
              publish on LinkedIn.
            </p>
            <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
              Try for free!
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src="/landing-1.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="w-full h-40 bg-red-400"></div>
      </div>
    </main>
  );
}
