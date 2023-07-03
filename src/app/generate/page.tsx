"use client";

import LinkedInPost from "../components/LinkedInPost";
import Prompt from "../components/Prompt";
import { DEFAULT_LINKEDIN_CONTENT, promptTips } from "./constants/constants";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "../components/Toggle";
import { HorizontalDivider } from "../components/HorizontalDivider";
import Avatar from "../components/Avatar";
import OptionsPanel from "../components/optionsPanels/OptionsPanel";
import { optionsData } from "../components/optionsPanels/data";
import GenerateButton from "../components/GenerateButton";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute";
import PublishButton from "../components/PublishButton";
import { initializeAuthListener } from "../redux/features/user/userSlice";

export default function Page() {
  const [content, setContent] = useState(DEFAULT_LINKEDIN_CONTENT);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [customPrompt, setCustomPrompt] = useState(false);
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(initializeAuthListener());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize(); // Call the function once initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const notifyError = () =>
    toast.error("Cannot generate content, an error occured!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  return (
    <ProtectedRoute>
      <div className="md:h-screen w-screen md:max-h-screen bg-gray-900 font-mono text-slate-100 flex flex-col md:flex-row">
        <div className="fixed md:absolute top-0 right-0 m-2 md:m-4 z-10">
          <Avatar linkedInProfilePicUrl={user.linkedInProfilePicUrl} />
        </div>
        <div className="w-screen md:w-1/3 md:h-full bg-gray-800 pt-5 pb-5 md:pb-0">
          {!tailwindMd && (
            <h1 className="text-center text-3xl animate-fadeIn2s">
              l<span className="font-bold text-violet-500">AI</span>nkedIn
            </h1>
          )}
          <div>
            <Toggle togglePrompt={setCustomPrompt} />
            <HorizontalDivider />
            <p className="mx-8 mt-4 text-justify">
              Customize your posts, access brilliant LinkedIn content, and
              elevate your online presence:
            </p>
            {customPrompt && (
              <>
                <HorizontalDivider />
                <div className="mx-8">
                  <h3 className="mb-4 text-center text-2xl font-bold text-violet-500">
                    Tips for custom prompts:
                  </h3>
                  <ul className="list-decimal ml-8">
                    {promptTips.map((tip: string, index: number) => (
                      <li
                        key={index}
                        className="mb-4 marker:text-violet-500 marker:text-lg"
                      >
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          {!customPrompt && <OptionsPanel optionsData={optionsData} />}
        </div>
        <div className="w-screen md:w-2/3 h-full flex flex-col py-2 md:py-4 px-8 md:px-20">
          <div className="h-full flex flex-col">
            {!tailwindMd && tailwindMd !== undefined && (
              <div className="h-1/4 flex items-center">
                {customPrompt ? (
                  <Prompt
                    handleSendMessage={setContent}
                    setDisplayLoader={setDisplayLoader}
                    notifyError={notifyError}
                    content={content}
                  />
                ) : (
                  <div className="w-full md:w-3/5 md:mx-auto md:flex h-1/4 md:justify-between md:align-center">
                    <GenerateButton
                      handleSendMessage={setContent}
                      setDisplayLoader={setDisplayLoader}
                      notifyError={notifyError}
                    />
                  </div>
                )}
              </div>
            )}
            <div className="h-3/4 flex flex-col">
              {tailwindMd && (
                <h1 className="text-center text-3xl animate-fadeIn2s">
                  l<span className="font-bold text-violet-500">AI</span>nkedIn
                </h1>
              )}
              <LinkedInPost
                content={content}
                displayLoader={displayLoader}
                linkedInProfilePicUrl={user.linkedInProfilePicUrl}
              />{" "}
            </div>
            {!tailwindMd && tailwindMd !== undefined && !customPrompt && (
              <div className="w-full h-1/4">
                <PublishButton content={content} />
              </div>
            )}
            {tailwindMd && (
              <div className="h-1/4 flex items-center">
                {customPrompt ? (
                  <Prompt
                    handleSendMessage={setContent}
                    setDisplayLoader={setDisplayLoader}
                    notifyError={notifyError}
                    content={content}
                  />
                ) : (
                  <div className="w-3/5 mx-auto flex h-1/4 justify-between align-center">
                    <GenerateButton
                      handleSendMessage={setContent}
                      setDisplayLoader={setDisplayLoader}
                      notifyError={notifyError}
                    />
                    <PublishButton content={content} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
}
