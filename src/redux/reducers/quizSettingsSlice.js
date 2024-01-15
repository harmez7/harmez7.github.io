import { createSlice } from "@reduxjs/toolkit"

const quizSettingsSlice = createSlice({
  name: "quizeSettings",
  initialState: {
    category: undefined,
    difficulty: undefined,
    type: undefined,
    amount: undefined,
  },
  reducers: {
    setCategory: (state, { payload }) => {
      return (state = {
        ...state,
        category: payload,
      })
    },
    setDifficulty: (state, { payload }) => {
      return (state = {
        ...state,
        difficulty: payload,
      })
    },
    setType: (state, { payload }) => {
      return (state = {
        ...state,
        type: payload,
      })
    },
    setAmount: (state, { payload }) => {
      return (state = {
        ...state,
        amount: payload,
      })
    },
    setToDefault: () => {
      return {
        category: "0",
        difficulty: "easy",
        type: "multiple",
        amount: "7",
      }
    },
  },
})

export const { actions, reducer } = quizSettingsSlice
