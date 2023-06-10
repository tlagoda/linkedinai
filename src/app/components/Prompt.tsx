"use client";

import React, { useState } from "react";

export default function Prompt() {
  const [text, setText] = useState("");

  return (
    <div className="mt-4 flex">
      <textarea
        className="resize-none w-1/3 h-20 px-4 py-2 rounded-l border shadow text-sm bg-white text-gray-900 focus:outline-none"
        placeholder="Enter your prompt here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="px-4 py-2 rounded-r bg-blue-500 text-white shadow hover:bg-blue-600">
        Send
      </button>
    </div>
  );
}
