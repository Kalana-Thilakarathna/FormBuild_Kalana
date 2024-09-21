/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "./hooks/useFormData";
import WelcomeContent from "./Content/WelcomeContent";
import EmailContent from "./Content/EmailContent";

function Content() {

  const { tabData } = useContext(FormDataContext);

  return (
    <>
      { tabData.tabData === "Welcome" ? <WelcomeContent /> : <EmailContent /> }
    </>
  );
}

export default Content;
