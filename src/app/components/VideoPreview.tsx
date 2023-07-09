import React, { useEffect, useState } from "react";

export default function VideoPreview({ video }: { video: File }) {
  const [videoURL, setVideoURL] = useState<string | null>(null);

  useEffect(() => {
    if (video) {
      setVideoURL(URL.createObjectURL(video));
    }

    return () => {
      if (videoURL) {
        URL.revokeObjectURL(videoURL);
      }
    };
  }, [video]);

  if (!videoURL) {
    return null;
  }

  return <video controls src={videoURL} className="w-2/5 rounded-lg mb-4 mx-auto"/>;
}
