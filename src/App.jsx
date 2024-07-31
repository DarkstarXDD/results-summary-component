import Result from "./components/Result"
import Summary from "./components/Summary"

import jsonData from "./data/data.json"

export default function App() {
  return (
    <main className="main">
      <Result />
      <Summary jsonData={jsonData} />
    </main>
  )
}
