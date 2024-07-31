export default function Result(props) {
  return (
    <div className="result">
      <h2 className="result__heading">Your Result</h2>
      <p className="result__score">
        <span className="result__score--actual">{props.score}</span>
        <span className="result__score--original"> of 100</span>
      </p>
      <div className="result__text">
        <p className="result__grade">{props.grade}</p>
        <p className="result__comparison">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  )
}
