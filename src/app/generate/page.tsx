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
import Avatar from "../components/Avatar";
import OptionsPanel from "../components/optionsPanels/OptionsPanel";
import { optionsData } from "../components/optionsPanels/data";
import GenerateButton from "../components/GenerateButton";

export default function Page() {
  const [content, setContent] = useState(DEFAULT_LINKEDIN_CONTENT);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(true);
  const [userJustLoggedOut, setUserJustLoggedOut] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (userJustLoggedOut) return;
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router, userJustLoggedOut]);

  const notifyError = () =>
    toast.error("Canno't generate content, an error occured!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <div className="h-screen w-screen max-h-screen bg-gray-900 font-mono text-slate-100 flex">
      <div className="absolute top-0 right-0 m-4">
        <Avatar setUserJustLoggedOut={setUserJustLoggedOut} />
      </div>
      <div className="w-1/3 h-full bg-gray-800">
        <Toggle togglePrompt={setCustomPrompt} />
        <HorizontalDivider />
        {!customPrompt && <OptionsPanel optionsData={optionsData} />}
        
      </div>
      <div className="w-2/3 h-full flex flex-col p-4">
        <div className="h-full flex flex-col">
          <div className="h-3/4 flex flex-col">
            <LinkedInPost content={content} displayLoader={displayLoader} />
          </div>
          <div className="h-1/4 flex items-center">
            {customPrompt ? (
              <Prompt
                handleSendMessage={setContent}
                setDisplayLoader={setDisplayLoader}
                notifyError={notifyError}
              />
            ) : (
              <GenerateButton
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
