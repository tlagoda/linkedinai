import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { LinkedInService } from "@/services/linkedin.service";

export default function PublishButton({
  content,
  notifySuccessPublish,
  images,
  video,
}: {
  content: string;
  notifySuccessPublish: any;
  images: File[] | undefined;
  video: File | undefined;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePublish = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    const binaryImages: (ArrayBuffer | undefined)[] = [];
    let binaryVideo;

    if (images && images.length) {
      await Promise.all(
        images.map(async (image) => {
          const imageBinary = await convertToBinary(image);
          binaryImages.push(imageBinary);
        })
      );
    }

    if (video) {
      binaryVideo = await convertToBinary(video);
    }

    function generateRandomLetters() {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let randomLetters = '';
    
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters.charAt(randomIndex);
        randomLetters += randomLetter;
      }
    
      return randomLetters;
    }

    const tempContent = generateRandomLetters()

    await LinkedInService.shareOnLinkedIn(tempContent, binaryImages, binaryVideo);
    notifySuccessPublish();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const convertToBinary = (file: File): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        resolve(e.target?.result as ArrayBuffer);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <>
      <button
        onClick={handlePublish}
        className="text-xl font-bold bg-emerald-400 md:bg-transparent text-black w-2/3 my-8 md:my-0 md:w-1/2  mx-auto h-3/5 py-4 md:py-10 border-black md:border-emerald-400 border-4 md:text-slate-100 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center hover:bg-emerald-400 hover:text-black hover:border-emerald-400"
      >
        Publish!{" "}
        <span role="img" aria-label="Rocket" className="ml-2 animate-bounce">
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
