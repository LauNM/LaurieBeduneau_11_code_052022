import {NavLink} from "react-router-dom";

function Thumb({ key, title, image }) {
  return (

      <div className={"thumb"}>
      {/*  <NavLink
          to={`lodging/${key}`}
        >*/}
        <div className={"thumb-gradient"}/>
        <img className={"thumb-cover"} src={image} alt={'cover'}/>
        <p className={"thumb-title"}>{title}</p>
        {/*</NavLink>*/}
      </div>
  )
}

export default Thumb;