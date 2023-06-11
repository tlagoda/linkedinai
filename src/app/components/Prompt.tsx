"use client";

import React, { useState } from "react";

export default function Prompt() {
  const [text, setText] = useState("");

  const generate = () => {
    setText("");
  };

  return (
    <>
      <div className="mt-4 flex w-1/2 h-3/4 bg-black">
        <textarea
          className="resize-none w-5/6 px-4 py-2 rounded-l border shadow text-sm bg-white text-gray-900 focus:outline-none"
          placeholder="Enter your prompt here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={generate}
          className="px-4 py-2 w-1/6 rounded-r bg-violet-500 text-white shadow hover:bg-violet-800"
        >
          Send
        </button>
      </div>
    </>
  );
}
