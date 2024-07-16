import { useDispatch } from "react-redux"
import { actions as quizSettingsActions } from "../redux/reducers/quizSettingsSlice"
import SettingsTitle from "./SettingsTitle"
import PropTypes from "prop-types"
import "../styleSheets/difficulty/difficulty.css"

const Difficulty = ({ isDifficultyset }) => {
  const dispatch = useDispatch()
  const updateDifficultyInStore = (difficulty) => {
    dispatch(quizSettingsActions.setDifficulty(difficulty))
  }

  const selectDificulty = (difficulty) => {
    updateDifficultyInStore(difficulty)
    isDifficultyset(true)
  }

  return (
    <div className="difficluty-page">
      <SettingsTitle title={"Choose Difficulty"} position={"fixed"} />
      <form className="difficulties">
        <div
          className="difficulties__difficulty"
          onClick={() => selectDificulty("easy")}
        >
          <label className="difficulties__label" htmlFor="difficulty-easy">
            Easy
          </label>
          <input
            className="difficulties__input"
            name="difficulty"
            id="difficulty-easy"
            type="radio"
            value={"easy"}
          />
        </div>
        <div
          className="difficulties__difficulty"
          onClick={() => selectDificulty("medium")}
        >
          <label className="difficulties__label" htmlFor="difficulty-medium">
            Normal
          </label>
          <input
            className="difficulties__input"
            name="difficulty"
            id="difficulty-normal"
            type="radio"
            value={"normal"}
          />
        </div>
        <div
          className="difficulties__difficulty"
          onClick={() => selectDificulty("hard")}
        >
          <label className="difficulties__label" htmlFor="difficulty-hard">
            Hard
          </label>
          <input
            className="difficulties__input"
            name="difficulty"
            id="difficulty-hard"
            type="radio"
            value={"hard"}
          />
        </div>
      </form>
    </div>
  )
}

Difficulty.propTypes = {
  isDifficultyset: PropTypes.func.isRequired,
}

export default Difficulty
