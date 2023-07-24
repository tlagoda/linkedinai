import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const handleScrollTo = (event: any, direction: string) => {
    event.preventDefault();
    const faqSection = document.getElementById(`${direction}-section`);
    if (!faqSection) return;
    faqSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="h-[250px] md:h-[300px] bg-faq-500 py-4 md:py-10 text-slate-100">
      <div className="w-4/5 md:w-2/3 h-full mx-auto">
        <div className="w-full h-1/2 flex justify-between items-start ">
          <h3 className="font-bold text-2xl md:text-5xl w-1/2">
            <span className="text-emerald-400">A</span>ppName: Elevate, Engage,
            Excel!
          </h3>
          <Link href="/signup">
            <button className="bg-emerald-400 rounded-full px-4 md:px-8 py-2 md:py-4 hover:bg-emerald-500">
              Start now!
            </button>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <div className="flex h-full justify-between items-end">
            <h2 className="text-2xl font-bold">
              <span className="text-emerald-400">A</span>ppName.ai
            </h2>
            <ul className="flex flex-col md:flex-row items-end md:items-center">
              <li className="mr-2 text-emerald-400">
                <FaTwitter
                  className="hover:text-slate-100 hover:cursor-pointer"
                  size={20}
                />
              </li>
              <li
                onClick={(e) => handleScrollTo(e, "solution")}
                className="md:mr-4 hover:text-emerald-400 hover:underline hover:cursor-pointer"
              >
                Solution
              </li>
              <li className="md:mr-4 hover:text-emerald-400 hover:underline hover:cursor-pointer">
                Pricing
              </li>
              <li
                onClick={(e) => handleScrollTo(e, "faq")}
                className="hover:text-emerald-400 hover:underline hover:cursor-pointer"
              >
                FAQ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
