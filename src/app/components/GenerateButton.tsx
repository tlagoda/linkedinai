import React from "react";
import { GptService } from "@/services/gpt.service";
import { DEFAULT_LINKEDIN_CONTENT } from "../generate/constants/constants";

const GenerateButton = ({
  handleSendMessage,
  setDisplayLoader,
  notifyError,
}: {
  handleSendMessage: any;
  setDisplayLoader: any;
  notifyError: any;
}) => {
  const generatePost = async () => {
    setDisplayLoader(true);
    try {
      const linkedInPost = await GptService.generate("TEST");
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
    <button
      className="text-xl font-bold w-1/2 mr-4 mx-auto h-3/5 py-10 border-violet-500 border-4 text-slate-100 px-4 rounded-3xl transition-colors duration-200 flex items-center justify-center hover:bg-purple-800 hover:text-white hover:border-purple-800"
      onClick={generatePost}
    >
      Generate!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        📝
      </span>
    </button>
  );
};

export default GenerateButton;
