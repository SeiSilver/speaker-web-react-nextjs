import {useContext} from "react";
import {SpeakerContext} from "../../context/SpeakerContext";

const SpeakerImage = () => {

  const {speaker: {id, first, last}} = useContext(SpeakerContext);

  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

export default SpeakerImage;