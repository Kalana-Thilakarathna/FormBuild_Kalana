/* eslint-disable no-unused-vars */
import React, { Component, useContext, useEffect, useState } from "react";
import { AiOutlineOrderedList } from "react-icons/ai";
import Popup from "reactjs-popup";
import "../../App.css";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircleDot } from "react-icons/fa6";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";
import Email from "./Email";
import { FormDataContext } from "../../hooks/useFormData";
import { IoCheckmarkOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { PiPencilSimpleLineLight } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { RxDragHandleDots2 } from "react-icons/rx";

const fieldSet = [
  // { type: "Welcome", Component: "WelcomeField" },
  { type: "Multiple Choice", Component: IoCheckmarkOutline },
  { type: "Short Text", Component: PiPencilSimpleLineLight },
  { type: "Email", Component: MdOutlineEmail },
  { type: "DropDown", Component: RiArrowDropDownLine },
  { type: "Phone Number", Component: AiOutlinePhone },
  { type: "Section", Component: BsPencilSquare },
  { type: "Contact Infomation", Component: IoMdInformationCircleOutline },
  { type: "Legal", Component: FaRegNewspaper },
  { type: "Country", Component: TfiWorld },
];

function Content() {
  const [fields, setFields] = useState(() => {
    const storedFields = localStorage.getItem("fields");
    if (storedFields) {
      return JSON.parse(storedFields);
    }
    return [];
  });

  const { updateEmailData, updateTabData } = useContext(FormDataContext);

  const [activeTab, setActiveTab] = useState("steps");

  useEffect(() => {
    const storedFields = localStorage.getItem("fields");
    if (storedFields) {
      setFields(JSON.parse(storedFields));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("fields", JSON.stringify(fields));
  }, [fields]);

  const addField = (type) => {
    const field = fieldSet.find((f) => f.type === type);
    if (field) {
      const newFields = [...fields, field];
      setFields(newFields);
      localStorage.setItem("fields", JSON.stringify(newFields));
    }
  };

  const removeField = (index) => {
    const newFields = fields.filter((field, i) => i !== index);
    setFields(newFields);
    localStorage.setItem("fields", JSON.stringify(newFields));
  };

  const changeTabData = (type) => {
    updateTabData({ tabData: type });
  };

  const removeEmailData = () => {
    updateEmailData({
      title: null,
      description: null,
      requiredStatus: null,
    });
  };

  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-row h-auto items-center">
        <div>
          <AiOutlineOrderedList className="text-gray-400 text-lg" />
        </div>
        <div className=" text-xl ml-2 text-black font-bold font-sans">
          <span>Steps</span>
        </div>
      </div>
      <div className="text-gray-500 text-mb">
        <span>The steps users will take to complete the form</span>
      </div>
      <div className="flex flex-col gap-1 ">
        <button
          className="w-64"
          onClick={() => {
            setActiveTab("welcome");
            changeTabData("Welcome");
          }}
        >
          <div className="flex justify-start items-center bg-gray-50 p-3 rounded-md mt-2 pl-2 hover:bg-gray-100 transition-all duration-500">
            <FaRegCircleDot className="mr-2 text-gray-400 text-sm" />
            <span className="text-center w-full text-sm">Welcome</span>
          </div>
        </button>

        {fields.map((field, index) => (
          <>
            <div
              key={index}
              className="flex flex-row justify-between items-center bg-gray-50 p-3 rounded-md mt-2 hover:bg-gray-100 transition-all duration-500 w-64"
            >
              <RxDragHandleDots2 className="text-gray-400 text-sm"/>
              <button
                className="w-full"
                onClick={() => {
                  setActiveTab(field.type);
                  changeTabData(field.type);
                }}
              >
                <div className="text-black text-sm">{field.type}</div>
                <div className="flex flex-row items-center"></div>
              </button>
              <button
                className="text-gray-500 hover:text-red-500 "
                onClick={() => {
                  removeField(index);
                  removeEmailData();
                }}
              >
                <RxCross2 />
              </button>
            </div>
          </>
        ))}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full z-50 transition-transform duration-500 ease-in-out"
        style={{
          transform:
            activeTab === "welcome" ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <Welcome onClose={() => setActiveTab("steps")} />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full z-50 transition-transform duration-500 ease-in-out"
        style={{
          transform:
            activeTab === "Email" ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <Email onClose={() => setActiveTab("steps")} tabDataAcitve="Email" />
      </div>
      <div>
        <Popup
          trigger={
            <button className="flex justify-start rounded-md bg-gray-300 px-3 py-2 mt-5">
              + Add Field
            </button>
          }
          modal
        >
          {(close) => (
            <div className="bg-white flex flex-col rounded-md model drop-shadow-5xl">
              <div className="flex flex-row justify-between align-middle items-center pt-3">
                <div className="pl-3 font-bold"> Add Fields </div>

                <button
                  className="  block cursor-pointer rounded-full pr-3 text-black font-bold text-xl"
                  onClick={close}
                >
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2 p-3 items-start">
                {fieldSet.map((field, index) => (
                  <button
                    key={index}
                    className="p-1 flex flex-row justify-start items-center rounded-md text-neutral-900 mb-2 hover:font-bold transition-all duration-100"
                    onClick={() => {
                      addField(field.type);
                      setActiveTab(field.type);
                      updateTabData(field.type);
                      close();
                    }}
                  >
                    <div>{field.Component && <field.Component />}</div>
                    <div className="ml-2">{field.type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </Popup>
      </div>
      <hr className="border-gray-200 mt-5" />
      <button className="w-64">
        <div className="flex justify-start items-center bg-gray-50 p-3 rounded-md mt-2 pl-2 hover:bg-gray-100 transition-all duration-500">
          <FaRegCircleDot className="mr-2 text-gray-400 text-sm" />
          <span className="text-center w-full text-sm">End Screen</span>
        </div>
      </button>
    </div>
  );
}

export default Content;
