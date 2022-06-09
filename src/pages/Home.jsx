import Thumb from "../components/Thumb";
import Collapse from "../components/Collapse";
import Carrousel from "../components/Carrousel";


function Home({data}) {
  return (
    <div>
       <div className={"thumb-wrapper"}>
       {data.map((item) =>
          <Thumb
            key={item.id}
            title={item.title}
            image={item.cover}
          /> )}
      </div>
    </div>
  )
}

export default Home;