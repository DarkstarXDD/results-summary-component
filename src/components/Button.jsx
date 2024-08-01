export default function Button(props) {
  return (
    <button onClick={props.handleClick} className="button">
      {props.buttonText}
    </button>
  )
}
