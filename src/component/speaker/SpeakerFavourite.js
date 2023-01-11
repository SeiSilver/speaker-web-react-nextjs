const SpeakerFavourite = ({isFavorite, onFavoriteToggle}) => {
  return (
    <div className="action padB1">
      <span onClick={onFavoriteToggle}>
        <i
          className={
            isFavorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
      </span>
    </div>
  );
}

export default SpeakerFavourite;