import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function LinkedInPost() {
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
        <p className="mt-4 text-black">
          Welcome to our automated LinkedIn post generator! Give us a prompt or
          choose from our predefined ones and watch as we create a professional
          and engaging post for your LinkedIn profile. Let's start crafting! 🚀
        </p>
      </div>
    </div>
  );
}
