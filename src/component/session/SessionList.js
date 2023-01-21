import SessionCard from "./SessionCard";
import {useContext} from "react";
import {SpeakerFilterContext} from "../../context/SpeakerFilterContext";

const SessionList = ({sessions}) => {
  const {eventYear} = useContext(SpeakerFilterContext);
  console.log(sessions);
  return (
    <div className="sessionBox card h-250">
      {
        sessions
          .filter((session) => {
            return session.eventYear === eventYear;
          })
          .map((session) => {
            return (
              <div className="session w-100" key={session.id}>
                <SessionCard {...session} />
              </div>
            );
          })
      }
    </div>
  );
}

export default SessionList