import { useEffect } from "react";

export default function VideoPreview({ video }: { video: File[] | null }) {
  useEffect(() => {
    if (!video) return;

    const objectUrl = URL.createObjectURL(video[0]);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [video]);

  if (!video) {
    return null;
  }

  return (
    <video controls>
      <source src={URL.createObjectURL(video[0])} type={video[0].type} />
      Your browser does not support the video tag.
    </video>
  );
}
