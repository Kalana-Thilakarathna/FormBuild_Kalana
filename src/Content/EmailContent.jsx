/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from "react";
import { FormDataContext } from "../hooks/useFormData";

function EmailContent() {
  const { emailData, updateEmailData } = useContext(FormDataContext);
  const [emailValidState, setEmailValideState] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    updateEmailData({ [e.target.name]: e.target.value });
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        setEmailValideState("Valid email");
      } else {
        setEmailValideState("Invalid email");
      }
    } else {
      setEmailValideState("");
    }
  };

  useEffect(() => {
    // Add animation on component mount
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
        <div>
          <form className="flex flex-col w-full justify-center items-center">
            <div
              className={`w-full transition-transform transform duration-700 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-100"
              }`}
            >
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="bg-transparent text-white p-2 text-5xl font-bold font-arial mt-2 md:w-3xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                onChange={handleChange}
                value={emailData.title || ""}
              />
            </div>
            <div
              className={`w-full mt-1 transition-transform transform duration-700 delay-100 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-40"
              }`}
            >
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="bg-transparent text-white p-2 mt-2 text-3xl md:w-3xl w-full outline-none hover:outline-blue-300 focus:outline-blue-400 transition-all duration-500 rounded-sm"
                value={emailData.description || ""}
                onChange={handleChange}
              />
            </div>
            <div
              className={`flex flex-col transition-transform transform duration-700 delay-200 ease-in-out ${
                isVisible ? "translate-y-0" : "translate-y-40"
              }`}
            >
              <input
                type="email"
                name="email"
                placeholder="email"
                className="bg-transparent text-white p-2 mt-2 text-2xl md:w-3xl w-full border-b border-white focus:outline-none hover:outline-blue-700"
                onChange={checkEmail}
              />
            </div>
            <label
              className={`text-sm mt-2 ml-2 font-bold transition-opacity duration-500 ease-in-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                color:
                  emailValidState === "Valid email" ? "#5DBB63" : "#D21404",
              }}
            >
              {emailValidState}
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailContent;
