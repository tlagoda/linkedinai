"use client";

import { useRouter } from "next/navigation";
import { FaInfoCircle, FaChartArea } from "react-icons/fa";

export default function SettingsNav() {
  const router = useRouter();

  return (
    <div className="w-1/5 h-full bg-myviolet-500 text-slate-100">
      <h1
        className="text-center text-3xl animate-fadeIn2s hover:cursor-pointer"
        onClick={() => router.push("/generate")}
      >
        <span className="font-bold text-emerald-400">A</span>ppName
      </h1>
      <div className="w-full my-8 flex flex-col justify-center items-center">
        <button
          onClick={() => router.push("/settings/account")}
          className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer hover:text-emerald-400"
        >
          <FaInfoCircle className="mr-2" />
          <span>Your informations</span>
        </button>
        <button
          onClick={() => router.push("/settings/activity")}
          className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer hover:text-emerald-400"
        >
          <FaChartArea className="mr-2" />
          <span>Your activity</span>
        </button>
      </div>
    </div>
  );
}
