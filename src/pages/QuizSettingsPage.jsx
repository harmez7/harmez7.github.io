import { useState } from "react"
import Category from "../components/Category"
import Difficulty from "../components/Difficulty"
import QuizType_and_NumberOfQuestions from "../components/QuizType_and_NumberOfQuestions"

const QuizSettingsPage = () => {
  const [isCategorySet, setIsCategorySet] = useState(false)
  const [isDifficultyset, setIsDifficultyset] = useState(false)

  //these if-check blocks prevents the next component from loading untill the previous one is done collecting the necessarily data from the user. starting from the category component.
  if (isDifficultyset) return <QuizType_and_NumberOfQuestions />
  if (isCategorySet) return <Difficulty isDifficultyset={setIsDifficultyset} />
  return <Category isCategorySet={setIsCategorySet} />
}

export default QuizSettingsPage
