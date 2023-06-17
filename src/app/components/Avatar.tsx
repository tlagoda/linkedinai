import React, { useEffect, createRef, useState, useContext } from "react";
import { FaSignOutAlt, FaCog, FaUser } from "react-icons/fa";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
        <Image
          src="/pp-linkedin.jpeg"
          alt="Avatar"
          width={48}
          height={48}
          className="rounded-full"
        />
      </button>
      {isMenuOpen && (
        <div
          className="absolute top-12 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
          ref={menuRef}
        >
          <ul className="text-gray-600">
            <li className="rounded-lg hover:bg-gray-200">
              <button
                onClick={onSettings}
                className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer"
              >
                <FaUser className="mr-2" />
                <span>Profil</span>
              </button>
            </li>
            <li className="rounded-lg hover:bg-gray-200">
              <button
                onClick={onSettings}
                className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer"
              >
                <FaCog className="mr-2" />
                <span>Settings</span>
              </button>
            </li>
            <li className="rounded-lg hover:bg-gray-200">
              <button
                onClick={handleLogout}
                className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer"
              >
                <FaSignOutAlt className="mr-2" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;
