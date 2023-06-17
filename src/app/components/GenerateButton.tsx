import React from "react";

const GenerateButton = () => {
  return (
    <button className="text-2xl w-1/2 py-10 bg-violet-500 hover:bg-violet-700 text-slate-100 py-2 px-4 rounded-3xl transition-colors duration-200 flex items-center justify-center">
      Generate!{" "}
      <span role="img" aria-label="Rocket" className="ml-2">
        🚀
      </span>
    </button>
  );
};

export default GenerateButton;
