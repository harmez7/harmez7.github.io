import "../styleSheets/difficulty/difficulty.css"

const SettingsTitle = ({ title, position }) => {
  const ContainerStyles = {
    position: position,
    top: "0",
    width: "100%",
    backgroundColor: "slateblue",
    textAlign: "center",
  }
  const titleTextStyles = {
    padding: "1.5em",
    fontSize: "1.5rem",
    color: "#ffff",
  }

  return (
    <div style={ContainerStyles}>
      <p style={titleTextStyles}>{title}</p>
    </div>
  )
}

export default SettingsTitle
