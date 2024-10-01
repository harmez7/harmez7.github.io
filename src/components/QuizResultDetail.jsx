import { useSelector } from "react-redux"
import { BsChevronDoubleDown } from "react-icons/bs"
import PropTypes from "prop-types"
import "../styleSheets/quiz-result-detail/quiz-result-detail.css"

const QuizResultDetail = ({ isShowing, setIsShowing }) => {
  const quizData = useSelector((state) => state.quizData)
  const { questions, userQuizResults, userAnswers, correctAnswers } = quizData

  //create table rows
  const resultTable = questions.map((question, index) => {
    //give the appropriate className
    const correctOrIncorrect = userQuizResults[index] ? "correct" : "incorrect"
    return (
      <tr className="table__row" key={index}>
        <td className="table__element">{question}</td>
        <td className={`table__element ${correctOrIncorrect}`}>
          {userAnswers[index]}
        </td>
        <td className={`table__element ${correctOrIncorrect}`}>
          {correctAnswers[index]}
        </td>
      </tr>
    )
  })

  return (
    <div className={`quiz-result-page__detail ${isShowing ? "show" : ""}`}>
      <table className="table">
        <thead className="table__head">
          <tr className="table__row">
            <th className="head__element">Question</th>
            <th className="head__element">Your Answer</th>
            <th className="head__element">Correct Answer</th>
          </tr>
        </thead>
        <tbody className="table__body">{resultTable}</tbody>
      </table>
      <div className="score-hide-detail" onClick={() => setIsShowing(false)}>
        <BsChevronDoubleDown className="score-hide-detail__btn" />
      </div>
    </div>
  )
}

QuizResultDetail.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  setIsShowing: PropTypes.func.isRequired,
}

export default QuizResultDetail
