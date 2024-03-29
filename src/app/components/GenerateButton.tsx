import React from "react";
import { GptService } from "@/services/gpt.service";
import { DEFAULT_LINKEDIN_CONTENT } from "../generate/constants/constants";

const GenerateButton = ({
  handleSendMessage,
  setDisplayLoader,
  notifyError,
  generationOptions,
  useOwnApiKey,
}: {
  handleSendMessage: any;
  setDisplayLoader: any;
  notifyError: any;
  generationOptions: Record<string, string | number>;
  useOwnApiKey: boolean;
}) => {
  const generatePost = async () => {
    setDisplayLoader(true);
    try {
      const linkedInPost = await GptService.generate({
        ...generationOptions,
        free: useOwnApiKey,
      });
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
      className="text-xl bg-emerald-400 md:bg-transparent text-black font-bold w-2/3 mt-2 md:mt-0 mb-8 md:mb-0 md:w-1/2 md:mr-4 mx-auto h-3/5 py-4 md:py-10 border-black md:border-emerald-400 border-4 md:text-slate-100 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-emerald-400"
      onClick={generatePost}
    >
      Generate!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        🖊️
      </span>
    </button>
  );
};

export default GenerateButton;
