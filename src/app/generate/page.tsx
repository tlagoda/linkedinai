import LinkedInPost from "../components/LinkedInPost";
import Prompt from "../components/Prompt";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-gray-900 font-mono text-slate-100 flex">
      <div className="w-1/4 h-full bg-gray-800">wip</div>
      <div className="w-3/4 h-full flex flex-col p-4">
        <div className="h-full flex flex-col"> {/* make sure to add h-full here */}
          <div className="h-3/4 flex flex-col"> {/* and here */}
            <LinkedInPost />
          </div>
          <div className="h-1/4 flex items-center">
            <Prompt />
          </div>
        </div>
      </div>
    </div>
  );
}