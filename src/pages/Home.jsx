import Thumb from "../components/Thumb";
import Collapse from "../components/Collapse";


function Home({data}) {
  return (
    <div>
      <h1>Home</h1>
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