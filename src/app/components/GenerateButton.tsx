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
      className="text-2xl w-full h-3/5 py-10 bg-violet-500 hover:bg-violet-700 text-slate-100 py-2 px-4 rounded-3xl transition-colors duration-200 flex items-center justify-center"
      onClick={generatePost}
    >
      Generate!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        🚀
      </span>
    </button>
  );
};

export default GenerateButton;
