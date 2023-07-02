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
      <div className="mt-4 flex w-3/5 mx-auto h-3/4">
        <textarea
          className="resize-none w-8/12 px-4 py-2 rounded-l border-2 border-gray-800 shadow text-sm bg-white text-gray-900 focus:outline-none"
          placeholder="Enter your prompt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-col w-4/12">
          <button
            onClick={generatePost}
            className="px-4 py-2 w-full h-1/2 rounded-tr bg-violet-500 border-2 border-gray-800 text-white shadow hover:bg-violet-800 text-sm transition-colors duration-300 ease-in-out"
          >
            Generate
          </button>
          <button
            onClick={generatePost}
            className="px-4 py-2 w-full h-1/2 rounded-br bg-violet-500 border-2 border-gray-800 text-white shadow hover:bg-violet-800 text-sm transition-colors duration-300 ease-in-out"
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
