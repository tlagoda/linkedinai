import React, { useEffect, useState } from "react";

type ImagePreviewProps = {
  images: File[] | null;
};

export default function ImagePreview({ images }: ImagePreviewProps) {
  const [imageURLs, setImageURLs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images) {
      const urls = images.map((image) => URL.createObjectURL(image));
      setImageURLs(urls);

      // Révoquer les URLs des blobs lorsqu'ils ne sont plus nécessaires
      return () => {
        urls.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [images]);

  if (imageURLs.length === 0) {
    return null;
  }

  const goPrev = () =>
    setCurrentIndex((index) =>
      index === 0 ? imageURLs.length - 1 : index - 1
    );
  const goNext = () =>
    setCurrentIndex((index) =>
      index === imageURLs.length - 1 ? 0 : index + 1
    );

  return (
    <div>
      <img
        src={imageURLs[currentIndex]}
        alt="preview"
        className="w-2/5 rounded-lg mb-4 mx-auto"
      />
      <div>
        <button onClick={goPrev}>Précédent</button>
        <button onClick={goNext}>Suivant</button>
      </div>
    </div>
  );
}
