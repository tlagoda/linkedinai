import { FaImage, FaVideo } from "react-icons/fa";

export default function AddMedia() {
  return (
    <div className="flex flex-col justify-between">
      <h3 className="text-center">Add media:</h3>
      <div className="w-3/5 flex  mx-auto mt-4">
        <label className="w-1/2 p-2 rounded-l flex border border-emerald-400 justify-center items-center hover:bg-emerald-400 hover:text-black">
          Image <FaImage className="ml-2"/>
          <input type="file" accept="image/*" style={{ display: "none" }} id="imageInput" />
        </label>
        <label className="w-1/2 p-2 rounded-r flex border-y border-r border-emerald-400 justify-center items-center hover:bg-emerald-400 hover:text-black">
          Video <FaVideo className="ml-2"/>
          <input type="file" accept="video/*" style={{ display: "none" }} id="videoInput" />
        </label>
      </div>
    </div>
  );
}
