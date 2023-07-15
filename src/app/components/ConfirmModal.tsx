import { FC, MouseEvent, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  const [tailwindMd, setTailwindMd] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setTailwindMd(window.innerWidth >= 768);
    };

    handleResize(); // Call the function once initially
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  const handleClose = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full text-black bg-black bg-opacity-80 flex items-center justify-center z-30"
      onClick={handleClose}
    >
      <div className="bg-white p-5 rounded shadow-lg w-2/3 md:w-1/3 min-h-fit relative z-30">
        <button className="absolute top-2 right-2" onClick={onCancel}>
          <FaTimes className="hover:text-red-500"/>
        </button>
        <h2 className="mb-8 text-violet-500 text-lg md:text-xl font-extrabold">
          {title}
        </h2>
        <p className="text-justify">{message}</p>
        <div className="mt-8 flex justify-end">
          <button
            onClick={onCancel}
            className="group relative overflow-hidden bg-red-400 md:bg-white text-white mr-2 px-4 py-2 rounded border border-black shadow"
          >
            {tailwindMd && (
              <div className="absolute inset-0 w-0 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            )}{" "}
            <span className="relative text-black md:group-hover:text-white">
              Cancel
            </span>
          </button>
          <button
            onClick={onConfirm}
            className="group relative overflow-hidden bg-green-500 md:bg-white text-white mr-2 px-4 py-2 rounded border border-black shadow"
          >
            {tailwindMd && (
              <div className="absolute inset-0 w-0 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            )}{" "}
            <span className="relative text-black md:group-hover:text-white">
              Confirm
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
