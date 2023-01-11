import SpeakerCard from "./SpeakerCard";

const SpeakerList = ({data, showSessions}) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {
          data.map(
            speaker => <SpeakerCard key={speaker.id} speaker={speaker} showSessions={showSessions}/>
          )
        }
      </div>
    </div>
  )
}

export default SpeakerList;