import React from "react";
import VideoPreview from "./VideoPreview";
import ImagePreview from "./ImagePreview";

type MediaPreviewProps = {
  video: File | undefined;
  images: File[] | undefined;
};

const MediaPreview: React.FC<MediaPreviewProps> = ({ video, images }) => {
  if (!video && (!images || images.length === 0)) {
    return (
      <div className="text-center mt-4">
        <p className="text-lg text-slate-100">You haven't added any media.</p>
      </div>
    );
  }

  return (
    <div>
      {video && <VideoPreview video={video} />}
      {images && images.length > 0 && <ImagePreview images={images} />}
    </div>
  );
};

export default MediaPreview;
