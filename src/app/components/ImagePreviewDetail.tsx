import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ImagePreviewDetailProps = {
  image: string;
  nextImage: () => void;
  prevImage: () => void;
  hasMultipleImages: boolean;
  closeImage: () => void;
};

export default function ImagePreviewDetail({
  image,
  nextImage,
  prevImage,
  hasMultipleImages,
  closeImage,
}: ImagePreviewDetailProps) {
  const closeOnBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-10"
      onClick={closeOnBackgroundClick}
    >
      {hasMultipleImages && (
        <FaArrowLeft
          className="absolute top-1/2 left-2 transform -translate-y-1/2 text-emerald-400 cursor-pointer z-20"
          size={50}
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
        />
      )}
      <img
        src={image}
        alt="Full-size preview"
        style={{ maxWidth: "70%", maxHeight: "80%", objectFit: "contain" }}
        className="border-2 rounded-lg border-emerald-400"
      />
      {hasMultipleImages && (
        <FaArrowRight
          className="absolute top-1/2 right-2 transform -translate-y-1/2 text-emerald-400 cursor-pointer z-20"
          size={50}
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        />
      )}
    </div>
  );
}
