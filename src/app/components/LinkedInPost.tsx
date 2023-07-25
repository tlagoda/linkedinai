import Image from "next/image";
import Loader from "./Loader";
import { FaGlobeAmericas } from "react-icons/fa";

export default function LinkedInPost({
  content,
  displayLoader,
  linkedInProfilePicUrl,
  nameOfUser,
  width,
}: {
  content: string;
  displayLoader: boolean;
  linkedInProfilePicUrl: string;
  nameOfUser: string;
  width?: string;
}) {
  return (
    <div
      className={`md:min-h-[400px] font-inter-medium mx-auto md:my-4 bg-white text-black rounded-lg overflow-auto shadow-md ${
        width ? `md:${width}` : "md:w-5/12"
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex items-center">
          <Image
            className="w-12 rounded-full mr-2"
            src={
              linkedInProfilePicUrl ? linkedInProfilePicUrl : "/pp-linkedin.png"
            }
            alt="LinkedIn Profile Picture"
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className="text-black font-semibold">{nameOfUser}</p>
              <div className="w-[3px] h-[3px] bg-gray-500 rounded-full mx-1"></div>
              <p className="text-xs text-gray-500">2nd</p>
            </div>
            <p className="text-xs text-gray-500">Product Owner | AppName</p>
            <div className="flex items-center">
              <p className="text-xs text-gray-500">17h</p>
              <div className="w-[3px] h-[3px] bg-gray-500 rounded-full mx-1"></div>
              <FaGlobeAmericas size={10} />
            </div>
          </div>
        </div>
        {displayLoader ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <textarea className="text-black resize-none whitespace-pre-line text-xs mt-4 w-full h-full focus:outline-none">
            {content.replace(/^\n+/g, "")}
          </textarea>
        )}
      </div>
    </div>
  );
}
