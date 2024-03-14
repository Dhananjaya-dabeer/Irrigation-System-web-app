import dataContext from "./dataContext";
import React, { useState } from "react";
import { contextData } from "../sampledata/Sample";
const ContextProvider = ({ children }) => {
  const [data, setData] = useState(contextData);
  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
};

export default ContextProvider;
