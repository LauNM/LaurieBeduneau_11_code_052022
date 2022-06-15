import { useParams } from "react-router-dom";
import "./style.scss";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";
import Collapse from "../Collapse/Collapse";

function Location( {data} ) {
  let params = useParams();
  let location = data.find((element) => element.id === params.id)
  const hostName = location.host.name.split(' ');
  const firstName = hostName[0];
  const lastName = hostName[1];
  console.log(data)
  return (
    <div className={"location-wrapper"}>
      <img src={location.cover} alt={'cover'} height={"415px"}/>
      {/*<Carrousel />*/}
      <header>
        <div className={"location"}>
          <h1 className={"location-name is-size-4"}>{location.title}</h1>
          <p className={"location-city is-size-6"}>{location.location}</p>
          <div className={"tags"}>
            {location.tags.map((tag, i) =>
              <Tag
                key={i}
                name={tag}
              /> )}
          </div>
        </div>
        <div className={"host-infos"}>
          <div className={"host"}>
            <div className={"host-name"}>
              <p className={"is-size-6"}>{firstName}</p>
              <p className={"is-size-6"}>{lastName}</p>
            </div>
            <img src={location.host.picture} alt={'host picture'} className={"host-avatar"}/>
          </div>
          <div className={"rating"}>
            <Rating number={location.rating} />
          </div>
        </div>
      </header>
      <main>
        <Collapse title={"Description"} width={"half"} children={location.description} />
        <Collapse title={"Equipements"} width={"half"} >
          <ul>
            {location.equipments.map((equipment, i) => <li key={i}>{equipment}</li>) }
          </ul>
        </Collapse>
      </main>
    </div>
  )
}

export default Location;