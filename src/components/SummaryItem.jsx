export default function SummaryItem(props) {
  return (
    <li
      role="listitem"
      className={`summary-item summary-item--${props.category.toLowerCase()}`}
    >
      <div className="summary-item__icon-category-wrapper">
        <img src={props.icon} alt="" className="summary-item__icon" />
        <p className="summary-item__category">{props.category}</p>
      </div>
      <p className="summary-item__score">
        <span className="achieved-score">
          <strong>{props.score}</strong>
        </span>
        <span className="total-score"> / 100</span>
      </p>
    </li>
  )
}
