export default function Result(props) {
  return (
    <div className="result">
      <h1 className="result__heading">Your Result</h1>
      <p className="result__score">
        <span className="result__score--achieved">{props.score}</span>
        <span className="result__score--total"> of 100</span>
      </p>
      <div className="result__text">
        <p className="result__grade">{props.grade}</p>
        <p className="result__comparison">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  )
}
