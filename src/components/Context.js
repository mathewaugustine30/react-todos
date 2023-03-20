import { createContext } from "react";

export const todoContext = createContext();

function Context() {
  return (
    <div>
      <todoContext.Provider></todoContext.Provider>
    </div>
  );
}
