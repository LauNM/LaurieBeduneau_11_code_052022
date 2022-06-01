function DropdownList(props) {
  return (
    <div className={"dropdown-list"}>
      <div className={"dropdown-header"}>
        <span className={"dropdown-title"}>
          {props.data.name}
        </span>
        <span> icon </span>
      </div>
      <div className={"dropdown-body"}>
        <ul>
          {props.data.list && props.data.list.length > 0 && props.data.list.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default DropdownList;