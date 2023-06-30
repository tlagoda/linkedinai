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
import { getAuth, signOut } from "firebase/auth";
import app, { db } from "../../../firebase";
import { LinkedInService } from "@/services/linkedin.service";
import { doc, getDoc } from "firebase/firestore";

const Avatar = ({
  linkedInProfilePicUrl,
}: {
  linkedInProfilePicUrl: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAuthorizedLinkedIn, setHasAuthorizedLinkedIn] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const auth = getAuth(app);

  useEffect(() => {
    const fetchLinkedInAuthorization = async () => {
      if (!auth.currentUser) {
        return;
      }
      const docRef: any = doc(db, "users", auth.currentUser.uid);
      const myDoc: any = await getDoc(docRef);
      if (myDoc.exists) {
        setHasAuthorizedLinkedIn(myDoc.data().hasAuthorizedLinkedIn);
      } else {
        setHasAuthorizedLinkedIn(false);
      }
    };
    fetchLinkedInAuthorization();

  }, []);

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
    const url = LinkedInService.getLinkedInAuthorizationUrl(
      auth.currentUser?.uid
    );
    if (!url) {
      return;
    }
    window.location.href = url;
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu}>
        <Image
          src={linkedInProfilePicUrl}
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
            {!hasAuthorizedLinkedIn && (
              <li className="rounded-lg hover:bg-gray-200">
                <button
                  onClick={handleLinkedInClick}
                  className="py-2 px-4 flex items-center w-full text-left hover:cursor-pointer"
                >
                  <FaLinkedin className="mr-2" />
                  <span>Connect to LinkedIn</span>
                </button>
              </li>
            )}
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
