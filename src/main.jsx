import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Provider as ReduxProvider } from "react-redux"
import router from "./router"
import store from "./redux/store"
import App from "./App.jsx"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
)
