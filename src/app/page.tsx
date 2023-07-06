"use client";

import Image from "next/image";
import Header from "./components/Header";
import CallToActionLink from "./components/CallToActionLink";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function Home() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const CTALink = currentUser ? "/generate" : "/signup";

  return (
    <main>
      <div className="min-h-screen font-mono">
        <div className="h-screen w-screen bg-gray-900 pt-4">
          <Header />
          <div className="flex mt-20 mx-auto">
            <div className="w-6/12 px-8">
              <h2 className="text-8xl text-slate-100 text-center mb-10">
                Worry Less, Inspire More
              </h2>
              <p className="text-l text-slate-300 text-center">
                Unleash the power of AI with our next-generation LinkedIn
                posting tool. Craft engaging, top-quality content and share it
                directly to your network with ease. Our sophisticated algorithms
                turn your ideas into compelling narratives, making professional
                networking more effective than ever.
                <br /><br />
                Stand out from the crowd, shape the conversation, and elevate
                your LinkedIn presence with our unique SaaS solution.
              </p>
            </div>
            <div className="w-6/12">
              <Image
                className="mx-auto"
                alt="screenshot"
                src="/screen-banner-1.png"
                width={600}
                height={320}
              />
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <CallToActionLink content="Summariz" href={CTALink} />
          </div>
        </div>
      </div>
    </main>
  );
}
