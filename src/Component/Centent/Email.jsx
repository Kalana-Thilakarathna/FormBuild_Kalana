/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaGear } from "react-icons/fa6";
import "../../App.css";
import { FormDataContext } from "../../hooks/useFormData";

function Email({ onClose }) {
  const { emailData, updateEmailData, tabData, updateTabData } =
    useContext(FormDataContext);

  const handleChange = (e) => {
    updateEmailData({ [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateEmailData({ emailData });
    updateTabData({ tabData: "Welcome" });
    onClose();
  };

  const handleDiscard = () => {
    onClose();
    updateTabData({ tabData: "Welcome" });
  };

  const handleTabdata = () => {
    updateTabData({ tabData: "Welcome" });
    onClose();
  };

  return (
    <div className="bg-white w-full h-full p-2 flex flex-col">
      <div className="flex justify-between items-center mr-3 mt-1 ">
        <div className="flex flex-row items-center">
          <FaGear />
          <h1 className="text-sm font-arial font-semibold ml-3">Settings</h1>
        </div>
        <div>
          <button
            onClick={handleTabdata}
            className="hover:text-red-400 duration-500 transition-all rounded-md p-1 drop-shadow-md bg-white border-x-2"
          >
            <RxCross2 />
          </button>
        </div>
      </div>
      <div>Email</div>

      <div className="mt-7 mr-3 ">
        <form>
          <div className="">
            <label className="font-semibold">Title</label>
            <input
              type="text"
              name="title"
              className="w-full p-1 rounded-md border-2 border-gray-200 mt-2"
              value={emailData.title || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mt-2">
            <label className="font-semibold">Description</label>
            <input
              type="text"
              name="description"
              className="w-full p-1 rounded-md border-2 border-gray-200 mt-2"
              value={emailData.description || ""}
              onChange={handleChange}
            />
          </div>

          <div className="mt-2 flex flex-row justify-between items-center">
            <span className="font-semibold">Required</span>
            <input
              type="checkbox"
              onChange={handleChange}
              checked={emailData.requiredStatus === "required"}
              value="required"
              name="requiredStatus"
            />
          </div>

          <div className="flex flex-row justify-evenly gap-2">
            <div>
              <button
                className="bg-gray-300 hover:bg-gray-400 transition-all duration-500 p-2 rounded-md mt-5 w-44"
                onClick={handleSave}
                type="button"
              >
                Save
              </button>
            </div>
            <div>
              <button
                className="bg-gray-100 text-red-400 font-bold p-2 rounded-md mt-5 w-44 hover:bg-gray-200 transition-all duration-500"
                onClick={handleDiscard}
                type="button"
              >
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Email;
