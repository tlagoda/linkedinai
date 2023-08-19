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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { initializeAuthListener } from "../../redux/features/user/userSlice";


export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "AppName",
    email: "",
    job: "Product Owner",
    apiKey: "",
  });
  const [useOwnApiKey, setUseOwnApiKey] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(initializeAuthListener());
  }, [dispatch]);

  const auth = getAuth(app);

  useEffect(() => {
    setFormData({
      firstName: user.firstName ? user.firstName : "",
      lastName: user.lastName ? user.lastName : "",
      email: user.email ? user.email : "",
      company: user.company ? user.company : "",
      job: user.job ? user.job : "",
      apiKey: user.apiKey ? user.apiKey : "",
    });
    setUseOwnApiKey(user.useOwnApiKey ? user.useOwnApiKey : false)
  }, [user]);

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUseOwnApiKeyChange = (event: { target: { value: string } }) => {
    setUseOwnApiKey(event.target.value === "yes");
  };

  const handleSubmit = async () => {
    if (!auth.currentUser?.uid) {
      return;
    }

    const data = {
      apiKey: formData.apiKey,
      firstName: formData.firstName,
      lastName: formData.lastName,
      job: formData.job,
      company: formData.company,
      useOwnApiKey: useOwnApiKey,
    };

    try {
      await UsersService.updateUser(auth.currentUser?.uid, data);

      toast.success("Your informations have been saved! 🚀", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      toast.error("Cannot save informations, an error occured!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  return (
    <div className="w-screen h-full text-slate-100 flex flex-col items-center">
      <h2 className="text-center font-bold text-3xl mt-4">Your informations</h2>
      <div className="w-1/2 ml-4 mt-10 border border-emerald-400 rounded-xl min-h-[200px] p-6 flex flex-col justify-center">
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaUser className="mr-2" />
            <label htmlFor="firstName">First name:</label>
          </div>
          <input
            id="firstName"
            type="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <div className="flex items-center ">
            <FaUser className="mr-2" />
            <label htmlFor="lastName">Last name:</label>
          </div>
          <input
            id="lastName"
            type="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
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
            value={formData.email}
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
            name="company"
            value={formData.company}
            onChange={handleInputChange}
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
            name="job"
            value={formData.job}
            onChange={handleInputChange}
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
            name="apiKey"
            value={formData.apiKey}
            onChange={handleInputChange}
            className="border rounded p-1 w-1/2 text-black"
          />
        </div>
        <div className="flex items-center justify-between w-4/5 mx-auto mb-4">
          <label htmlFor="useOwnApiKey">Use your own API Key:</label>
          <select
            id="useOwnApiKey"
            name="useOwnApiKey"
            value={useOwnApiKey ? "yes" : "no"}
            onChange={handleUseOwnApiKeyChange}
            className="border rounded p-1 w-1/2 text-black"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>
        <button
          className="w-1/5 mx-auto mt-8 rounded-xl border border-emerald-400 px-2 py-1 hover:text-emerald-400"
          onClick={handleSubmit}
        >
          Save
        </button>{" "}
      </div>
      <ToastContainer />
    </div>
  );
}
