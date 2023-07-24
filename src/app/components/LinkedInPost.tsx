import Image from "next/image";
import Loader from "./Loader";
import { FaEdit } from "react-icons/fa";

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
      className={`w-full relative md:min-h-[400px] mx-auto md:my-4 bg-white text-black rounded-lg overflow-auto shadow-md ${
        width ? `md:${width}` : "md:w-2/5"
      }`}
    >
      {" "}
      <div className="p-4">
        <div className="flex items-center">
          <Image
            className="w-12 rounded-full mr-4"
            src={
              linkedInProfilePicUrl ? linkedInProfilePicUrl : "/pp-linkedin.png"
            }
            alt="LinkedIn Profile Picture"
            width={100}
            height={100}
          />
          <div>
            <p className="font-bold">{nameOfUser}</p>
            <p className="text-sm text-gray-600">2nd • 1h</p>
            <FaEdit size={20} className="absolute top-2 right-2 text-myviolet-400 cursor-pointer" />
          </div>
        </div>
        {displayLoader ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : (
          <p className="text-black whitespace-pre-line mt-4">
            {content.replace(/^\n+/g, "")}
          </p>
        )}
      </div>
    </div>
  );
}
