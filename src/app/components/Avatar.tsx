import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Avatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {};
  const onSettings = () => {};

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <FaUserCircle size={32} />
      </button>
      {isMenuOpen && (
        <div className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
          <ul className="text-gray-600">
            <li>
              <button
                onClick={onLogout}
                className="py-2 px-4 block w-full text-left hover:underline hover:cursor-pointer hover:underline-offset-4"
              >
                Logout
              </button>
            </li>
            <li>
              <button
                onClick={onSettings}
                className="py-2 px-4 block w-full text-left hover:underline hover:cursor-pointer hover:underline-offset-4"
              >
                Settings
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
