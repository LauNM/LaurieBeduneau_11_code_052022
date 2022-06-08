function Thumb(props) {
  return (
    <div className={"thumb"}>
      <div className={"thumb-gradient"}>
        <p className={"thumb-title"}>{props.title}</p>
      </div>
    </div>
  )
}

export default Thumb;