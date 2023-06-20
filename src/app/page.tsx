"use client";

import Image from "next/image";
import Header from "./components/Header";
import CallToActionLink from "./components/CallToActionLink";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

export default function Home() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const CTALink = currentUser ? "/generate" : "/login";

  return (
    <main>
      <div className="min-h-screen font-mono">
        <div className="h-screen w-screen bg-gray-900 pt-4">
          <Header title="Sumariz.ai" />
          <div className="flex mt-20 mx-auto">
            <div className="w-6/12 px-8">
              <h2 className="text-8xl text-slate-100 text-center mb-10">
                Watch Less, Know More
              </h2>
              <p className="text-l text-slate-300 text-center">
                With our innovative software, transform your lengthy videos into
                concise, accurate text summaries within moments. No more wasting
                time watching endless hours of content - our intelligent
                algorithms do the heavy lifting, converting spoken words into
                written summaries that allow you to absorb the key points at
                your own pace.
                <br />
                It&apos;s time to revolutionize how you digest information.
                Transform videos into text summaries in an instant with our
                unique SaaS solution.
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
