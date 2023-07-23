import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-[300px] bg-faq-500 py-10 text-slate-100">
      <div className="w-2/3 h-full mx-auto">
        <div className="w-full h-1/2 flex justify-between items-start ">
          <h3 className="font-bold text-5xl w-1/2">
            <span className="text-emerald-400">K</span>ouim: Elevate, Engage,
            Excel!
          </h3>
          <button className="w-1/6 bg-emerald-400 rounded-full py-4 hover:bg-emerald-500">
            Start now!
          </button>
        </div>
        <div className="h-1/2 w-full">
          <div className="flex h-full justify-between items-end">
            <h2 className="text-2xl font-bold">
              <span className="text-emerald-400">K</span>ouim.ai
            </h2>
            <ul className="flex flex-row items-center">
              <li className="mr-2 text-emerald-400">
                <FaTwitter
                  className="hover:text-slate-100 hover:cursor-pointer"
                  size={20}
                />
              </li>
              <li className="mr-4 hover:text-emerald-400 hover:underline hover:cursor-pointer">
                Solution
              </li>
              <li className="mr-4 hover:text-emerald-400 hover:underline hover:cursor-pointer">
                Pricing
              </li>
              <li className="hover:text-emerald-400 hover:underline hover:cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
