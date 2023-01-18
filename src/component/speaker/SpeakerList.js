import SpeakerCard from "./SpeakerCard";
import useRequestDelay from "../../hooks/UseRequestDelay";
import {REQUEST_STATUS} from "../../constant/RequestStatus";
import {data} from "../../data/SpeakerData";

const SpeakerList = ({showSessions}) => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord
  } = useRequestDelay(2000, data);

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
          speakersData.map(speaker =>
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={(doneCallback) => {
                updateRecord({
                  ...speaker,
                  favorite: !speaker.favorite,
                }, doneCallback)
              }}
            />
          )
        }
      </div>
    </div>
  )
}

export default SpeakerList;