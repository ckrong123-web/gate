"use client";

import React, { createContext, useContext, useState } from "react";

const PopupContext = createContext({
  popupList: [],
  setPopupList: () => {},
});

export function usePopupContext() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error(
      "usePopupContext must be used within an PopupContextProvider"
    );
  }
  return context;
}

export default function PopupProvider({ children }) {
  const [popupList, setPopupList] = useState([]);

  return (
    <PopupContext.Provider
      value={{
        popupList,
        setPopupList,
      }}
    >
      {children}
    </PopupContext.Provider>
  );
}
