import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types"
import "../styleSheets/modal/modal.css"
import { useDispatch } from "react-redux"
import { actions as quizSettingsActions } from "../redux/reducers/quizSettingsSlice"

const Modal = ({ reason }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const defaultButtonHandler = () => {
    dispatch(quizSettingsActions.setToDefault())
    // setDefault(true)
  }

  const MESSAGE_FOR_SETTINGS_ARE_NOT_SET = (
    <p>
      Your Quiz settings are not set.
      <br />
      <br />
      Please go back and choose your settings or click on default button for
      applying the default settings.
    </p>
  )

  const MESSAGE_FOR_NO_QUESTIONS_IN_DATABASE = (
    <p>
      Unfortunately, the settings you chose for your quiz did not yield any
      results.
      <br />
      <br />
      Please try a different topic or change the difficulty and see if anything
      changes.
    </p>
  )

  const message = () => {
    switch (reason) {
      case "SETTINGS_ARE_NOT_SET":
        return MESSAGE_FOR_SETTINGS_ARE_NOT_SET
      case "NO_QUESTIONS_IN_DATABASE":
        return MESSAGE_FOR_NO_QUESTIONS_IN_DATABASE
    }
  }

  return (
    <div className="modal">
      <h4>{reason}</h4>
      <div className="modal__description">{message()}</div>
      <div className="modal__btns">
        <button onClick={() => navigate("/settings")}>Go Back</button>
        {reason === "SETTINGS_ARE_NOT_SET" && (
          <button onClick={defaultButtonHandler}>Default</button>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  reason: PropTypes.string.isRequired,
}

export default Modal
