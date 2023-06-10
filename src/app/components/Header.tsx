import CallToAction from "./CallToAction";

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
  return (
    <div className="flex items-center justify-between mx-16">
      <h1 className="text-3xl text-slate-100 font-bold hover:cursor-pointer">
        {title}
      </h1>
      <ul className="text-slate-100 text-xl flex justify-evenly items-center w-4/12">
        <li>|</li>
        {menuItems.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
        <li>|</li>
      </ul>
      <CallToAction content={CTATitle} />
    </div>
  );
}
