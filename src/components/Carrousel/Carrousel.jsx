import "./style.scss";

function Carrousel({location}) {
const numberOfPictures = location.pictures.length;
  return (
    <div className={"carrousel-wrapper"}>
      <p>{numberOfPictures}</p>
      { location.pictures.map((picture, key) =>
        <img
          src={picture}
          key={key}
          alt={`image ${key}`}
        />)}
    </div>
  )
}
export default Carrousel;