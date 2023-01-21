import {useEffect, useState} from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const REST_API_ENDPOINT = "api/speakers";

const useRequestRestApi = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  useEffect(() => {
    let status = '';
    const delayFunc = async () => {
      try {
        const result = await axios.get(REST_API_ENDPOINT);
        setData(result.data);
        status = REQUEST_STATUS.SUCCESS;
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
        await axios.put(`${REST_API_ENDPOINT}/${record.id}`, record);
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
        setData(speakerNewData);
        await axios.delete(`${REST_API_ENDPOINT}/${record.id}`, record);
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

    const startDelay = async () => {
      try {
        const results = await axios.post(`${REST_API_ENDPOINT}/99999`, record);
        const {data: insertedRecord} = results;
        const newRecords = [insertedRecord, ...data];
        setData(newRecords);
      } catch (error) {
        console.log("error thrown inside delayFunction", error);
        setData(originalRecords);
      }
    }
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

export default useRequestRestApi;
