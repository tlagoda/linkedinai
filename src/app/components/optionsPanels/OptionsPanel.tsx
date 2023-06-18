import React from "react";
import CustomSelect from "../CustomSelect";

interface OptionData {
  values: string[];
  placeholder: string;
  label: string;
}

interface OptionsPanelProps {
  optionsData: OptionData[];
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ optionsData }) => {
  return (
    <>
      {optionsData.map((optionData, index) => (
        <CustomSelect
          key={index}
          options={optionData.values}
          label={optionData.label}
          placeholder={optionData.placeholder}
        />
      ))}
    </>
  );
};

export default OptionsPanel;
