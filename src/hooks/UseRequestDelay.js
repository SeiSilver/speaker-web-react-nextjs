import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../constant/RequestStatus";

const useRequestDelay = (delayTime = 1000, initData = []) => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(initData);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  const updateRecord = (recordUpdated, doneCallback) => {
    const speakerNewData = data.map(data => data.id === recordUpdated.id ? recordUpdated : data);
    const startDelay = async () => {
      try {
        await delay(delayTime);
        setData(speakerNewData);
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
      }
    };
    startDelay().then(() => {
      if (doneCallback) {
        doneCallback();
      }
    });
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
  };
}

export default useRequestDelay;