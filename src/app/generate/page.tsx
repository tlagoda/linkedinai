"use client";

import LinkedInPost from "../components/LinkedInPost";
import Prompt from "../components/Prompt";
import { DEFAULT_LINKEDIN_CONTENT, promptTips } from "./constants/constants";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import BackToTop from "../components/BackToTop";
import Link from "next/link";
import AddMedia from "../components/AddMedia";
import MediaPreview from "../components/MediaPreview";

export default function Page() {
  const [content, setContent] = useState(DEFAULT_LINKEDIN_CONTENT);
  const [displayLoader, setDisplayLoader] = useState(false);
  const [displayCustomPrompt, setDisplayCustomPrompt] = useState(false);
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);
  const [postImages, setPostImages] = useState<File[] | undefined>(undefined);
  const [postVideo, setPostVideo] = useState<File | undefined>(undefined);
  const [generationOptions, setGenerationOptions] = useState<
    Record<string, string | number>
  >({});

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(initializeAuthListener());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const notifyError = () =>
    toast.error("Cannot generate content, an error occured!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const notifySuccessPublish = () => {
    toast.success("Your post has been shared on LinkedIn! 🚀", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const getFormattedName = () => {
    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    return "John Doe";
  };

  return (
    <ProtectedRoute>
      <div className="md:h-screen w-screen md:max-h-screen bg-myblue-500 font-mono text-slate-100 flex flex-col md:flex-row">
        <div className="fixed md:absolute top-0 right-0 m-2 md:m-4 z-10">
          <Avatar linkedInProfilePicUrl={user.linkedInProfilePicUrl} />
        </div>
        <div className="w-screen md:w-1/3 md:h-full bg-myviolet-500 pt-5 pb-5 md:pb-0 overflow-y-auto flex-grow">
          {!tailwindMd && (
            <Link href="/">
              <h1 className="text-center text-3xl animate-fadeIn2s">
                <span className="font-bold text-emerald-400">A</span>ppName
              </h1>
            </Link>
          )}
          <div>
            <h2 className="text-center text-3xl  w-4/5 mx-auto">
              Design your post
            </h2>
            {/* <Toggle togglePrompt={setDisplayCustomPrompt} /> */}
            <HorizontalDivider />
            <p className="mx-8 mt-4 mb-10 text-justify">
              With the Ultimate LinkedIn Post Generator, customize your posts,
              access brilliant LinkedIn content, and elevate your online
              presence:
            </p>
            {displayCustomPrompt && (
              <>
                <HorizontalDivider />
                <div className="mx-8">
                  <h3 className="mb-4 text-center text-2xl font-bold text-blue-500">
                    Tips for custom prompts:
                  </h3>
                  <ul className="list-decimal ml-8">
                    {promptTips.map((tip: string, index: number) => (
                      <li
                        key={index}
                        className="mb-4 marker:text-blue-500 marker:text-lg"
                      >
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
          {!displayCustomPrompt && (
            <OptionsPanel
              optionsData={optionsData}
              updateOptions={setGenerationOptions}
            />
          )}
        </div>
        <div className="w-screen relative pb-16 md:w-2/3 h-full flex flex-col py-2 md:py-4 px-8 md:px-0">
          <div className="h-full flex flex-col">
            {!tailwindMd && tailwindMd !== undefined && (
              <div className="h-1/4 md:flex md:items-center">
                {displayCustomPrompt ? (
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
                      generationOptions={generationOptions}
                      useOwnApiKey={user.useOwnApiKey}
                    />
                  </div>
                )}
              </div>
            )}
            <div className="overflow-y-auto h-full flex flex-col">
              {tailwindMd && (
                <Link href="/">
                  <h1 className="text-center text-3xl animate-fadeIn2s">
                    <span className="font-bold text-emerald-400">A</span>ppName
                  </h1>
                </Link>
              )}
              <LinkedInPost
                content={content}
                setContent={setContent}
                displayLoader={displayLoader}
                linkedInProfilePicUrl={user.linkedInProfilePicUrl}
                nameOfUser={getFormattedName()}
                job={user.job}
                company={user.company}
              />{" "}
              <MediaPreview
                video={postVideo}
                images={postImages}
                onVideoRemove={() => setPostVideo(undefined)}
                onImageRemove={(imageIndex: number) => {
                  setPostImages(
                    postImages?.filter((_, index) => index !== imageIndex)
                  );
                }}
              />
              {displayCustomPrompt && !tailwindMd && (
                <AddMedia
                  setPostVideo={setPostVideo}
                  setPostImages={setPostImages}
                  disableImages={postImages?.length === 9}
                />
              )}
            </div>
            {!tailwindMd &&
              tailwindMd !== undefined &&
              !displayCustomPrompt && (
                <div className="w-full h-1/4">
                  <AddMedia
                    setPostVideo={setPostVideo}
                    setPostImages={setPostImages}
                    disableImages={postImages?.length === 9}
                  />
                  <PublishButton
                    content={content}
                    notifySuccessPublish={notifySuccessPublish}
                    images={postImages}
                    video={postVideo}
                  />
                </div>
              )}
            {tailwindMd && (
              <div className="h-2/5">
                {displayCustomPrompt ? (
                  <div className="w-3/5 mx-auto flex flex-col md:py-4 justify-between h-full">
                    <AddMedia
                      setPostVideo={setPostVideo}
                      setPostImages={setPostImages}
                      disableImages={postImages?.length === 9}
                    />
                    <Prompt
                      handleSendMessage={setContent}
                      setDisplayLoader={setDisplayLoader}
                      notifyError={notifyError}
                      content={content}
                    />
                  </div>
                ) : (
                  <div className="w-3/5 mx-auto flex flex-col md:py-4 justify-between h-full">
                    {tailwindMd && (
                      <AddMedia
                        setPostVideo={setPostVideo}
                        setPostImages={setPostImages}
                        disableImages={postImages?.length === 9}
                      />
                    )}
                    <div className="flex justify-between items-end">
                      <GenerateButton
                        handleSendMessage={setContent}
                        setDisplayLoader={setDisplayLoader}
                        notifyError={notifyError}
                        generationOptions={generationOptions}
                        useOwnApiKey={user.useOwnApiKey}
                      />
                      <PublishButton
                        content={content}
                        notifySuccessPublish={notifySuccessPublish}
                        images={postImages}
                        video={postVideo}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {!tailwindMd && <BackToTop />}
        </div>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
}
