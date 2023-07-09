import { useState, useEffect } from "react";
import VideoPreview from "./VideoPreview";

enum MediaType {
  Image = "image",
  Video = "video",
}

type MediaPreviewProps = {
  media: File[] | null;
};

export const MediaPreview: React.FC<MediaPreviewProps> = ({ media }) => {
  const [mediaType, setMediaType] = useState<MediaType | undefined>(undefined);

  useEffect(() => {
    if (!media) return;

    if (media.length === 1) {
      const file = media[0];
      if (file.type.startsWith("image/")) {
        setMediaType(MediaType.Image);
      } else if (file.type.startsWith("video/")) {
        setMediaType(MediaType.Video);
      } else {
        setMediaType(undefined);
      }
    } else {
      setMediaType(undefined);
    }
  }, [media]);

  return (
    <>
      {mediaType === MediaType.Video && <VideoPreview video={media}/>}
    </>
  );
};
