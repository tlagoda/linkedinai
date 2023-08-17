"use client";

import Header from "./components/Header";
import OverlapingAvatars from "./components/OverlapingAvatars";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./components/Footer";
import Link from "next/link";
import LinkedInPost from "./components/LinkedInPost";
import { faqQandA } from "./data/landing/faq";
import { promptExamples } from "./data/landing/promptExamples";
import { useEffect, useState } from "react";
import LandingPageSection from "./components/LandingPageSection";

export default function Home() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [showPromptLoader, setShowPromptLoader] = useState(false);
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const saasAdvantages = [
    "Effortlessly create engaging LinkedIn posts",
    "Boost your online presence with professional content",
    "Save time by streamlining the post creation process",
    "Maximize your LinkedIn potential with AppName",
    "Post your polished and refined content directly to LinkedIn with ease",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromptLoader(true);

      setTimeout(() => {
        setPromptIndex((prevState) => {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * promptExamples.length);
          } while (randomIndex === prevState);

          return randomIndex;
        });

        setShowPromptLoader(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-myblue-500">
      <Header />
      <div className="bg-myblue-500 text-slate-100 min-h-screen max-w-screen overflow-hidden pb-20">
        <div className="flex flex-col md:flex-row my-10 w-full md:w-2/3 mx-auto">
          <div className="w-4:5 mx-4 md:w-1/2 md:mx-10 flex flex-col justify-center">
            <h3 className="text-5xl md:text-6xl mb-10 font-bold text-center md:text-left">
              Unlock Limitless LinkedIn Potential with AppName
            </h3>
            <p className="mb-10 text-justify md:text-left">
              Unlock your LinkedIn potential with AppName, the AI-powered post
              generator. Create custom posts, add media, and effortlessly
              publish on LinkedIn.
            </p>
            <Link href="/signup" className="mb-4 mx-auto md:mx-0 w-1/3">
              <button className="w-full bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                Try it for free!
              </button>
            </Link>
          </div>
          <div className="w-4/5 mx-auto md:mx-0 md:w-1/2 flex justify-center items-center">
            <LinkedInPost
              content={promptExamples[promptIndex]}
              displayLoader={showPromptLoader}
              linkedInProfilePicUrl="/pp-linkedin.png"
              nameOfUser="John Doe"
              width="w-4/5"
              setContent={() => null}
            />
          </div>
        </div>
        <div
          id="solution-section"
          className="w-full h-40 flex justify-center items-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {tailwindMd && (
              <span className="mr-4">
                Empower your network and inspire others!
              </span>
            )}
            <OverlapingAvatars />
            {!tailwindMd && (
              <span className="mt-4">
                Empower your network and inspire others!
              </span>
            )}
          </div>
        </div>
        <LandingPageSection
          headline="Boost Creativity and Enhance Your Online Presence"
          paragraph="AppName is your ultimate creative companion for LinkedIn. With this ultimate LinkedIn post generator, you will discover new ways to express yourself and captivate your audience. Elevate your online presence and stand out in the crowd. Join now and experience the power of limitless creativity on LinkedIn!"
          buttonText="Create!"
          imageSrc="/lamp-creativity.png"
          imageAlt="Landing Image"
          isImageOnLeft={true}
        />
        <div className="min-h-[35vh] py-10 bg-myviolet-500 flex flex-col justify-center items-center px-8 md:px-0">
          <h3 className="text-5xl font-bold text-center mb-10">
            Level up with <span className="text-emerald-400">A</span>ppName:
          </h3>
          <span className="mb-10 bg-myblue-500 py-4 px-8 rounded-3xl border border-emerald-400">
            AI powered
          </span>
          <ul>
            {saasAdvantages.map((advantage, index) => (
              <li key={index} className="flex items-center justify-between mb-4">
                <FaCheckCircle size={20} className="text-emerald-400 mr-2" />
                <p className="w-5/6 md:w-full">{advantage}</p>
              </li>
            ))}
          </ul>
        </div>
        <LandingPageSection
          headline="Achieve More in Less Time with AppName"
          paragraph="Unlock your productivity with AppName! Our powerful SaaS platform simplifies LinkedIn post creation and sharing, saving you valuable time. Join now and maximize your social media impact."
          buttonText="Save time!"
          imageSrc="/time-saver.png"
          imageAlt="Landing Image"
          isImageOnLeft={false}
        />
        <div
          id="faq-section"
          className="flex my-10 w-2/3 mx-auto flex flex-col justify-center items-center"
        >
          <span className="bg-myblue-500 py-4 px-8 rounded-3xl border border-emerald-400">
            FAQ
          </span>
          <h3 className="text-5xl my-10">Frequently asked questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {faqQandA.map((item, index) => {
              return (
                <div
                  className="rounded-xl bg-faq-500 rounded px-8 py-8"
                  key={`faq-${index}`}
                >
                  <h4 className="text-2xl font-bold mb-4">
                    <span className="text-emerald-400">#</span>
                    {item.question}
                  </h4>
                  <p className="text-faq-300">{item.answer}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
