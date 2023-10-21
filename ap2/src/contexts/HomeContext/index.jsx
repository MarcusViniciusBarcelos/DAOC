import { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const HomeContext = ({ children }) => {
  const [contextState, setState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
