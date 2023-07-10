"use client";

import { useState } from "react";
import { GptService } from "@/services/gpt.service";
import { DEFAULT_LINKEDIN_CONTENT } from "../generate/constants/constants";

export default function Prompt({
  handleSendMessage,
  setDisplayLoader,
  notifyError,
  content,
}: {
  handleSendMessage: any;
  setDisplayLoader: any;
  notifyError: any;
  content: string;
}) {
  const [text, setText] = useState("");

  const generatePost = async () => {
    setDisplayLoader(true);
    try {
      const linkedInPost = await GptService.generate(text);
      if (!linkedInPost) {
        throw new Error();
      }
      handleSendMessage(linkedInPost);
      setDisplayLoader(false);
    } catch (error) {
      handleSendMessage(DEFAULT_LINKEDIN_CONTENT);
      setDisplayLoader(false);
      notifyError();
    }
  };

  return (
    <>
      <div className="mt-4 flex flex-col md:flex-row md:w-4/5 mx-auto h-3/4 mb-4 md:mb-0">
        <textarea
          className="resize-none w-full md:w-8/12 h-40 md:h-full px-4 py-2 rounded-t border-b-0 md:rounded-t-none md:rounded-l border-2 md:border-r-0 md:border-b-2 border-black shadow text-sm bg-slate-700 text-slate-100 focus:outline-none placeholder-slate-100"
          placeholder="Enter your prompt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-row md:flex-col md:w-4/12">
          <button
            onClick={generatePost}
            className="px-4 py-4 md:py-2 w-full h-1/2 rounded-bl md:rounded-tr md:rounded-bl-none bg-emerald-400 text-black border-r-0 md:border-r-2 border-2 md:border-b-0 border-black font-bold shadow hover:bg-emerald-600 text-sm transition-colors duration-300 ease-in-out"
          >
            Generate
            <span
              role="img"
              aria-label="Rocket"
              className="ml-2 animate-bounce"
            >
              📝
            </span>
          </button>
          <button
            onClick={generatePost}
            className="px-4 py-4 md:py-2 w-full h-1/2 rounded-br bg-emerald-400 border-2 border-black text-black font-bold shadow hover:bg-emerald-600 text-sm transition-colors duration-300 ease-in-out"
          >
            Publish
            <span
              role="img"
              aria-label="Rocket"
              className="ml-2 animate-bounce"
            >
              🚀
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
