import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { actions as quizSettingsActions } from "../redux/reducers/quizSettingsSlice"
import { useNavigate } from "react-router-dom"
import "../styleSheets/type-NOQ/type-NOQ.css"

const QuizType_and_NumberOfQuestions = () => {
  const [numberOfQuestion, setNumberOfQuestion] = useState(7)
  const [typeOfQuestions, setTypeOfQuestions] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const updateType_and_numberOfQuestions_in_Store = () => {
    dispatch(quizSettingsActions.setType(typeOfQuestions))
    dispatch(quizSettingsActions.setAmount(String(numberOfQuestion)))
  }

  //check if all needed data is set and thereafter, navigate to quiz-session to start the quiz.
  const select_Type_and_numberOfQuestions = () => {
    if (!typeOfQuestions) {
      alert("Please select a Question Type")
      return
    }
    updateType_and_numberOfQuestions_in_Store()
    navigate("/quiz-session")
  }

  const CalculateRangeCounterPosition = (e) => {
    const rect = e.target.getBoundingClientRect()
    const rangeWidth = NOQ.current.offsetWidth
    let x = e.clientX - rect.x
    if (x < 0) x = 0
    if (x > rangeWidth) x = rangeWidth
    placeRangeCounterAtCorrespondingPosition(x)
  }

  const placeRangeCounterAtCorrespondingPosition = (x) => {
    NOQ.current.style.setProperty("--x", `${x - 20}px`)
  }

  // NOQ = Number of Questions
  const NOQ = useRef()
  const NOQ_COUNTER = useRef()
  const NOQRangeDrag = (e) => {
    const target = e.target
    CalculateRangeCounterPosition(e)
    NOQ_COUNTER.current.classList.add("show")
    target.onpointermove = (e) => {
      CalculateRangeCounterPosition(e)
    }
  }

  //remove the pointer event so the coutner disappears on [onPointerUp].
  const removeRangeDrag = (e) => {
    const target = e.target
    target.onpointermove = null
    NOQ_COUNTER.current.classList.remove("show")
  }

  return (
    <div className="T-NOQ-page">
      <div className="T-NOQ-page__title">
        <h2>Type & Number Of Questions</h2>
        <small>Almost Done!</small>
      </div>
      <div className="T-NOQ-page__type-container">
        <div
          onClick={() => setTypeOfQuestions("multiple")}
          className={`type-container__type ${
            typeOfQuestions === "multiple" ? "selected" : ""
          }`}
        >
          Multiple Choice
        </div>
        <div
          onClick={() => setTypeOfQuestions("boolean")}
          className={`type-container__type ${
            typeOfQuestions === "boolean" ? "selected" : ""
          }`}
        >
          True | False
        </div>
        {/* <div
          onClick={() => setTypeOfQuestions("0")}
          className={`type-container__type ${
            typeOfQuestions === "0" ? "selected" : ""
          }`}
        >
          Mixed
        </div> */}
      </div>
      <div ref={NOQ} className="T-NOQ-page__NOQ">
        <p>How many questions would you like to be asked?</p>
        <div className="NOQ__wrapper">
          1
          <input
            className="NOQ__range"
            onChange={(e) => setNumberOfQuestion(e.target.value)}
            onPointerDown={(e) => NOQRangeDrag(e)}
            onPointerUp={(e) => removeRangeDrag(e)}
            type="range"
            min={1}
            max={20}
            value={numberOfQuestion}
          />
          20
        </div>
        <div className="NOQ__counter" ref={NOQ_COUNTER}>
          {numberOfQuestion}
        </div>
        - {numberOfQuestion} -
      </div>
      <div className="session-start-btn-container">
        <button
          onClick={select_Type_and_numberOfQuestions}
          className="start-btn"
        >
          Start Your Quiz Session
        </button>
        <div className="beat-effect"></div>
      </div>
    </div>
  )
}

export default QuizType_and_NumberOfQuestions
