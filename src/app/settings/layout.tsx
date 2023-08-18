"use client";

import SettingsNav from "../components/SettingsNav";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <section className="h-screen w-screen bg-myblue-500 flex relative">

      {children}
      <FaTimes
        size={20}
        className="text-emerald-400 absolute top-4 right-4 hover:cursor-pointer"
        onClick={() => router.push("/generate")}
      />
    </section>
  );
}
