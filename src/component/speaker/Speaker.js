import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import {useState} from "react";

const Speaker = () => {

  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolbar
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