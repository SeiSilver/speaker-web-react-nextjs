import {useEffect, useState} from "react";
import {REQUEST_STATUS} from "../constant/RequestStatus";

const useRequestDelay = (delayTime = 1000, initData = []) => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    let status = '';
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        status = REQUEST_STATUS.SUCCESS;
        setData(initData);
      } catch (e) {
        status = REQUEST_STATUS.FAILURE;
        setError(e);
      }
    }
    delayFunc().then(() => {
      setRequestStatus(status);
    });
  }, []);

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const speakerNewData = data.map(data => data.id === record.id ? record : data);
    const startDelay = async () => {
      try {
        setData(speakerNewData); // Update UX data
        await delay(delayTime);
        // Update BE logic DB
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        setData(originalRecords);
      }
    };
    startDelay().then(() => {
      if (doneCallback) {
        doneCallback();
      }
    });
  }

  const deleteRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const speakerNewData = data.filter((rec) => {
      return rec.id !== record.id;
    });
    const startDelay = async () => {
      try {
        setData(speakerNewData); // Update UX data
        await delay(delayTime);
        // Update BE logic DB
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        setData(originalRecords);
      }
    };
    startDelay().then(() => {
      if (doneCallback) {
        doneCallback();
      }
    });
  }

  const insertRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const speakerNewData = [record, ...data];
    const startDelay = async () => {
      try {
        setData(speakerNewData); // Update UX data
        await delay(delayTime);
        // Update BE logic DB
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        setData(originalRecords);
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
    insertRecord,
    deleteRecord,
  };
}

export default useRequestDelay;