function DropdownText(props) {
  return (
    <div className={"dropdown-text"}>
      <div className={"dropdown-header"}>
        <span className={"dropdown-title"}>
          {props.data.name}
        </span>
        <span> icon </span>
      </div>
      <div className={"dropdown-body"}>
        <p>{props.data.text}</p>
      </div>
    </div>
  )
}

export default DropdownText;