function Thumb({title, image}) {
  return (
    <div className={"thumb"}>
      <div className={"thumb-gradient"} />
      <img className={"thumb-cover"} src={image} alt={'cover'}/>
      <p className={"thumb-title"}>{title}</p>

    </div>
  )
}

export default Thumb;