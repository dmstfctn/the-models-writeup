"use client";

import { createContext, useContext } from "react"

export const SidebarContext = createContext();

export const SidebarProvider = ({ children, value }) => {  
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
};

export const useSidebar = () => {
  const value = useContext(SidebarContext);  
  if (!value) throw new Error("useSidebar() must be used within a SidebarProvider");
  return value;
};