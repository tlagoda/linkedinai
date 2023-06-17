import { useState } from "react";

const OptionsSelect = ({
  options,
  onSelect,
  label,
  defaultValue,
}: {
  options: string[];
  onSelect: (value: string) => void;
  label: string;
  defaultValue: string;
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="grid grid-cols-2 gap-4 items-center pt-5 w-4/5 mx-auto h-20">
      <label htmlFor="options-select" className="text-xl text-slate-100">
        {label}:
      </label>
      <select
        id="options-select"
        value={selectedOption}
        onChange={handleOptionChange}
        className="block text-lg py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-gray-900"
        style={{ gridColumn: "2 / span 1" }}
      >
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
