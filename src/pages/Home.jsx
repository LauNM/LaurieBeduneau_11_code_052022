import Thumb from "../components/Thumb";


function Home({data}) {
  const thumbList = data.map((item, key) => <Thumb key={key} title={item.title} image={item.cover}/> )
  return (
    <div>
      <h1>Home</h1>
      <div className={"thumb-wrapper"}>
        {thumbList}
      </div>
    </div>
  )
}

export default Home;