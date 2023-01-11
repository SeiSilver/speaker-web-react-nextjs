const SessionCard = ({title, room}) => {
  // const {title, room} = props;
  return (
    <span className="session w-100">
      {title} <strong>Room: {room}</strong>
    </span>
  )
}

export default SessionCard;