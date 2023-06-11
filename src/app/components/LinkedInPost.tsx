/* eslint-disable @next/next/no-img-element */
export default function LinkedInPost() {
  return (
    <div className="h-full bg-white text-black rounded-lg w-1/2 overflow-auto shadow-md">
      <div className="p-4">
        <div className="flex items-center">
          <img
            className="w-12 rounded-full mr-4"
            src="https://media.licdn.com/dms/image/C5603AQGLNpn17Awaow/profile-displayphoto-shrink_400_400/0/1620335725641?e=1692230400&v=beta&t=wqM9h_-IeXqWRKAhy3mG_9agCiba_OoV2WKxtyggmIQ"
            alt="Avatar of Thibaut Lagoda"
          />
          {/* TODO Image */}
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
