import { useState } from "react";

const OptionsSelect = ({
    options,
    onSelect,
    label,
  }: {
    options: string[];
    onSelect: any;
    label: string;
  }) => {
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setSelectedOption(value);
      onSelect(value);
    };
  
    return (
      <div className="flex items-center justify-center pt-5">
        <label htmlFor="options-select" className="mr-3 text-xl text-slate-100">
          {label}:
        </label>
        <select
          id="options-select"
          value={selectedOption}
          onChange={handleOptionChange}
          className="block py-2 px-4 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900"
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

      </div>
    );
  };
  
  export default OptionsSelect;
  