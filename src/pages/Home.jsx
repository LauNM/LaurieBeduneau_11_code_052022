import Thumb from "../components/Thumb/Thumb";

function Home({data}) {
  return (
    <div className={"main"}>
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