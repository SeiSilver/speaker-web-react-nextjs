import {createContext} from "react";
import useTheme from "../hooks/UseTheme";

export const ThemeContext = createContext({});

const ThemeProvider = ({startingTheme, children}) => {

  const {theme, setTheme} = useTheme(startingTheme);

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );

}

export {ThemeProvider};