import Image from "next/image";
import Loader from "./Loader";

export default function LinkedInPost({
  content,
  displayLoader,
  linkedInProfilePicUrl,
}: {
  content: string;
  displayLoader: boolean;
  linkedInProfilePicUrl: string;
}) {
  return (
    <div className="h-full w-3/5 mx-auto bg-white text-black rounded-lg overflow-auto shadow-md">
      <div className="p-4">
        <div className="flex items-center">
          <Image
            className="w-12 rounded-full mr-4"
            src={linkedInProfilePicUrl ? linkedInProfilePicUrl : "/pp-linkedin.png"}
            alt="LinkedIn Profile Picture"
            width={100}
            height={100}
          />
          <div>
            <p className="font-bold">John Doe</p>
            <p className="text-sm text-gray-600">2nd • 1h</p>
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
