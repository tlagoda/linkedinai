import React, { useState } from "react";

function Toggle() {
  const [isGeneric, setIsGeneric] = useState(false);

  return (
    <div className="flex items-center justify-center pt-5">
      <label className="mr-3 text-xl" htmlFor="toggle">
        Prompt:
      </label>
      <div id="toggle">
        <button
          className={`${
            isGeneric ? "bg-violet-500 text-white" : "bg-gray-200 text-gray-800"
          } py-2 px-4 rounded-l-md transition-colors duration-200`}
          onClick={() => setIsGeneric(true)}
        >
          Generic
        </button>
        <button
          className={`${
            !isGeneric ? "bg-violet-500 text-white" : "bg-gray-200 text-gray-800"
          } py-2 px-4 rounded-r-md transition-colors duration-200`}
          onClick={() => setIsGeneric(false)}
        >
          Custom
        </button>
      </div>
    </div>
  );
}

export default Toggle;
