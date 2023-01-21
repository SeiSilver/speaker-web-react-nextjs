const SessionCard = ({title, room}) => {
  // const {title, room} = props;
  return (
    <span className="session w-100">
      {title} <strong>Room: {room.name}</strong>
    </span>
  )
}

export default SessionCard;