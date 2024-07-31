import Summary from "./components/Summary"
import Button from "./components/Button"

import jsonData from "./data/data.json"

export default function App() {
  return (
    <main className="main">
      <Summary jsonData={jsonData} />
      <Button buttonText="Continue" />
    </main>
  )
}
