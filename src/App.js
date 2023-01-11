import Header from "./component/Header";
import {useState} from "react";
import Speaker from "./component/speaker/Speaker";

const App = () => {

  const [theme, setTheme] = useState("light");

  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme}/>
      <Speaker theme={theme} setTheme={setTheme}/>
    </div>
  );

};

export default App;