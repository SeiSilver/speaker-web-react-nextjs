import {useState} from "react";

const SpeakerFavourite = ({isFavorite, onFavoriteToggle}) => {
  const [inTransition, setInTransition] = useState(false);

  const doneCallback = () => {
    setInTransition(false);
  }

  return (
    <div className="action padB1">
      <span onClick={() => {
        setInTransition(true);
        onFavoriteToggle(doneCallback);
      }}>
        <i
          className={
            isFavorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
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