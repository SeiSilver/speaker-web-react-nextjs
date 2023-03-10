import {useContext} from "react";
import {ThemeContext, ThemeProvider} from "../context/ThemeContext";

const Layout = ({startingTheme, children}) => {
  return (
    <ThemeProvider startingTheme={startingTheme}>
      <LayoutContent children={children}/>
    </ThemeProvider>
  );
}

const LayoutContent = ({children}) => {

  const {theme} = useContext(ThemeContext);

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      {children}
    </div>
  );
}

export default Layout;