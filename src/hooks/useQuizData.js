import { useQuery } from "@tanstack/react-query"
import PropTypes from "prop-types"
import axios from "axios"

const fetchSession = (url) => axios(`https://opentdb.com/api.php?${url}`)

const useQuizData = ({ url, isURLValid }) => {
  return useQuery({
    queryKey: ["quiz-session-data"],
    queryFn: () => fetchSession(url),
    //This will ensure that all required data is set before attempting an API call
    enabled: isURLValid,
    refetchOnWindowFocus: false,
  })
}

useQuizData.propTypes = {
  url: PropTypes.string.isRequired,
  isURLValid: PropTypes.bool.isRequired,
}

export default useQuizData
