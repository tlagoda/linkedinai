import { useState, useEffect } from "react";

enum MediaType {
  Image = "image",
  Video = "video",
  MultipleImages = "multipleImages",
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
      setMediaType(MediaType.MultipleImages);
    }
  }, [media]);

  return null;
};
