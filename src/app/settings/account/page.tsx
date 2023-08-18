"use client";

import { SetStateAction, useEffect, useState } from "react";
import {
  FaEnvelope,
  FaKey,
  FaUser,
  FaBuilding,
  FaToolbox,
} from "react-icons/fa";
import app, { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { UsersService } from "@/services/users.service";

export default function Page() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCompany, setUserCompany] = useState("AppName");
  const [userJob, setUserJob] = useState("Product Owner");
  const [userApiKey, setUserApiKey] = useState("");
  const [userHasApiKey, setUserHasApiKey] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    const fetchUserInformations = async () => {
      if (!auth.currentUser) {
        return;
      }
      const docRef: any = doc(db, "users", auth.currentUser.uid);
      const myDoc: any = await getDoc(docRef);
      console.log(myDoc);
      if (myDoc.exists) {
        setUserFirstName(
          myDoc.data().firstName ? myDoc.data().firstName : "Unknown"
        );
        setUserLastName(
          myDoc.data().firstName ? myDoc.data().lastName : "Unknown"
        );
        setUserEmail(myDoc.data().email);
      }
    };
    fetchUserInformations();
  }, [auth]);

  const handleApiKeyChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserApiKey(event.target.value);
  };

  const handleSubmit = async () => {
    if (!auth.currentUser?.uid) {
      return;
    }

    const data = {
      apiKey: userApiKey,
      firstName: userFirstName,
      lastName: userLastName,
      job: userJob,
      company: userCompany,
    };

    await UsersService.updateUser(auth.currentUser?.uid, data);
  };

  return (
    <div className="w-screen h-full text-slate-100 flex flex-col items-center">
      <h2 className="text-center font-bold text-3xl mt-4">Your informations</h2>
      <div className="w-1/2 ml-4 mt-10 border border-emerald-400 rounded-xl min-h-[200px] p-6 flex flex-col justify-center">
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaUser className="mr-2" />
            <label htmlFor="email">First name:</label>
          </div>
          <input
            id="email"
            type="email"
            value={userFirstName}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaUser className="mr-2" />
            <label htmlFor="email">Last name:</label>
          </div>
          <input
            id="email"
            type="email"
            value={userLastName}
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
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaBuilding className="mr-2" />
            <label htmlFor="company">Company:</label>
          </div>
          <input
            id="company"
            type="company"
            value={userCompany}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaToolbox className="mr-2" />
            <label htmlFor="job">Job:</label>
          </div>
          <input
            id="job"
            type="job"
            value={userJob}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaKey className="mr-2" />
            <label htmlFor="apiKey">Api Key:</label>
          </div>
          <input
            id="apiKey"
            type="apiKey"
            value={userApiKey}
            onChange={handleApiKeyChange}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <button
          className="w-1/5 mx-auto mt-8 rounded-xl border border-emerald-400 px-2 py-1 hover:text-emerald-400"
          onClick={handleSubmit}
        >
          Save
        </button>{" "}
      </div>
    </div>
  );
}
