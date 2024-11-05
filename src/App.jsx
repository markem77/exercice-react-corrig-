import Tabs from "./components/Tabs"
import {tabsData1, tabsData2} from "./data/Tabs.js"

function App() {
  return (
    <div className="mt-24 px-6">
      <Tabs tabsData={tabsData1}/>
    </div>
  )
}

export default App
