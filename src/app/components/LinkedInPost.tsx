import Image from "next/image";
import Loader from "./Loader";

export default function LinkedInPost({
  content,
  displayLoader,
}: {
  content: string;
  displayLoader: boolean;
}) {
  return (
    <div className="h-full bg-white text-black rounded-lg w-1/2 overflow-auto shadow-md">
      <div className="p-4">
        <div className="flex items-center">
          <Image
            className="w-12 rounded-full mr-4"
            src="/pp-linkedin.jpeg"
            alt="Avatar of Thibaut Lagoda"
            width={100}
            height={100}
          />
          <div>
            <p className="font-bold">Thibaut Lagoda</p>
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
