import Thumb from "../components/Thumb";
import Collapse from "../components/Collapse";

function Home({data}) {
  const description = data[0].description;
  const list = data[0].equipments.map((equiment, key) => <li key={key}>{equiment}</li>);
  return (
    <div>
      <h1>Home</h1>
      <Collapse title={'Description'} width={'half'}>
        <ul>
          {list}
        </ul>
        </Collapse>
      <Collapse title={'Description'} size={'is-size-5'}>
        <p>
          {description}
        </p>
        </Collapse>
      {/*<Collapse title={'Equipements'} content={props.data[0].equipments} />*/}
      {/*<div className={"thumb-wrapper"}>
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
        <Thumb title={"titre de la location"} />
      </div>*/}

    </div>
  )
}

export default Home;