import SessionList from "../session/SessionList";
import SpeakerImage from "./SpeakerImage";
import SpeakerDemographics from "./SpeakerDemographics";

const SpeakerCard = ({speaker, showSessions}) => {
  const {id, first, last, sessions} = speaker;
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last}/>
        <SpeakerDemographics {...speaker} />
      </div>

      {
        showSessions === true ? <SessionList sessions={sessions}/> : null
      }

    </div>
  );
}

export default SpeakerCard;