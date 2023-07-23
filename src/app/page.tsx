"use client";

import Header from "./components/Header";
import Image from "next/image";
import OverlapingAvatars from "./components/OverlapingAvatars";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "./components/Footer";
import Link from "next/link";
import LinkedInPost from "./components/LinkedInPost";
import { promptExamples } from "./data/landing/promptExamples";
import { useEffect, useState } from "react";

export default function Home() {
  const [promptIndex, setPromptIndex] = useState(0);

  const saasAdvantages = [
    "Effortlessly create engaging LinkedIn posts",
    "Boost your online presence with professional content",
    "Save time by streamlining the post creation process",
    "Maximize your LinkedIn potential with Kouim",
    "Post your polished and refined content directly to LinkedIn with ease",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIndex((prevState) => {
        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * promptExamples.length);
        } while (randomIndex === prevState);

        return randomIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
            <Link href="/signup">
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                Try it for free!
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <LinkedInPost
              content={promptExamples[promptIndex]}
              displayLoader={false}
              linkedInProfilePicUrl="/pp-linkedin.png"
              nameOfUser="John Doe"
              width="w-4/5"
            />
          </div>
        </div>
        <div
          id="solution-section"
          className="w-full h-40 flex justify-center items-center"
        >
          <div className="flex items-center justify-between">
            <span className="mr-4">
              Empower your network and inspire others!
            </span>
            <OverlapingAvatars />
          </div>
        </div>
        <div className="flex mt-10 mb-40 w-2/3 mx-auto">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src="/lamp-creativity.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
          <div className="w-1/2 mx-10 flex flex-col justify-center">
            <h3 className="text-6xl mb-10 font-bold">
              Boost Creativity and Enhance Your Online Presence
            </h3>
            <p className="mb-10">
              Kouim is your ultimate creative companion for LinkedIn. With this
              ultimate LinkedIn post generator, you will discover new ways to
              express yourself and captivate your audience. Elevate your online
              presence and stand out in the crowd. Join now and experience the
              power of limitless creativity on LinkedIn!
            </p>
            <Link href="/signup">
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                Create!
              </button>
            </Link>
          </div>
        </div>
        <div className="min-h-[35vh] py-10 bg-bonusSection-500 flex flex-col justify-center items-center">
          <h3 className="text-5xl font-bold text-center mb-10">
            Level up with <span className="text-emerald-400">K</span>ouim:
          </h3>
          <span className="mb-10 bg-myblue-500 py-4 px-8 rounded-3xl border border-emerald-400">
            AI powered
          </span>
          <ul>
            {saasAdvantages.map((advantage, index) => (
              <li key={index} className="flex items-center text-lg mb-4">
                <FaCheckCircle size={20} className="text-emerald-400 mr-4" />
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
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
            <Link href="/signup">
              <button className="w-1/3 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
                Save time!
              </button>
            </Link>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              className="rounded-xl"
              src="/time-saver.png"
              alt="Landing Image"
              width={450}
              height={450}
            />
          </div>
        </div>
        <div
          id="faq-section"
          className="flex my-10 w-2/3 mx-auto flex flex-col justify-center items-center"
        >
          <span className="bg-myblue-500 py-4 px-8 rounded-3xl border border-emerald-400">
            FAQ
          </span>
          <h3 className="text-5xl my-10">Frequently asked questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
            <div className="rounded-xl bg-faq-500 rounded px-8 py-8">
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-emerald-400">#</span>How does the LinkedIn
                Post Generator work?
              </h4>
              <p className="text-faq-300">
                Our LinkedIn Post Generator is powered by AI, which uses OpenAI
                to generate engaging posts based on custom inputs provided by
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
