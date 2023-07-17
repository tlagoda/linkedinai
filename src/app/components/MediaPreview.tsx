import React from "react";
import VideoPreview from "./VideoPreview";
import ImagePreview from "./ImagePreview";

type MediaPreviewProps = {
  video: File | undefined;
  images: File[] | undefined;
  onVideoRemove: () => void; // Function to call when video is removed
  onImageRemove: (imageIndex: number) => void; // Function to call when an image is removed
};

const MediaPreview: React.FC<MediaPreviewProps> = ({
  video,
  images,
  onVideoRemove,
  onImageRemove,
}) => {
  if (!video && (!images || images.length === 0)) {
    return (
      <div className="text-center mt-4">
        <p className="text-lg text-slate-100">
          You haven&apos;t added any media.
        </p>
      </div>
    );
  }

  return (
    <div>
      {video && <VideoPreview video={video} onVideoRemove={onVideoRemove} />}
      {images && images.length > 0 && (
        <>
          <div className="text-center my-4">
            <p className="text-lg text-slate-100">
              You have added {images.length} image{images.length > 1 ? "s" : ""}
              . (max 9)
            </p>
          </div>

          <ImagePreview images={images} onImageRemove={onImageRemove} />
        </>
      )}
    </div>
  );
};

export default MediaPreview;
