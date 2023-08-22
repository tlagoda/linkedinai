import React from "react";
import CustomSelect from "../CustomSelect";

interface OptionData {
  values: string[];
  placeholder: string;
  label: string;
  dtoKey: string;
}

interface OptionsPanelProps {
  optionsData: OptionData[];
  updateOptions: React.Dispatch<
    React.SetStateAction<Record<string, string | number>>
  >;
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({
  optionsData,
  updateOptions,
}) => {
  return (
    <>
      {optionsData.map((optionData, index) => (
        <CustomSelect
          key={index}
          options={optionData.values}
          label={optionData.label}
          dtoKey={optionData.dtoKey}
          placeholder={optionData.placeholder}
          updateOptions={updateOptions}
        />
      ))}
      <div className="flex items-center justify-between text-black w-4/5 mx-auto h-20 md:h-16">
        <label >Language</label>
        <select name="" id=""></select>
      </div>
    </>
  );
};

export default OptionsPanel;
