import SessionCard from "./SessionCard";

const SessionList = ({sessions}) => {
  return (
    <div className="sessionBox card h-250">
      {
        // sessions.map(s =>
        <SessionCard title={sessions[0].title} room={sessions[0].room.name}/>
        // )
      }
    </div>
  );
}

export default SessionList