import { FaEnvelope, FaKey } from "react-icons/fa";

export default function Page() {
  return (
    <div className="w-4/5 h-full text-slate-100 flex flex-col items-center">
      <h2 className="text-center font-bold text-3xl mt-4">Your informations</h2>
      <div className="w-1/3 ml-4 mt-10 border border-emerald-400 rounded-xl min-h-[200px] p-6">
        <div className="flex items-center justify-between w-4/5 mx-auto">
          <div className="flex items-center ">
            <FaEnvelope className="mr-2"/>
            <p>Email:</p>
          </div>
          <p>greatemail@hotmail.com</p>
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto">
          <div className="flex items-center ">
            <FaKey className="mr-2"/>
            <p>OpenAI Api Key:</p>
          </div>
          <p>No</p>
        </div>
      </div>
    </div>
  );
}
