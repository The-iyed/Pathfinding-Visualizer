"use client";
import React, {
  createContext,
  useState,
  useContext,
  SetStateAction,
} from "react";

// Define the type for your context state
interface AppContextState {
  currentElement: string | undefined;
  setCurrentElement: React.Dispatch<SetStateAction<string | undefined>>;
  object: { position: string; status: string }[];
  setObject: React.Dispatch<SetStateAction<{ position: string; status: string }[]>>;
  result:any[];
  setResult:React.Dispatch<SetStateAction<any>>

}

// Create the context
const AppContext = createContext<AppContextState | undefined>(undefined);

// Create the provider component
export const AppProvider: any = ({ children }: any) => {
  const [currentElement, setCurrentElement] = useState<string | undefined>(
   'cross'
  );
  const [object, setObject] = useState<{ position: string; status: string }[]>([]);
  const [result, setResult] = useState<any[]>([]);

  const contextValue: AppContextState = {
    currentElement,
    setCurrentElement,
    object,
    setObject,
    result,
    setResult
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export default AppContext;
