import {useContext, useState} from "react";
import {SpeakerContext} from "../../context/SpeakerContext";

const SpeakerFavourite = () => {
  const {speaker, updateRecord} = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);

  const doneCallback = () => {
    setInTransition(false);
  }

  return (
    <div className="action padB1">
      <span onClick={() => {
        setInTransition(true);
        updateRecord(
          {
            ...speaker,
            favorite: !speaker.favorite,
          },
          doneCallback
        );
      }}>
        <i
          className={
            speaker.favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {
          inTransition ? (<span className="fas fa-circle-notch fa-spin"></span>) : null
        }
      </span>
    </div>
  );
}

export default SpeakerFavourite;