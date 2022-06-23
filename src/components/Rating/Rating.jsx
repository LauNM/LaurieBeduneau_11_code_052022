import "./style.scss";
import {ReactComponent as Star} from "../../assets/images/star.svg";

function Rating({ number }) {
  const starArray = [...Array(5).keys()].map(i => i + 1);

  return (
    <div>
      {starArray.map((i, idx) => (
        <Star key={idx} className={"star"} fill={number >= i ? '#FF6060' : '#E3E3E3'}/>
      ))}
    </div>
  )
}

export default Rating;