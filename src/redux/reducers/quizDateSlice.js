import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  questions: [],
  userAnswers: [],
  correctAnswers: [],
  userQuizResults: [],
}
const quizDateSlice = createSlice({
  name: "quiz-data",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      return {
        questions: [...state.questions, payload.question],
        userAnswers: [...state.userAnswers, payload.userAnswer],
        correctAnswers: [...state.correctAnswers, payload.correctAnswer],
        userQuizResults: [...state.userQuizResults, payload.userQuizResult],
      }
    },
    reset: () => initialState,
  },
})

export const { actions, reducer } = quizDateSlice
