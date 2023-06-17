import React, { useState } from "react";

function Toggle({
  togglePrompt,
}: {
  togglePrompt: (customPrompt: boolean) => void;
}) {
  const [isGeneric, setIsGeneric] = useState(false);

  const toggle = (customPrompt: boolean) => {
    setIsGeneric(!customPrompt);
    togglePrompt(customPrompt);
  };

  return (
    <div className="flex items-center justify-between pt-5 w-4/5 mx-auto">
      <label className="mr-3 text-xl" htmlFor="toggle">
        Prompt:
      </label>
      <div id="toggle">
        <button
          className={`${
            isGeneric ? "bg-violet-500 text-white" : "bg-gray-200 text-gray-800"
          } py-2 px-4 rounded-l-md transition-colors duration-200`}
          onClick={() => toggle(false)}
        >
          Generic
        </button>
        <button
          className={`${
            !isGeneric
              ? "bg-violet-500 text-white"
              : "bg-gray-200 text-gray-800"
          } py-2 px-4 rounded-r-md transition-colors duration-200`}
          onClick={() => toggle(true)}
        >
          Custom
        </button>
      </div>
    </div>
  );
}

export default Toggle;
