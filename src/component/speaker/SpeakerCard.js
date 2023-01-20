import SessionList from "../session/SessionList";
import SpeakerImage from "./SpeakerImage";
import SpeakerDemographics from "./SpeakerDemographics";
import {useContext} from "react";
import {SpeakerFilterContext} from "../../context/SpeakerFilterContext";

const SpeakerCard = ({speaker, onFavoriteToggle}) => {

  const {id, first, last, sessions} = speaker;
  const {showSessions} = useContext(SpeakerFilterContext);

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage id={id} first={first} last={last}/>
        <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle}/>
      </div>
      {
        showSessions === true ? <SessionList sessions={sessions}/> : null
      }
    </div>
  );
}

export default SpeakerCard;