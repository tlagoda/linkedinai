import React from "react";
import CustomSelect from "../CustomSelect";

interface OptionData {
  values: string[];
  placeholder: string;
  label: string;
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
          placeholder={optionData.placeholder}
          updateOptions={updateOptions}
        />
      ))}
    </>
  );
};

export default OptionsPanel;
