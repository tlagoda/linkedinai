"use client";

import LinkedInPost from "../components/LinkedInPost";
import Prompt from "../components/Prompt";
import { DEFAULT_LINKEDIN_CONTENT } from "./constants/constants";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "../components/Toggle";

export default function Page() {
  const [content, setContent] = useState(DEFAULT_LINKEDIN_CONTENT);
  const [displayLoader, setDisplayLoader] = useState(false);

  const notifyError = () =>
    toast.error("Canno't generate content, an error occured!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const handleSendMessage = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 font-mono text-slate-100 flex">
      <div className="w-1/4 h-full bg-gray-800">
        <Toggle />
        <div className="w-4/5 h-px bg-gray-300 my-4 mx-auto"></div>
      </div>
      <div className="w-3/4 h-full flex flex-col p-4">
        <div className="h-full flex flex-col">
          <div className="h-3/4 flex flex-col">
            <LinkedInPost content={content} displayLoader={displayLoader} />
          </div>
          <div className="h-1/4 flex items-center">
            <Prompt
              handleSendMessage={handleSendMessage}
              setDisplayLoader={setDisplayLoader}
              notifyError={notifyError}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
