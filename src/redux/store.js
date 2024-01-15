import { configureStore } from "@reduxjs/toolkit"
import { reducer as quizeSettingsReducer } from "./reducers/quizSettingsSlice"
import { reducer as quizDataReducer } from "./reducers/quizDateSlice"

const store = configureStore({
  reducer: {
    quizSettings: quizeSettingsReducer,
    quizData: quizDataReducer,
  },
})

export default store
