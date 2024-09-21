/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./SideBar";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormDataProvider } from "./hooks/useFormData";

function App() {
  return (
    <>
      <Router>
        <FormDataProvider>
          <div className="h-screen flex flex-row p-2">
            <div className="w-340px">
              <SideBar />
            </div>
            <div className="flex flex-1">
              <Content />
            </div>
          </div>
        </FormDataProvider>
      </Router>
    </>
  );
}

export default App;
