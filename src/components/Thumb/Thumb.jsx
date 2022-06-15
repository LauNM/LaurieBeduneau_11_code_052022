import {Link} from "react-router-dom";
import "./style.scss";

function Thumb({ item }) {
  return (
    <Link to={`/location/${item.id}`} key={item.id} className={"thumb"}>
      <div className={"thumb-gradient"}/>

      <img className={"thumb-cover"} src={item.cover} alt={'cover'}/>
      <p className={"thumb-title"}>{item.title}</p>
    </Link>
  )
}

export default Thumb;