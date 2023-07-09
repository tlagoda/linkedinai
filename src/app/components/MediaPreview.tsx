import React from 'react';
import VideoPreview from './VideoPreview';
import ImagePreview from './ImagePreview'; // Assurez-vous que le chemin d'importation est correct

type MediaPreviewProps = {
  video: File | undefined;
  images: File[] | undefined;
};

const MediaPreview: React.FC<MediaPreviewProps> = ({ video, images }) => {
    if (!video && (!images || images.length === 0)) {
        return null;
    }

    return (
      <div>
        {video && <VideoPreview video={video} />}
        {images && images.length > 0 && <ImagePreview images={images} />}
      </div>
    );
};

export default MediaPreview;
