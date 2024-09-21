/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../hooks/useFormData";
import { AiOutlineEnter } from "react-icons/ai";

function WelcomeContent() {
  const { formData, updateFormData } = useContext(FormDataContext);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before the elements appear

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <div
      className={`bg-slate-600 w-full rounded-2xl ml-2 p-2 drop-shadow-3xl transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex justify-center h-full items-center w-auto">
        {formData.image === null ? (
          <div>
            <form className="flex flex-col w-full justify-center items-center">
              <div
                className={`w-full transition-transform transform duration-700 ease-in-out ${
                  isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                }`}
              >
                <input
                  type="text"
                  name="title"
                  placeholder=""
                  className="bg-transparent text-white p-2 text-5xl font-bold font-arial mt-2 md:w-3xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                  onChange={handleChange}
                  value={formData.title}
                />
              </div>
              <div
                className={`w-full mt-1 transition-transform transform duration-700 ease-in-out ${
                  isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                }`}
              >
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="bg-transparent text-white p-2 mt-2 text-3xl md:w-3xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-row items-end w-full justify-start transition-transform transform duration-700 ease-in-out">
                <div className="gap-2 flex flex-row items-center">
                  <button
                    className="bg-white text-black text-bold p-2 rounded-2xl w-fit mt-3 ml-1"
                    name="button"
                    type="button"
                  >
                    {formData.button}
                  </button>
                  <div className="flex flex-row items-center gap-2">
                    <span className="ml-4 mt-2">
                      press <span className="font-bold font-mono">Enter</span>
                    </span>
                    <AiOutlineEnter className="mt-2" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between w-full">
            {formData.align === "left" ? (
              <div className="flex flex-row w-full">
                <div className="flex flex-row w-1/2 ml-40">
                  <form className="flex flex-col w-full justify-center items-center">
                    <div>
                      <div
                        className={`w-full transition-transform transform duration-700 ease-in-out ${
                          isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                        }`}
                      >
                        <input
                          type="text"
                          name="title"
                          placeholder=""
                          className="bg-transparent text-white p-2 text-5xl font-bold font-arial mt-2 outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                          onChange={handleChange}
                          value={formData.title}
                        />
                      </div>
                      <div
                        className={`w-full mt-1 transition-transform transform duration-700 ease-in-out ${
                          isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                        }`}
                      >
                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          className="bg-transparent text-white p-2 mt-2 text-3xl md:w-xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-end w-full justify-start">
                        <div className="gap-2 flex flex-row items-center">
                          <button
                            className="bg-white text-black text-bold p-2 rounded-2xl w-fit mt-3 ml-1"
                            name="button"
                            type="button"
                          >
                            {formData.button}
                          </button>
                          <div className="flex flex-row items-center gap-2">
                            <span className="ml-4 mt-2">
                              press{" "}
                              <span className="font-bold font-mono">Enter</span>
                            </span>
                            <AiOutlineEnter className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex justify-center items-center h-full w-1/2">
                  <img
                    src={formData.image}
                    alt="form"
                    className="w-600 h-700 rounded-2xl"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-row w-full">
                <div className="w-1/2 flex justify-center items-center h-full">
                  <img
                    src={formData.image}
                    alt="form"
                    className="w-600 h-700 rounded-2xl"
                  />
                </div>
                <div className="flex flex-row">
                  <form className="flex flex-col w-full justify-center items-center mr-52">
                    <div>
                      <div
                        className={`w-full transition-transform transform duration-700 ease-in-out ${
                          isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                        }`}
                      >
                        <input
                          type="text"
                          name="title"
                          placeholder=""
                          className="bg-transparent text-white text-right p-2 text-5xl font-bold font-arial mt-2 md:w-xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                          onChange={handleChange}
                          value={formData.title}
                        />
                      </div>
                      <div
                        className={`w-full transition-transform transform duration-700 ease-in-out ${
                          isVisible ? "translate-y-0" : "translate-y-10" // Adjusted for visibility
                        }`}
                      >
                        <input
                          type="text"
                          name="description"
                          placeholder="Description"
                          className="bg-transparent text-white p-2 text-right mt-2 text-3xl md:w-xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex flex-row items-end w-full justify-end">
                        <div className="gap-2 flex flex-row items-center">
                          <button
                            className="bg-white text-black text-bold p-2 rounded-2xl w-fit mt-3 ml-1"
                            name="button"
                            type="button"
                          >
                            {formData.button}
                          </button>
                          <div className="flex flex-row items-center gap-2">
                            <span className="ml-4 mt-2">
                              press{" "}
                              <span className="font-bold font-mono">Enter</span>
                            </span>
                            <AiOutlineEnter className="mt-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default WelcomeContent;
