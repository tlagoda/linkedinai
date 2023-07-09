import React from 'react';
import VideoPreview from './VideoPreview';

type MediaPreviewProps = {
  video: File | undefined;
};

const MediaPreview: React.FC<MediaPreviewProps> = ({ video }) => {
    if (!video) {
        return null;
    }

    if (Array.isArray(video)) {
        // Ignorer le rendu des images pour le moment
        return null;
    }
    console.log(video.type)
    if (video.type.startsWith('video/')) {
        return <VideoPreview video={video} />;
    }

    // Ignorer le rendu des images pour le moment
    return null;
};

export default MediaPreview;
