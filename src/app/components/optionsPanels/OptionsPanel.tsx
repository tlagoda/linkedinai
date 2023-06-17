import OptionsSelect from "../OptionsSelect";

const OptionsPanel = ({
  optionsData,
}: {
  optionsData: { values: string[]; defaultValue: string }[];
}) => {
  return (
    <div>
      {optionsData.map((optionData, index) => (
        <OptionsSelect
          key={index}
          options={optionData.values}
          defaultValue={optionData.defaultValue}
          onSelect={(value) => {}}
          label={`Option ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default OptionsPanel;
