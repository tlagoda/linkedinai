"use client";

import Image from "next/image";
import Header from "./components/Header";
import CallToActionLink from "./components/CallToActionLink";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect, useState } from "react";

export default function Home() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const CTALink = currentUser ? "/generate" : "/signup";
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize(); // Call the function once initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <div className="md:h-screen w-screen bg-gray-900 pb-10 md:pb-0 min-h-screen font-mono w-screen ">
        <Header />
        <div className="flex flex-col md:flex-row items-center py-8 md:mx-20">
          <div className="w-11/12 md:w-6/12 px-8 flex flex-col items-center md:mt-20">
            <h2 className="text-5xl md:text-8xl text-slate-100 text-center md:mb-10">
              Worry Less, Inspire More
            </h2>
            {!tailwindMd && (
              <div className="w-full  ">
                <Image
                  className="my-10"
                  alt="screenshot"
                  src="/screen-banner.png"
                  width={700}
                  height={360}
                />
              </div>
            )}
            <p className="text-l text-slate-300 text-center">
              Unleash the power of <span className="text-emerald-400">AI</span>{" "}
              with our next-generation LinkedIn posting tool. Craft{" "}
              <span className="text-emerald-400">
                engaging, top-quality content
              </span>{" "}
              and share it directly to your network with ease. Our sophisticated
              algorithms turn your ideas into compelling narratives, making
              professional networking{" "}
              <span className="text-emerald-400">more effective</span> than
              ever.
              <br />
              <br />
              <span className="text-emerald-400">Stand out</span> from the
              crowd, shape the conversation, and elevate your{" "}
              <span className="text-emerald-400">LinkedIn presence</span> with
              our unique SaaS solution.
            </p>
          </div>
          {tailwindMd && (
            <div className="w-6/12">
              <Image
                className="mx-auto"
                alt="screenshot"
                src="/screen-banner.png"
                width={700}
                height={360}
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mt-20">
          <CallToActionLink content="Try it now!" href={CTALink} />
        </div>
      </div>
    </main>
  );
}
