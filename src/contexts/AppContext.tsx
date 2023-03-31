import React, { createContext, useContext } from 'react';

interface AppContextType {
  /* your context properties and methods here */
  name: string
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
}

export function AppContextProvider({ children }: { children: React.ReactNode }) {
  /* your context state and functions here */
  const contextValue = {
    /* your context value here */
    name: "Diego"
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
