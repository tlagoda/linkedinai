import { AuthContext } from "@/contexts/AuthContext";
import CallToActionLink from "./CallToActionLink";
import { useContext } from "react";

interface HeaderProps {
  title: string;
  menuItems?: string[];
  CTATitle?: string;
}

export default function Header({
  title,
  menuItems = ["Product", "Examples", "Pricing"],
  CTATitle = "Get started",
}: HeaderProps) {
  const { currentUser } = useContext(AuthContext);
  
  const CTALink = currentUser ? "/generate" : "/login";

  return (
    <div className="flex items-center justify-between mx-16">
      <h1 className="text-3xl text-slate-100 font-bold hover:cursor-pointer">
        {title}
      </h1>
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
      <CallToActionLink content={CTATitle} href={CTALink} />
    </div>
  );
}
