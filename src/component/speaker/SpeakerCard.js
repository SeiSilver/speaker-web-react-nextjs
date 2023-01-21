import SessionList from "../session/SessionList";
import SpeakerImage from "./SpeakerImage";
import SpeakerDemographics from "./SpeakerDemographics";
import {useContext} from "react";
import {SpeakerFilterContext} from "../../context/SpeakerFilterContext";
import {SpeakerProvider} from "../../context/SpeakerContext";

const SpeakerCard = ({speaker, updateRecord}) => {

  const {showSessions} = useContext(SpeakerFilterContext);

  return (
    <SpeakerProvider speaker={speaker} updateRecord={updateRecord}>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage/>
          <SpeakerDemographics/>
        </div>
        {
          showSessions === true ? <SessionList/> : null
        }
      </div>
    </SpeakerProvider>

  );
}

export default SpeakerCard;