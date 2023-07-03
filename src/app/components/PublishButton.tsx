import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { LinkedInService } from "@/services/linkedin.service";

export default function PublishButton({ content }: { content: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePublish = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    await LinkedInService.shareOnLinkedIn(content);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handlePublish}
        className="text-xl font-bold w-full my-8 md:my-0 md:w-1/2  mx-auto h-3/5 py-4 md:py-10 border-violet-500 border-4 text-slate-100 px-4 rounded-3xl transition-colors duration-200 flex items-center justify-center hover:bg-purple-800 hover:text-white hover:border-purple-800"
      >
        Publish!{" "}
        <span role="img" aria-label="Rocket" className="ml-2">
          🚀
        </span>
      </button>
      <ConfirmModal 
        isOpen={isModalOpen} 
        title="Publish on LinkedIn" 
        message="Are you sure you want to publish this content on LinkedIn?" 
        onConfirm={handleConfirm} 
        onCancel={handleCancel}
      />
    </>
  );
}
