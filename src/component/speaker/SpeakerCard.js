import SessionList from "../session/SessionList";
import SpeakerImage from "./SpeakerImage";
import SpeakerDemographics from "./SpeakerDemographics";
import React, {useContext} from "react";
import {SpeakerFilterContext} from "../../context/SpeakerFilterContext";
import {SpeakerProvider} from "../../context/SpeakerContext";
import SpeakerDeleteBtn from "./button/SpeakerDeleteBtn";
import ErrorBoundary from "../error/ErrorBoundary";

const SpeakerCardContent = ({speaker, updateRecord, insertRecord, deleteRecord, showErrorCard,}) => {

  const {showSessions} = useContext(SpeakerFilterContext);

  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <img src="/images/speaker-99999.jpg"/>
          <div>
            <b>Error Showing Speaker</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SpeakerProvider
      speaker={speaker}
      updateRecord={updateRecord}
      insertRecord={insertRecord}
      deleteRecord={deleteRecord}
    >
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage/>
          <SpeakerDemographics/>
        </div>
        {
          showSessions === true ? <SessionList/> : null
        }
        <SpeakerDeleteBtn/>
      </div>
    </SpeakerProvider>

  );
}

const SpeakerCard = (props) => {
  return (
    <ErrorBoundary errorUI={<SpeakerCardContent {...props} showErrorCard={true}/>}>
      <SpeakerCardContent {...props}></SpeakerCardContent>
    </ErrorBoundary>
  );
}


const areEqual = (prevProps, nextProps) => {
  return prevProps.speaker.favorite === nextProps.speaker.favorite;
}

export default React.memo(SpeakerCard, areEqual);