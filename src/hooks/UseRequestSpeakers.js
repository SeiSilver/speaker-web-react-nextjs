import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../constant/RequestStatus";
import {data} from "../data/SpeakerData";

const useRequestSpeakers = (delayTime = 1000) => {
  const [speakerData, setSpeakerData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakerData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  const onFavoriteToggle = (id) => {
    const currentSpeaker = speakerData.find(s => s.id === id);
    const updateCurrentSpeaker = {
      ...currentSpeaker,
      favorite: !currentSpeaker.favorite
    };
    const speakerNewData = speakerData.map(data => data.id === id ? updateCurrentSpeaker : data);
    setSpeakerData(speakerNewData);
  }

  return {
    speakerData,
    requestStatus,
    error,
    onFavoriteToggle,
  };
}

export default useRequestSpeakers;