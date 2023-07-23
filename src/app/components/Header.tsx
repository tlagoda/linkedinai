import Link from "next/link";

export default function Header() {
  const handleScrollTo = (event: any, direction: string) => {
    event.preventDefault();
    const faqSection = document.getElementById(`${direction}-section`);
    if (!faqSection) return;
    faqSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="h-36 bg-myblue-500 text-slate-100 flex justify-between items-center px-20">
      <h2 className="text-2xl font-bold">
        <span className="text-emerald-400">K</span>ouim.ai
      </h2>
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
      <div>
        <button className="rounded-full border-2 px-4 py-2 mr-2 min-w-[6rem] hover:text-emerald-400">
          <Link href="/signup">Sign up</Link>
        </button>
        <button className="rounded-full border-2 px-4 py-2 min-w-[6rem] hover:text-emerald-400">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </header>
  );
}
