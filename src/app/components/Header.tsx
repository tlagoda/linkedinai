import { useState, useEffect } from "react";
import CallToActionLink from "./CallToActionLink";
import { FaBars } from "react-icons/fa";

interface HeaderProps {
  title?: string;
  menuItems?: string[];
  CTATitle?: string;
}

export default function Header({
  title,
  menuItems = ["Product", "Examples", "Pricing"],
  CTATitle = "Sign up",
}: HeaderProps) {
  const CTALink = "/signup";
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize(); // Call the function once initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-between mx-4 md:mx-16">
      <div
        className={!tailwindMd ? "flex w-1/2 justify-around items-center" : ""}
      >
        {!tailwindMd && <FaBars className="text-2xl text-emerald-400" />}
        <h1 className="text-2xl md:text-3xl text-slate-100 font-bold hover:cursor-pointer">
          {!title && (
            <>
              l<span className="text-blue-500">AI</span>nkedIn
            </>
          )}
          {title && title}
        </h1>
      </div>
      {tailwindMd && (
        <ul className="text-slate-100 text-xl flex justify-evenly items-center w-6/12">
          <li>|</li>
          {menuItems.map((item, index) => {
            return (
              <li
                className="hover:underline hover:cursor-pointer hover:underline-offset-4"
                key={index}
              >
                {item}
              </li>
            );
          })}
          <li>|</li>
        </ul>
      )}
      <CallToActionLink content={CTATitle} href={CTALink} />
    </div>
  );
}
