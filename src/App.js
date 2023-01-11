import Header from "./component/Header";
import {data} from "./data/SpeakerData";
import {useState} from "react";
import Speaker from "./component/speaker/Speaker";

const App = () => {

  const [theme, setTheme] = useState("light");

  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme}/>
      <Speaker data={data} theme={theme} setTheme={setTheme}/>
    </div>
  );

};

export default App;