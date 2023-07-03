import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomSelect = ({
  options,
  label,
  placeholder,
}: {
  options: string[];
  label: string;
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [customValue, setCustomValue] = useState("");

  const menuRef = useRef<HTMLUListElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setCustomValue(option);
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption("");
    setCustomValue(event.target.value);
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

  const truncatedPlaceholder =
    placeholder.length > 16
      ? `${placeholder.substring(0, 16)}...`
      : placeholder;

  return (
    <div className="flex items-center justify-between text-black w-4/5 pt-5 mx-auto h-20 2xl:h-28">
      <label className="text-slate-100 w-2/5">{label}:</label>
      <div className="relative md:ml-2 w-3/5">
        <input
          type="text"
          value={customValue || selectedOption}
          onChange={handleInputChange}
          placeholder={truncatedPlaceholder}
          className="rounded-md py-2 px-4 border w-full border-gray-300 bg-white focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900"
        />
        <div
          ref={iconRef}
          onClick={toggleMenu}
          className="absolute inset-y-0 w-1/6 right-0 flex items-center justify-center rounded-r-md bg-violet-500 cursor-pointer"
        >
          <FaChevronDown className="text-slate-100" />
        </div>
        {isOpen && (
          <ul
            className="absolute mt-1 py-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            ref={menuRef}
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 cursor-pointer ${
                  option === selectedOption ? "text-violet-500" : "text-black"
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
