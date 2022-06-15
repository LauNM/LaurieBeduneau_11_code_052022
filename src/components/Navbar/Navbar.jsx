import {NavLink} from "react-router-dom";
import "./style.scss";

function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className={'navbar'}>
      <img src={"./images/LOGO.svg"} alt={"logo"}/>
      <nav>
        <ul className={'navbar-items'}>
          <li>
            <NavLink
              to=""
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              Accueil
            </NavLink>
            </li>
          <li>
            <NavLink
              to="about"
              style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;