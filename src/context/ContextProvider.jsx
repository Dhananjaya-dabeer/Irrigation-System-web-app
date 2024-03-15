import dataContext from "./dataContext";
import React, { useState } from "react";
import { contextData } from "../sampledata/Sample";
const ContextProvider = ({ children }) => {
  const [data, setData] = useState(contextData);
  const[popup, setPopup] = useState(false)
  return (
    <dataContext.Provider value={{ data, setData, popup, setPopup }}>
      {children}
    </dataContext.Provider>
  );
};

export default ContextProvider;
