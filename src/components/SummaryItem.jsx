export default function SummaryItem(props) {
  return (
    <li className="summary-item">
      <img src={props.icon} alt="" className="summary-item__icon" />
      <p className="summary-item__category">{props.category}</p>
      <p className="summary-item__score">{`${props.score} / 100`}</p>
    </li>
  )
}
