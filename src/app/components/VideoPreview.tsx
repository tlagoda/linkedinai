import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

type VideoPreviewProps = {
  video: File | null;
  onVideoRemove: () => void;
};

export default function VideoPreview({
  video,
  onVideoRemove,
}: VideoPreviewProps) {
  const [videoURL, setVideoURL] = useState<string | null>(null);

  useEffect(() => {
    if (video) {
      const url = URL.createObjectURL(video);
      setVideoURL(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    } else {
      setVideoURL(null);
    }
  }, [video]);

  if (!videoURL) {
    return null;
  }

  return (
    <div className="relative w-full mt-4 md:mt-0 md:w-2/5 rounded-lg md:mb-10 mx-auto overflow-hidden">
      <div className="bg-emerald-400 rounded absolute top-1 right-1 cursor-pointer z-10">
        <FaTimes
          className="hover:text-black"
          size={20}
          onClick={onVideoRemove}
        />
      </div>
      <video controls src={videoURL} className="w-full h-full" />
    </div>
  );
}
