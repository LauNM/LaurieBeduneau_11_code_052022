import "./style.scss";
import {ReactComponent as Logo} from "./LOGO.svg";

function Footer() {
  return (
    <footer className={'footer'}>
      <Logo className={'logo'}/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>)

}

export default Footer;