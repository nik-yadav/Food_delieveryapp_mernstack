import React, { createContext, useState } from "react";

export const Mycontext = createContext();
export const datacontext = createContext();

export function Context({ children }) {
  const [dataState, setdatastate] = useState({});
  const [id, setid] = useState("not id");

  return (
    <div>
      <Mycontext.Provider value={[dataState, setdatastate]}>
        <datacontext.Provider value={[id, setid]}>
          {children}
        </datacontext.Provider>
      </Mycontext.Provider>
    </div>
  );
}
