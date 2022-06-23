import Thumb from "../components/Thumb/Thumb";
import coverImage from "../assets/images/background-image.png";

function Home({data}) {
  return (
    <div className={"main"}>
      <div className={"home-header"}>
        <div className={"cover-darken"}/>
        <img src={coverImage} alt={'cover-image'} className={'cover-home-page'}/>
        <h1 className={"home-title"}>Chez vous, partout et ailleurs</h1>
      </div>
       <div className={"thumb-wrapper"}>
       {data.map((item, i) =>
          <Thumb
            key={i}
            item={item}
          /> )}
      </div>
    </div>
  )
}

export default Home;