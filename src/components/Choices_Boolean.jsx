import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"
import { actions as quizDataActions } from "../redux/reducers/quizDateSlice"
import "../styleSheets/choices-boolean/choices-boolean.css"

const Choices_Boolean = ({
  correctAnswer,
  setSessionQuestionIndex,
  question,
}) => {
  const dispatch = useDispatch()
  const handleChoiceSelecting = (e) => {
    const userAnswer = e.currentTarget.dataset.bool
    const isUserAnswerCorrect = userAnswer == correctAnswer
    dispatch(
      quizDataActions.update({
        question,
        userAnswer,
        correctAnswer,
        userQuizResult: isUserAnswerCorrect,
      })
    )
    setSessionQuestionIndex((state) => {
      return {
        ...state,
        current: state.current + 1,
      }
    })
  }

  return (
    <div className="boolean-choices">
      <div className="boolean-choices__choice">
        <FaCircleCheck
          data-bool="True"
          className="true-symbol"
          onClick={(e) => handleChoiceSelecting(e)}
        />
      </div>
      <div className="boolean-choices__choice">
        <FaCircleXmark
          data-bool="False"
          className="false-symbol"
          onClick={(e) => handleChoiceSelecting(e)}
        />
      </div>
    </div>
  )
}

Choices_Boolean.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  setSessionQuestionIndex: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
}

export default Choices_Boolean
