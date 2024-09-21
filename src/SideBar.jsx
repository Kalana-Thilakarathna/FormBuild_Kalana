/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsFillBoxFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { FaGear } from "react-icons/fa6";
import "./App.css";
import Content from "./Component/Centent/Content";
import Design from "./Component/Design";
import Share from "./Component/Share";
import Replies from "./Component/Replies";

function SideBar() {
  const [activeTab, setActiveTab] = useState("Content");

  const tabs = ["Content", "Design", "Share", "Replies"];
  const tabIndex = tabs.indexOf(activeTab);

  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      return JSON.parse(storedFormData);
    }
    return {
      
    };
  });

  

  useState(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    } else {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  },[]);

  return (
    <div className="rounded-2xl flex flex-col p-5 relative">
      <div className="flex flex-row justify-between mb-5">
        <div className="flex justify-evenly text-lg">
          <button className="text-slate-500 hover:text-blue-700 transition-colors ease-in-out duration-500 flex flex-row items-center">
            <BsFillBoxFill className="mr-2 text-gray-400" /> Dashboard
          </button>
          <div className="mx-2 text-black font-bold flex items-center">
            <IoIosArrowForward />
          </div>
          <div className="">
            <p>test</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-black text-xl hover:text-zinc-600 transition-colors ease-in-out duration-500 flex flex-row items-center">
            <FaGear className="mr-2" />
          </button>
        </div>
      </div>
      <div className="relative flex flex-row bg-neutral-200 p-1 rounded-md px-3 mt-3">
        <div
          className="absolute h-8 bg-white rounded-md transition-transform duration-500 ease-in-out"
          style={{ width: `${80}px`, transform: `translateX(${tabIndex * 80}px)` }}
        ></div>
        <div className="flex flex-row  z-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-1 w-20 rounded-md text-black transition-all duration-300 ${
                activeTab === tab ? "" : "hover:bg-neutral-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "Content" && <Content />}
      {activeTab === "Design" && <Design />}
      {activeTab === "Share" && <Share />}
      {activeTab === "Replies" && <Replies />}
    </div>
  );
}

export default SideBar;
