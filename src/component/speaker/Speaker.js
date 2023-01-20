import SpeakersToolbar from "./SpeakersToolbar";
import SpeakerList from "./SpeakerList";
import {SpeakerFilterProvider} from "../../context/SpeakerFilterContext";

const Speaker = () => {

  return (
    <SpeakerFilterProvider startingShowSessions={false} startingEventYear={"2019"}>
      <SpeakersToolbar/>
      <SpeakerList/>
    </SpeakerFilterProvider>
  );

};

export default Speaker;