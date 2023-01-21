import withAuth from "../../../hoc/withAuth";

const SpeakerAddBtn = ({eventYear, insertRecord, loggedInUser}) => {

  if (!loggedInUser || loggedInUser.length === 0) return null;

  return (
    <a href="src/component/speaker/button/SpeakerAddBtn#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name:", "");
          const firstLastArray = firstLast.split(" ");
          insertRecord({
            id: (Math.floor(Math.random() * 9999999) + 99999).toString(),
            first: firstLastArray[0],
            last: firstLastArray[1],
            bio: "Bio not entered yet",
            sessions: [
              {
                id: (Math.floor(Math.random() * 9999999) + 99999).toString(),
                title: `New Session For ${firstLastArray[0]}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default withAuth(SpeakerAddBtn);
