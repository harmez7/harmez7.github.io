import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import StartPage from "./pages/StartPage"
import QuizSessionPage from "./pages/QuizSessionPage"
import QuizSettingsPage from "./pages/QuizSettingsPage"

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <StartPage />,
        path: "/",
      },
      {
        path: "/settings",
        element: <QuizSettingsPage />,
      },
      {
        path: "/quiz-session",
        element: <QuizSessionPage />,
      },
    ],
  },
  {
    element: <center>Not Found</center>,
    path: "*",
  },
])

export default router
