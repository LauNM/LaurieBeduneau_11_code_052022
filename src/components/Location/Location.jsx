import { useParams } from "react-router-dom";
import "./style.scss";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";

function Location( {data} ) {
  let params = useParams();
  let location = data.find((element) => element.id === params.id)
  console.log(location)
  return (
    <div className={"location-wrapper"}>
      <img src={location.cover} alt={'cover'} height={"415px"}/>
      {/*<Carrousel />*/}
      <header>
        <div className={"location"}>
          <h1 className={"is-size-4"}>{location.title}</h1>
          <p className={"is-size-6"}>{location.location}</p>
          <div className={"tags"}>
            {location.tags.map((tag, i) =>
              <Tag
                key={i}
                name={tag}
              /> )}
          </div>
        </div>
        <div className={"host"}>
          <div>
            <p className={"is-size-6"}>{location.host.name}</p>
            <img src={location.host.picture} alt={'host picture'} className={"host-avatar"}/>
          </div>
          <div className={"rating"}>
            <Rating number={location.rating} />
          </div>
        </div>
      </header>


    </div>
  )
}

export default Location;