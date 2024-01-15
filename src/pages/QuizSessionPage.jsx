import { lazy, Suspense } from "react"
import useQuizData from "../hooks/useQuizData"
import Loading from "../components/Loading"
import useAssembleQuizSessionURL from "../hooks/useAssembleQuizSessionURL"
import Quiz from "../components/Quiz"
import "../styleSheets/quiz-session-page/quiz-session-page.css"

const Modal = lazy(() => import("../components/Modal"))

const QuizSessionPage = () => {
  const { url, isURLValid, type: quizType } = useAssembleQuizSessionURL()
  const {
    data: quizData,
    isSuccess: dataIsAvailble,
    isError,
    error,
    isFetching,
    isLoading,
  } = useQuizData({ url, isURLValid })

  if (!isURLValid)
    return (
      <Suspense fallback={<Loading />}>
        <Modal reason={"SETTINGS_ARE_NOT_SET"} />
      </Suspense>
    )

  if (isError) return <div>{error}</div>
  if (isFetching || isLoading) return <Loading />
  // if Data is not available yet, dont do anything.
  if (!dataIsAvailble) return

  // if there is no result for the selected settings in database, show an error modal.
  const isThereNoResult = quizData.data.results.length == 0
  if (isThereNoResult) {
    return (
      <Suspense fallback={<Loading />}>
        <Modal reason={"NO_QUESTIONS_IN_DATABASE"} />
      </Suspense>
    )
  }

  return (
    <>
      {isURLValid && dataIsAvailble && (
        <div className="quiz-session-page">
          <Quiz quizData={quizData} quizType={quizType} />
        </div>
      )}
    </>
  )
}

export default QuizSessionPage
