import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";
import ImagePreviewDetail from "./ImagePreviewDetail"; // Assurez-vous que le chemin est correct

type ImagePreviewProps = {
  images: File[] | null;
  onImageRemove: (imageIndex: number) => void; // nouvelle prop
};

export default function ImagePreview({
  images,
  onImageRemove,
}: ImagePreviewProps) {
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewingImage, setViewingImage] = useState<string | null>(null);

  useEffect(() => {
    if (images) {
      const urls = images.map((image) => URL.createObjectURL(image));
      setImageURLs(urls);
      setCurrentIndex(urls.length - 1);

      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [images]);

  const deleteImage = (index: number) => {
    onImageRemove(index);
    setImageURLs((currentImages) => {
      const newImages = [...currentImages];
      newImages.splice(index, 1);
      return newImages;
    });

    setCurrentIndex((currentIndex) =>
      currentIndex >= index ? Math.max(currentIndex - 1, 0) : currentIndex
    );
  };

  const goPrev = () =>
    setCurrentIndex((index) =>
      index === 0 ? imageURLs.length - 1 : index - 1
    );
  const goNext = () =>
    setCurrentIndex((index) =>
      index === imageURLs.length - 1 ? 0 : index + 1
    );

  if (imageURLs.length === 0) {
    return null;
  }

  const openImage = () => {
    setViewingImage(imageURLs[currentIndex]);
  };

  const closeImage = () => {
    setViewingImage(null);
  };

  return (
    <div className="w-full md:w-3/5 mx-auto relative">
      <div className="relative w-5/6 md:w-2/3 rounded-lg mb-10 mx-auto bg-white h-[300px] flex px-5 justify-center items-center overflow-hidden">
        {viewingImage && (
          <ImagePreviewDetail
            image={imageURLs[currentIndex]}
            nextImage={goNext}
            prevImage={goPrev}
            hasMultipleImages={imageURLs.length > 1}
            closeImage={closeImage}
          />
        )}
        <div className="bg-emerald-400 rounded absolute top-1 right-1 cursor-pointer z-10">
          <FaTimes
            className="hover:text-black"
            size={20}
            onClick={() => deleteImage(currentIndex)}
          />
        </div>

        {imageURLs[currentIndex] && (
          <div
            className="absolute w-full h-full bg-center bg-no-repeat bg-cover cursor-pointer"
            style={{ backgroundImage: `url(${imageURLs[currentIndex]})` }}
            onClick={openImage}
          />
        )}
      </div>
      {imageURLs.length > 1 && (
        <FaArrowLeft
          className="absolute top-1/2 left-0 md:left-10 transform -translate-y-1/2 cursor-pointer text-emerald-400 z-10"
          size={30}
          onClick={goPrev}
        />
      )}
      {imageURLs.length > 1 && (
        <FaArrowRight
          className="absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 cursor-pointer text-emerald-400 z-10"
          size={30}
          onClick={goNext}
        />
      )}
    </div>
  );
}
