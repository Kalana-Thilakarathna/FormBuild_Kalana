/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from "react";

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          title: "Welcome to our form",
          description: "This is a description of the form",
          button: "Start",
          image: null,
          align: "left",
        };
  });

  const [tabData, setTabData] = useState(() => {
    const savedData = localStorage.getItem("tabData");
    return savedData
      ? JSON.parse(savedData)
      : {
          tabData: "Welcome",
        };
  });

  const [emailData, setEmailData] = useState(() => {
    const savedData = localStorage.getItem("EmailData");
    return savedData
      ? JSON.parse(savedData)
      : {
          title: null,
          description: null,
          requiredStatus: null,
        };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("tabData", JSON.stringify(tabData));
  }, [tabData]);

  useEffect(() => {
    localStorage.setItem("EmailData", JSON.stringify(emailData));
  }, [emailData]);

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const updateTabData = (newTabData) => {
    setTabData(newTabData);
  };

  const updateEmailData = (newEmailData) => {
    setEmailData((prevData) => ({...prevData, ...newEmailData}));
  };

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, tabData, updateTabData, emailData, updateEmailData }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
