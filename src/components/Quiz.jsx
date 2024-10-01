import React, { useState } from "react"
import Choices_Multiple from "./Choices_Multiple"
import Choices_Boolean from "./Choices_Boolean"
import { decode } from "html-entities"
import PropTypes from "prop-types"
import QuizResultPage from "../pages/QuizResultPage"
import "../styleSheets/quiz/quiz.css"

const Quiz = ({ quizData, quizType }) => {
  const [SessionQuestionIndex, setSessionQuestionIndex] = useState({
    current: 0,
    max: quizData.data.results.length,
  })

  let { current, max } = SessionQuestionIndex
  const isQuizFinished = () => current === max
  if (isQuizFinished()) return <QuizResultPage />

  const { question, correct_answer, incorrect_answers } =
    quizData.data.results[current]

  const progressBarPrecentage = Math.ceil(((current + 1) / max) * 100)
  const decoded_correct_answers = decode(correct_answer)
  const decodedQuestion = decode(question)
  const decoded_incorrect_answers = incorrect_answers.map((answer) =>
    decode(answer)
  )

  return (
    <div className="quiz">
      <div className="progress-bar">
        <div
          className="progress-bar__progress"
          style={{ width: `${progressBarPrecentage}%` }}
        ></div>
      </div>
      <div className="question-container">{decodedQuestion}</div>

      {/* depending on the [quizType] variable, load the corresponding component and send the data along. */}
      {quizType === "boolean" && (
        <Choices_Boolean
          setSessionQuestionIndex={setSessionQuestionIndex}
          correctAnswer={decoded_correct_answers}
          incorrectAnswers={decoded_incorrect_answers}
          question={decodedQuestion}
        />
      )}
      {quizType === "multiple" && (
        <Choices_Multiple
          setSessionQuestionIndex={setSessionQuestionIndex}
          correctAnswer={decoded_correct_answers}
          incorrectAnswers={decoded_incorrect_answers}
          question={decodedQuestion}
        />
      )}
    </div>
  )
}

Quiz.propTypes = {
  quizData: PropTypes.object.isRequired,
  quizType: PropTypes.string.isRequired,
}

export default Quiz
