import { useState } from "react"
import Result from "./components/Result"
import Summary from "./components/Summary"

import jsonData from "./data/data.json"

export default function App() {
  const [results, setResults] = useState(jsonData)

  function calcScore() {
    let score = 0

    for (let i = 0; i < results.length; i++) {
      score += results[i].score
    }

    score = Math.round(score / results.length)
    return score
  }

  function calcGrade(score) {
    if (score >= 90) return "Outstanding"
    if (score >= 80) return "Excellent"
    if (score >= 70) return "Great"
    if (score >= 60) return "Good"
    if (score >= 50) return "Average"
    return "Poor"
  }

  const score = calcScore()
  const grade = calcGrade(score)

  function handleClick() {
    setResults((prevResult) =>
      prevResult.map((currentResult) => {
        let newRandomScore = Math.ceil(Math.random() * 100)
        return { ...currentResult, score: newRandomScore }
      })
    )
  }

  return (
    <main>
      <div aria-live="polite" className="component">
        <Result score={score} grade={grade} />
        <Summary results={results} handleClick={handleClick} />
      </div>
    </main>
  )
}
