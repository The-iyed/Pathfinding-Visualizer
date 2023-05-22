"use client";
import React, { createContext, useState, useContext, SetStateAction } from 'react';

// Define the type for your context state
interface AppContextState {
  currentElement: string | undefined;
  setCurrentElement: React.Dispatch<SetStateAction<string | undefined>>;
}

// Create the context
const AppContext = createContext<AppContextState | undefined>(undefined);

// Create the provider component
export const AppProvider:any = ({ children }:any) => {
  const [currentElement, setCurrentElement] = useState<string | undefined>(undefined);

  const contextValue: AppContextState = {
    currentElement,
    setCurrentElement,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextState => {
   const context = useContext(AppContext);
   if (!context) {
     throw new Error('useAppContext must be used within an AppProvider');
   }
   return context;
 };

export default AppContext;
