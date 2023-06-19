import React, { useEffect, createRef, useState } from "react";
import {
  FaSignOutAlt,
  FaCog,
  FaUser,
  FaLinkedin,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../redux/features/auth/authSlice";
import app from "../../../firebase";

const Avatar = ({
  setShowLinkedInModal,
}: {
  setShowLinkedInModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const auth = getAuth(app);

  const onSettings = () => {};
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
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

  const handleLinkedInClick = () => {
    setShowLinkedInModal(true);
    setIsMenuOpen(false);
  };

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
                <FaMoneyCheckAlt className="mr-2" />
                <span>Billing</span>
              </button>
            </li>
            <li className="rounded-lg hover:bg-gray-200">
              <button
                onClick={handleLinkedInClick}
                className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer"
              >
                <FaLinkedin className="mr-2" />
                <span>Connect to LinkedIn</span>
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
