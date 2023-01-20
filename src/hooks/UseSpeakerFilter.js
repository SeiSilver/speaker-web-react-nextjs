import {useState} from "react";

const useSpeakerFilter = (startingShowSessions, startingEventYear) => {

  const [showSessions, setShowSessions] = useState(startingShowSessions);
  const [eventYear, setEventYear] = useState(startingEventYear);
  const [searchQuery, setSearchQuery] = useState("");

  const EVENT_YEARS = Array.from({length: 25}, (x, i) => i + 1999);

  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchQuery,
    setSearchQuery,
    EVENT_YEARS
  };
}

export default useSpeakerFilter;
