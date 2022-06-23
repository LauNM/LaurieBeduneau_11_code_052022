import "./style.scss";
import {useState} from "react";
import { ReactComponent as ArrowLeft } from "../../assets/images/arrow-left.svg"
import { ReactComponent as ArrowRight } from "../../assets/images/arrow-right.svg";

function Carrousel({pictures}) {
const numberOfPictures = pictures.length;
const [current, setCurrent] = useState(0);

if(!Array.isArray(pictures) || pictures.length <= 0) {
  return null;
}

const prevSlide = () => {
  setCurrent(current === 0 ? numberOfPictures - 1 : current - 1)
};
const nextSlide = () => {
  setCurrent(current === numberOfPictures - 1 ? 0 : current + 1)
};

  return (
    <div className={"carrousel-wrapper"}>
      <ArrowLeft alt={'previous'} className={'arrow-left'} onClick={prevSlide}/>
      <ArrowRight alt={'next'} className={'arrow-right'} onClick={nextSlide}/>
      <span className={'counter'}>{current + 1}/{numberOfPictures}</span>
      { pictures.map((picture, key) =>{
        return (
          <div className={key === current ? 'slide active' : 'slide'} key={key}>
            {key === current && (<img
              src={picture}
              key={key}
              alt={`image ${key}`}
              className={'image'}
            />)}

          </div>
        )
      }
        )}
    </div>
  )
}
export default Carrousel;