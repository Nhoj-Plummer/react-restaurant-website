import "./App.css"
import { Navbar } from "./components"
import { Header } from "./containers"

function App() {
  return (
    <div className="App">
      <div className="top-section">
        <Navbar />
        <Header />
      </div>
    </div>
  )
}

export default App
