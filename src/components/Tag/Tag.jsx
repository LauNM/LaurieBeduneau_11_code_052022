import "./style.scss";

function Tag({ name }) {
  return (
    <span className={"tag-name"}>
      {name}
    </span>
  )
}

export default Tag;