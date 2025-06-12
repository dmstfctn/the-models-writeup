"use client";

import { createContext, useContext } from "react"

export const ContentsContext = createContext();

export const ContentsProvider = ({ children, value }) => {  
  return <ContentsContext.Provider value={value}>{children}</ContentsContext.Provider>;
};

export const useContents = () => {
  const value = useContext(ContentsContext);  
  if (!value) throw new Error("useContents() must be used within a ContentsProvider");
  return value;
};