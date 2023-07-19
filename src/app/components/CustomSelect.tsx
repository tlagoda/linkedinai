import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({
  options,
  label,
  placeholder,
  updateOptions,
}: {
  options: string[];
  label: string;
  placeholder: string;
  updateOptions: React.Dispatch<
    React.SetStateAction<Record<string, string | number>>
  >;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  const menuRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setCustomValue(option);
    setIsOpen(false);
    updateOptions((prevOptions) => ({
      ...prevOptions,
      [label]: option,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSelectedOption("");
    setCustomValue(inputValue);
    updateOptions((prevOptions) => ({
      ...prevOptions,
      [label]: inputValue,
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getTruncated = (s: string): string => {
    return s.length > (tailwindMd ? 16 : 10)
      ? `${s.substring(0, tailwindMd ? 16 : 10)}...`
      : s;
  };

  return (
    <div className="flex items-center justify-between text-black w-4/5 pt-5 mx-auto h-20 2xl:h-28">
      <label className="text-slate-100 w-2/5">{label}:</label>
      <div className="relative md:ml-2 w-3/5">
        <input
          type="text"
          value={getTruncated(customValue) || getTruncated(selectedOption)}
          onChange={handleInputChange}
          placeholder={getTruncated(placeholder)}
          className="rounded-md py-2 px-4 border w-full border-gray-300 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900"
        />
        <div
          ref={iconRef}
          onClick={toggleMenu}
          className="absolute inset-y-0 w-1/6 right-0 flex items-center justify-center rounded-r-md bg-blue-500 cursor-pointer"
        >
          <FaChevronDown
            className={`text-slate-100 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <ul
            className="absolute mt-1 py-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-fadeIn300ms"
            ref={menuRef}
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 cursor-pointer ${
                  option === selectedOption
                    ? "text-blue-500 font-bold"
                    : "text-black"
                } hover:bg-gray-100`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
