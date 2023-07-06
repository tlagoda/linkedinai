import { useState, useEffect } from "react";
import CallToActionLink from "./CallToActionLink";
import { FaBars, FaDollarSign, FaLightbulb, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

interface HeaderProps {
  title?: string;
  menuItems?: Record<string, any>[];
  CTATitle?: string;
}

export default function Header({
  title,
  menuItems = [
    { title: "Product", icon: <FaShoppingBag className="text-slate-100" />, link: "/product" },
    {
      title: "Examples",
      icon: <FaLightbulb className="text-slate-100" />,
      link: "/examples",
    },
    {
      title: "Pricing",
      icon: <FaDollarSign className="text-slate-100" />,
      link: "/pricing",
    },
  ],
  CTATitle = "Sign up",
}: HeaderProps) {
  const CTALink = "/signup";
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);
  const [showMenu, setShowMenu] = useState<boolean>(false);

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
    <>
      <div className="w-screen h-14 pt-4 px-4 bg-gray-900 z-20 relative">
        <div className="flex items-center justify-between md:mx-16 z-20 bg-gray-900">
          <div
            className={
              !tailwindMd ? "flex w-1/2 justify-around items-center" : ""
            }
          >
            {!tailwindMd && (
              <FaBars
                onClick={() => setShowMenu(!showMenu)}
                className="text-2xl text-emerald-400 cursor-pointer"
              />
            )}
            <h1 className="text-2xl md:text-3xl text-slate-100 font-bold hover:cursor-pointer">
              {!title && (
                <Link href="/">
                  l<span className="text-blue-500">AI</span>nkedIn
                </Link>
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
                    className="hover:underline hover:cursor-pointer hover:underline-offset-4 hover:text-emerald-400"
                    key={index}
                  >
                    {item.title}
                  </li>
                );
              })}
              <li>|</li>
            </ul>
          )}
          <CallToActionLink content={CTATitle} href={CTALink} />
        </div>
      </div>
      {!tailwindMd && showMenu && (
        <div className="absolute bg-gray-900 top-14 left-0 w-screen p-4 text-emerald-400 z-20 border-b border-emerald-400">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="py-2 hover:text-emerald-400 cursor-pointer flex items-center"
            >
              <div className="w-8 h-8 mr-2 border border-emerald-400 rounded-full flex justify-center items-center">
                {item.icon}
              </div>
              {item.title}
            </div>
          ))}
        </div>
      )}
      {showMenu && (
        <div
          className="absolute top-0 left-O inset-0 bg-black opacity-50 z-10"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </>
  );
}
