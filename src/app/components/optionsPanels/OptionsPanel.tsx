import React from "react";
import OptionsSelect from "../OptionsSelect";

interface OptionData {
  values: string[];
  defaultValue: string;
  label: string;
}

interface OptionsPanelProps {
  optionsData: OptionData[];
}

const OptionsPanel: React.FC<OptionsPanelProps> = ({ optionsData }) => {
  return (
    <>
      {optionsData.map((optionData, index) => (
        <OptionsSelect
          key={index}
          options={optionData.values}
          onSelect={() => {}}
          label={optionData.label}
          defaultValue={optionData.defaultValue}
        />
      ))}
    </>
  );
};

export default OptionsPanel;
