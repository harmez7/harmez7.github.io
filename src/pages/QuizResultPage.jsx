import React, { Suspense, useRef, useState, lazy } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import CountUp from "react-countup"
import { useNavigate } from "react-router-dom"
import { BsChevronDoubleDown } from "react-icons/bs"
const QuizResultDetail = lazy(() => import("../components/QuizResultDetail"))
import "../styleSheets/quiz-result-page/quiz-result-page.css"

const QuizResultPage = () => {
  const { userQuizResults } = useSelector((state) => state.quizData)
  const QUESTIONS_LENGTH = userQuizResults.length
  const navigate = useNavigate()
  const scoreBar = useRef()
  const [isShowingDetail, setIsShowingDetail] = useState(false)
  const userCorrectAnswers = userQuizResults.filter((result) => result)

  //calculate the % of user correct asnwers
  const userCorrectAnswersPrecentage = Math.round(
    (userCorrectAnswers.length / userQuizResults.length) * 100
  )

  //calculate the correct score bar length - 375 is stroke-dasharray/stroke-dashoffset
  const scoreBarLengthCalculation =
    375 - (375 * userCorrectAnswersPrecentage) / 100

  const scoreColors = {
    red: "#ff2727",
    yellow: "#ffff38",
    blue: "#3333ff",
    green: "#008100",
  }

  const scoreBarColor = () => {
    const prec = userCorrectAnswersPrecentage
    if (prec <= 25) return scoreColors.red
    if (prec > 25 && prec <= 50) return scoreColors.yellow
    if (prec > 50 && prec <= 75) return scoreColors.blue
    if (prec > 75) return scoreColors.green
  }

  const scoreReactionText = () => {
    switch (scoreBarColor()) {
      case scoreColors.red:
        return "Bad luck! Maybe try again?"
      case scoreColors.yellow:
        return "Well done! Want to try again?"
      case scoreColors.blue:
        return 'Awesome! You "DO" know things!'
      case scoreColors.green:
        return "Perfect! You should give yourself a treat!"
      default:
        return "Oops something went wrong"
    }
  }

  const resetApp = () => {
    navigate("/settings")
  }

  // after component mount, set the score bar accordingly
  useEffect(() => {
    scoreBar.current.style.setProperty("--calc", scoreBarLengthCalculation)
  }, [])

  return (
    <div className={`quiz-result-page`}>
      <div className="quiz-result-page__summery">
        <span>{userCorrectAnswers.length}</span>
        <span>/</span>
        <span>{QUESTIONS_LENGTH}</span>
      </div>
      <div
        className={`quiz-result-page__score ${
          isShowingDetail ? "hide" : "show"
        }`}
      >
        <h2>Your Score</h2>
        <div className="score__score-container">
          <div className="score__score-demo">
            <div className="score-demo__bg"></div>
            <div className="score-demo__score-bar">
              <svg className="score-bar__svg">
                <circle
                  style={{ stroke: scoreBarColor() }}
                  cx="70"
                  cy="70"
                  r="60"
                  className="score-bar__bar"
                  ref={scoreBar}
                />
              </svg>
            </div>
            <CountUp
              className="score-demo__score-precentage"
              delay={0.3}
              end={userCorrectAnswersPrecentage}
              suffix={"%"}
              style={{ color: scoreBarColor() }}
            />
          </div>
          <div className="score-bar-reaction">- {scoreReactionText()} -</div>
        </div>
        <button className="reset-btn" onClick={resetApp}>
          Start a new Quiz
        </button>
        <div
          className="score-show-detail"
          onClick={() => setIsShowingDetail(true)}
        >
          <BsChevronDoubleDown className="score-show-detail__btn" />
          <p className="score-show-detail__text">Detail</p>
        </div>
      </div>
      {isShowingDetail && (
        <Suspense fallback={null}>
          <QuizResultDetail
            isShowing={isShowingDetail}
            setIsShowing={setIsShowingDetail}
          />
        </Suspense>
      )}
    </div>
  )
}

export default QuizResultPage
