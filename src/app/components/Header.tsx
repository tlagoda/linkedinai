import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  const handleScrollTo = (event: any, direction: string) => {
    event.preventDefault();
    const faqSection = document.getElementById(`${direction}-section`);
    if (!faqSection) return;
    faqSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="h-20 w-screen md:h-36 md:bg-myblue-500 text-slate-100 flex justify-between items-center px-4 md:px-20">
      <h2 className="text-2xl font-bold">
        <span className="text-emerald-400">A</span>ppName.ai
      </h2>
      {!tailwindMd && <FaBars size={25} className="text-emerald-400"/>}
      {tailwindMd && (
        <ul className="flex w-1/5 justify-around text-m">
          <li
            onClick={(e) => handleScrollTo(e, "solution")}
            className="hover:underline hover:cursor-pointer hover:text-emerald-400"
          >
            Solution
          </li>
          <li className="hover:underline hover:cursor-pointer hover:text-emerald-400">
            Pricing
          </li>
          <li
            onClick={(e) => handleScrollTo(e, "faq")}
            className="hover:underline hover:cursor-pointer hover:text-emerald-400"
          >
            FAQ
          </li>
        </ul>
      )}
      {tailwindMd && (
        <div>
          <Link href="/signup">
            <button className="rounded-full border-2 px-4 py-2 mr-2 min-w-[6rem] hover:text-emerald-400">
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button className="rounded-full border-2 px-4 py-2 min-w-[6rem] hover:text-emerald-400">
              Login
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
