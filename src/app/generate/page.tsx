import Prompt from "../components/Prompt";

export default function Page() {
  return (
    <div className="h-screen w-screen bg-gray-900 font-mono text-slate-100 flex">
      <div className="w-1/4 h-full bg-gray-800">wip</div>
      <div className="w-3/4 h-full flex flex-col">
        <div className="h-3/4"></div>
        <div className="h-1/4">
          <Prompt />
        </div>
      </div>
    </div>
  );
}
