"use client";

import LinkedInPost from "../components/LinkedInPost";
import Prompt from "../components/Prompt";
import { DEFAULT_LINKEDIN_CONTENT } from "./constants/constants";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "../components/Toggle";
import { HorizontalDivider } from "../components/HorizontalDivider";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [content, setContent] = useState(DEFAULT_LINKEDIN_CONTENT);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(true);

  const { currentUser } = useContext(AuthContext);
  const history = useRouter();

  useEffect(() => {
    if (!currentUser) {
      history.push("/login");
    }
  }, [currentUser, history]);

  const notifyError = () =>
    toast.error("Canno't generate content, an error occured!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <div className="h-screen w-screen bg-gray-900 font-mono text-slate-100 flex">
      <div className="w-1/4 h-full bg-gray-800">
        <Toggle togglePrompt={setCustomPrompt} />
        <HorizontalDivider />
      </div>
      <div className="w-3/4 h-full flex flex-col p-4">
        <div className="h-full flex flex-col">
          <div className="h-3/4 flex flex-col">
            <LinkedInPost content={content} displayLoader={displayLoader} />
          </div>
          <div className="h-1/4 flex items-center">
            {customPrompt && (
              <Prompt
                handleSendMessage={setContent}
                setDisplayLoader={setDisplayLoader}
                notifyError={notifyError}
              />
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
