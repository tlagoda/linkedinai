import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type MediaPreviewProps = {
  media: File | null;
};

export const MediaPreview: React.FC<MediaPreviewProps> = ({ media }) => {
  const [objectUrl, setObjectUrl] = useState<string | null>(null);
  const previousUrl = useRef<string | null>(null); // keep track of the previous blob URL

  useEffect(() => {
    // If there's a new file, create a new blob URL
    if (media) {
      const url = URL.createObjectURL(media);

      // If there's a previous blob URL, revoke it
      if (previousUrl.current) {
        URL.revokeObjectURL(previousUrl.current);
      }

      previousUrl.current = url; // Update the previous blob URL
      setObjectUrl(url);
    } else {
      setObjectUrl(null);
    }

    // Cleanup function to release object URL when unmounting
    return () => {
      if (previousUrl.current) {
        URL.revokeObjectURL(previousUrl.current);
      }
    };
  }, [media]);

  return (
    <div>
      {objectUrl && media && media.type.startsWith('image/') && (
        <Image src={objectUrl} alt="Uploaded media" width={200} height={200} layout="responsive" />
      )}

      {objectUrl && media && media.type.startsWith('video/') && (
        <video src={objectUrl} controls width="320" height="240">
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};
