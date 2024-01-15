import { useSelector } from "react-redux/es/hooks/useSelector"

const useAssembleQuizSessionURL = () => {
  const quizSettings = useSelector((state) => state.quizSettings)
  const { category, difficulty, type, amount } = quizSettings
  const isURLValid = Boolean(category && difficulty && type && amount)
  const url = `amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

  return {
    isURLValid,
    url,
    type,
  }
}

export default useAssembleQuizSessionURL
