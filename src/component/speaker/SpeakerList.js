import SpeakerCard from "./SpeakerCard";
import useRequestDelay from "../../hooks/UseRequestDelay";
import {REQUEST_STATUS} from "../../constant/RequestStatus";
import {data} from "../../data/SpeakerData";
import {useContext} from "react";
import {SpeakerFilterContext} from "../../context/SpeakerFilterContext";
import SpeakerAddBtn from "./button/SpeakerAddBtn";

const SpeakerList = () => {

  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestDelay(2000, data);

  const {searchQuery, eventYear} = useContext(SpeakerFilterContext);

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
      <SpeakerAddBtn eventYear={eventYear} insertRecord={insertRecord}/>
      <div className="row">
        {
          speakersData
            .filter((speaker) => {
              return (
                speaker.first.toLowerCase().includes(searchQuery) ||
                speaker.last.toLowerCase().includes(searchQuery)
              );
            })
            .filter((speaker) => {
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map((speaker) => {
              return (
                <SpeakerCard
                  key={speaker.id}
                  speaker={speaker}
                  updateRecord={updateRecord}
                  insertRecord={insertRecord}
                  deleteRecord={deleteRecord}
                />
              );
            })}
      </div>
    </div>
  )
}

export default SpeakerList;