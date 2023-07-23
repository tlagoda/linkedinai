"use client";

import Header from "./components/Header";
import Image from "next/image";
import OverlapingAvatars from "./components/OverlapingAvatars";

export default function Home() {
  return (
    <main className="bg-myblue-500">
      <Header />
      <div className="bg-myblue-500 text-slate-100 min-h-screen pb-20">
        <div className="flex my-10 w-2/3 mx-auto">
          <div className="w-1/2 mx-10 mx-10 flex flex-col justify-center">
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
              className="rounded-xl border-2 border-emerald-400"
              src="/landing-1.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div className="w-full my-20 h-40 flex justify-center items-center">
          <div className="flex items-center justify-between">
            <span className="mr-4">
              Empower your network and inspire others!
            </span>
            <OverlapingAvatars />
          </div>
        </div>
        <div className="flex my-10 w-2/3 mx-auto">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl border-2 border-emerald-400"
              src="/creativity.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
          <div className="w-1/2 mx-10 flex flex-col justify-center">
            <h3 className="text-6xl mb-10 font-bold">
              Boost Creativity and Enhance Your Online Presence!
            </h3>
            <p className="mb-10">
              Kouim is your ultimate creative companion for LinkedIn. With this
              ultimate LinkedIn post generator, you will discover new ways to
              express yourself and captivate your audience. Elevate your online
              presence and stand out in the crowd. Join now and experience the
              power of limitless creativity on LinkedIn!
            </p>
            <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
              Create!
            </button>
          </div>
        </div>
        <div className="h-40 bg-blue-100">

        </div>
        <div className="flex my-10 w-2/3 mx-auto my-40">
          <div className="w-1/2 mx-10 flex flex-col justify-center">
            <h3 className="text-6xl mb-10 font-bold">
              Achieve More in Less Time with Kouim{" "}
            </h3>
            <p className="mb-10">
              Unlock your productivity with Kouim! Our powerful SaaS platform
              simplifies LinkedIn post creation and sharing, saving you valuable
              time. Join now and maximize your social media impact.
            </p>
            <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
              Save time!
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl border-2 border-emerald-400"
              src="/time-saver.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
