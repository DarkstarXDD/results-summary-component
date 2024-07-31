import SummaryItem from "./SummaryItem"
import Button from "./Button"

export default function Summary(props) {
  const resultsData = props.jsonData

  const summaryItemElements = resultsData.map((result) => {
    return (
      <SummaryItem
        key={result.id}
        icon={result.icon}
        category={result.category}
        score={result.score}
      />
    )
  })

  return (
    <div className="summary">
      <h2 className="summary__heading">Summary</h2>
      <ul className="summary__items">{summaryItemElements}</ul>
      <Button buttonText="Continue" />
    </div>
  )
}
