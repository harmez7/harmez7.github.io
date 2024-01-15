import "../styleSheets/start-page/start-page.css"
import { Link } from "react-router-dom"

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="start-page__elements-wrapper">
        <div className="start-page__title">Quiz</div>
        <div className="start-btn-container">
          <Link to="/settings" className="start-btn">
            Start Now
          </Link>
          <div className="beat-effect"></div>
        </div>
      </div>
    </div>
  )
}

export default StartPage
