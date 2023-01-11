import SpeakerCard from "./SpeakerCard";
import {useState} from "react";
import {data} from "../../data/SpeakerData";

const SpeakerList = ({showSessions}) => {

  const [speakerData, setSpeakerData] = useState(data);
  
  return (
    <div className="container speakers-list">
      <div className="row">
        {
          speakerData.map(
            speaker => <SpeakerCard key={speaker.id} speaker={speaker} showSessions={showSessions}/>
          )
        }
      </div>
    </div>
  )
}

export default SpeakerList;