import {useState, useCallback} from "react";
import {ReactComponent as ArrowUp} from "../../assets/images/arrow-up.svg"
import {ReactComponent as ArrowDown} from "../../assets/images/arrow-down.svg";
import "./style.scss";

function Collapse({ title = '', width = 'full', children }) {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => setActive((prevState) => {
    return !prevState
  }), []);

  return (
    <div className={`collapse ${width}`}>
      <div className={"collapse-header"} onClick={handleClick}>
        <span className={"collapse-title"}>
          {title}
        </span>
        <span className={'arrows'}>
        {active && <ArrowUp/>}{!active && <ArrowDown/>}
        </span>
      </div>
      {active && <div className={`collapse-body`}>
        {children}
      </div>}
    </div>
  )
}

export default Collapse;