import SpeakerCard from "./SpeakerCard";

const SpeakerList = ({data}) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {
          data.map(
            speaker => <SpeakerCard key={speaker.id} speaker={speaker}/>
          )
        }
      </div>
    </div>
  )
}

export default SpeakerList;