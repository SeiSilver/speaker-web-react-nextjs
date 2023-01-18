import SpeakerCard from "./SpeakerCard";
import {useState} from "react";
import {data} from "../../data/SpeakerData";

const SpeakerList = ({showSessions}) => {

  const [speakerData, setSpeakerData] = useState(data);

  const onFavoriteToggle = (id) => {

    const currentSpeaker = speakerData.find(s => s.id === id);
    const updateCurrentSpeaker = {
      ...currentSpeaker,
      favorite: !currentSpeaker.favorite
    };
    const speakerNewData = [...speakerData, updateCurrentSpeaker];
    setSpeakerData(speakerNewData);
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {
          speakerData.map(speaker =>
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id)
              }}
            />
          )
        }
      </div>
    </div>
  )
}

export default SpeakerList;