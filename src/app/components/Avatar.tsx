import React, { useEffect, createRef, useState, useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

const Avatar = ({
  setUserJustLoggedOut,
}: {
  setUserJustLoggedOut: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onSettings = () => {};
  const handleLogout = () => {
    setUserJustLoggedOut(true);
    logout();
    router.push("/");
  };

  const menuRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !menuRef?.current?.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen, menuRef]);

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <FaUserCircle size={32} />
      </button>
      {isMenuOpen && (
        <div
          className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
          ref={menuRef}
        >
          <ul className="text-gray-600">
            <li>
              <button
                onClick={handleLogout}
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
