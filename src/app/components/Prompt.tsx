"use client";

import { useState } from "react";
import { GptService } from "@/services/gpt.service";
import { DEFAULT_LINKEDIN_CONTENT } from "../generate/constants/constants";

export default function Prompt({
  handleSendMessage,
  setDisplayLoader,
  notifyError,
}: {
  handleSendMessage: any;
  setDisplayLoader: any;
  notifyError: any;
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
      <div className="mt-4 flex w-3/5 mx-auto h-3/4 bg-black">
        <button
          onClick={generatePost}
          className="px-4 py-2 w-1/4 rounded-l bg-violet-500 text-white shadow hover:bg-violet-800 text-sm"
        >
          Publish 🚀
        </button>
        <textarea
          className="resize-none w-1/2 px-4 py-2 rounded-l border shadow text-sm bg-white text-gray-900 focus:outline-none"
          placeholder="Enter your prompt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={generatePost}
          className="px-4 py-2 w-1/4 rounded-r bg-violet-500 text-white shadow hover:bg-violet-800 text-sm"
        >
          Send 📝
        </button>
      </div>
    </>
  );
}
