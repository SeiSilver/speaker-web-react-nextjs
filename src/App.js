import Header from "./component/Header";
import SpeakersToolbar from "./component/speaker/SpeakersToolbar";
import SpeakerList from "./component/speaker/SpeakerList";
import {data} from "./data/SpeakerData";
import {useState} from "react";

const App = () => {

  const [theme, setTheme] = useState("light");

  return (
    <div className={
      theme === "light" ? "container-fluid light" : "container-fluid dark"
    }>
      <Header theme={theme}/>
      <SpeakersToolbar theme={theme} setTheme={setTheme}/>
      <SpeakerList data={data}/>
    </div>
  );

};

export default App;