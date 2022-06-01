import Thumb from "../components/Thumb";
import DropdownList from "../components/DropdownList";
import DropdownText from "../components/DropdownText";

const data =
  {
    name: "Equipements",
    list: [
      {name: "clim"},
      {name: "wifi"},
      {name: "sdsdgf"},
      {name: "fdsfgsg"},
      {name: "fghfghg"},
      {name: "aezeze"},

    ]
  }
const data2 =
  {
    name: "Equipements",
    text: "dsfjsdf jsdlkfjsdl fjsdflkj sdkfjsdfj sdlfj sldkfj ksdl"
  }


function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <DropdownList data={data} />
      <DropdownText data={data2} />
      {/*<div className={"thumb-wrapper"}>
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
      </div>*/}

      {/*<ul>
        {props.data && props.data.length > 0 && props.data.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>*/}
    </div>
  )
}

export default Home;