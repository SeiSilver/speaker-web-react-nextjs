import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import {useState} from "react";

const Speaker = ({theme, setTheme}) => {

  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakerList
        showSessions={showSessions}
      />
    </>

  );

};

export default Speaker;