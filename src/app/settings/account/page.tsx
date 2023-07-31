"use client";

import { useEffect, useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import app, { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userHasApiKey, setUserHasApiKey] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const fetchUserInformations = async () => {
      if (!auth.currentUser) {
        return;
      }
      const docRef: any = doc(db, "users", auth.currentUser.uid);
      const myDoc: any = await getDoc(docRef);
      console.log(myDoc)
      if (myDoc.exists) {
        setUserName(
          myDoc.data().firstName
            ? `${myDoc.data().firstName + myDoc.data().lastName}`
            : "Unknown"
        );
        setUserEmail(myDoc.data().email);
      }
    };
    fetchUserInformations();
  }, [auth]);

  return (
    <div className="w-4/5 h-full text-slate-100 flex flex-col items-center">
      <h2 className="text-center font-bold text-3xl mt-4">Your informations</h2>
      <div className="w-1/2 ml-4 mt-10 border border-emerald-400 rounded-xl min-h-[200px] p-6">
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaUser className="mr-2" />
            <label htmlFor="email">Identity:</label>
          </div>
          <input
            id="email"
            type="email"
            value={userName}
            readOnly
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaEnvelope className="mr-2" />
            <label htmlFor="email">Email:</label>
          </div>
          <input
            id="email"
            type="email"
            value={userEmail}
            readOnly
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto">
          <div className="flex items-center ">
            <FaKey className="mr-2" />
            <label htmlFor="apiKey">OpenAI Api Key:</label>
          </div>
          <div>
            <button className="rounded-xl border border-emerald-400 px-2 py-1 hover:text-emerald-400">
              Add key
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
