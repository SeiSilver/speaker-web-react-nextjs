import Header from "./component/Header";
import {useState} from "react";
import Speaker from "./component/speaker/Speaker";
import {ThemeContext} from "./context/ThemeContext";

const App = () => {

  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }>
        <Header/>
        <Speaker/>
      </div>
    </ThemeContext.Provider>
  );

};

export default App;