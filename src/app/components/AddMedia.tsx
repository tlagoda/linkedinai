import { useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa";

export default function AddMedia({
  setPostVideo,
  setPostImages,
}: {
  setPostVideo: any;
  setPostImages: any;
}) {

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostVideo(null)
      setPostImages((currentImages: File[] | undefined) =>
        currentImages ? [...currentImages, file] : [file]
      );
    }
    e.target.value = '';
  };
  
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPostImages(null)
      setPostVideo(file || null);
    }
    e.target.value = '';
  };
  

  return (
    <div className="flex flex-col justify-between border-t-2 border-emerald-400 md:border-none mt-8 md:mt-0">
      <h3 className="text-center text-xl text-slate-100 mt-4 md:mt-0">Add media:</h3>
      <div className="w-3/5 flex  mx-auto mt-4">
        <label className="w-1/2 p-2 rounded-l flex border border-emerald-400 justify-center items-center hover:bg-emerald-400 hover:text-black">
          Image <FaImage className="ml-2" />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            id="imageInput"
            onChange={handleImageUpload}
          />
        </label>
        <label className="w-1/2 p-2 rounded-r flex border-y border-r border-emerald-400 justify-center items-center hover:bg-emerald-400 hover:text-black">
          Video <FaVideo className="ml-2" />
          <input
            type="file"
            accept="video/*"
            style={{ display: "none" }}
            id="videoInput"
            onChange={handleVideoUpload}
          />
        </label>
      </div>
    </div>
  );
}
