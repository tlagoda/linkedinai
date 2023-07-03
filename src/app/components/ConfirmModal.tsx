import { FC, MouseEvent } from "react";
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
      className="fixed top-0 left-0 w-full h-full text-black bg-black bg-opacity-80 flex items-center justify-center"
      onClick={handleClose}
    >
      <div className="bg-white p-5 rounded shadow-lg w-2/3 relative">
        <button className="absolute top-2 right-2" onClick={onCancel}>
          <FaTimes />
        </button>
        <h2 className="mb-8 text-violet-500 font-extrabold">{title}</h2>
        <p className="text-justify">{message}</p>
        <div className="mt-8 flex justify-end">
          <button
            onClick={onCancel}
            className="mr-2 bg-red-400 border border-black rounded px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-green-500 text-white px-4 py-2 rounded border border-black"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
