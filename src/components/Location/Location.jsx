import { useParams } from "react-router-dom";
import "./style.scss";
import star from "../../assets/images/star.svg";
import Tag from "../Tag/Tag";

function Location( {data} ) {
  let params = useParams();
  let location = data.find((element) => element.id === params.id)
  const rating = location.rating;
  const greyStar = 5 - rating;
  let tab = [];
  const ratingStar = () => {
    for (let i = 0; i < rating; i++) {
      tab.push('star')
    }
    return tab;
  }
  ratingStar();
    console.log(location)
  return (
    <div className={"location-wrapper"}>
      <img src={location.cover} height={"415px"}/>
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
            <img src={location.host.picture} className={"host-avatar"}/>
          </div>
          <div className={"rating"}>

            { tab.map((e, i) => <img src={star} key={i}/>)}
            {/*{ for (let  i=0; i < {location.rating}; i++) {
             <img src={"./assets.images.star"} />
              } }*/}
            {/*{location.rating}*/}
            {/*{ [...Array(n)].map((e, i) =>  <img src={star} key={i}/>) }*/}
          </div>
        </div>
      </header>


    </div>
  )
}

export default Location;