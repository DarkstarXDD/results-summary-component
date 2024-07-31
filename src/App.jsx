import Result from "./components/Result"
import Summary from "./components/Summary"

import jsonData from "./data/data.json"

export default function App() {
  function calcScore() {
    let score = 0

    for (let i = 0; i < jsonData.length; i++) {
      score += jsonData[i].score
    }

    console.log(score)

    score = Math.round(score / jsonData.length)
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

  return (
    <main className="main">
      <Result score={score} grade={grade} />
      <Summary jsonData={jsonData} />
    </main>
  )
}
