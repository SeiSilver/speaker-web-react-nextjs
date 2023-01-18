import SpeakerCard from "./SpeakerCard";
import useRequestSpeakers from "../../hooks/UseRequestSpeakers";
import {REQUEST_STATUS} from "../../constant/RequestStatus";

const SpeakerList = ({showSessions}) => {

  const {
    speakerData,
    requestStatus,
    error,
    onFavoriteToggle
  } = useRequestSpeakers(2000);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {error}</b>
      </div>
    );
  }

  if (requestStatus === REQUEST_STATUS.LOADING) {
    return <div>Loading...</div>
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