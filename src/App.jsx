import { Outlet } from "react-router-dom"
import "./styleSheets/app/app.css"

const App = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}

export default App
