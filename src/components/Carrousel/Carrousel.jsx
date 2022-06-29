import "./style.scss";
import {useState} from "react";
import {ReactComponent as ArrowLeft} from "../../assets/images/arrow-left.svg"
import {ReactComponent as ArrowRight} from "../../assets/images/arrow-right.svg";

function Carrousel({ pictures }) {
  const numberOfPictures = pictures.length;
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrent((prevCurrent) => prevCurrent === 0 ? numberOfPictures - 1 : prevCurrent - 1)
  };
  const nextSlide = () => {
    setCurrent((prevCurrent) => prevCurrent === numberOfPictures - 1 ? 0 : prevCurrent + 1)
  };

  return (
    <div className={"carrousel-wrapper"}>
      {pictures.length === 1 ? '' : <ArrowLeft alt={'previous'} className={'arrow-left'} onClick={prevSlide}/> }
      {pictures.length === 1 ? '' : <ArrowRight alt={'next'} className={'arrow-right'} onClick={nextSlide}/> }
      <span className={'counter'}>{current + 1}/{numberOfPictures}</span>
      {pictures.map((picture, key) => {
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