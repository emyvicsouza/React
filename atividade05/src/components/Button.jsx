import "./Button.css"

const Button = ({ text, type = "button", ...props }) => {
  return (
    <button
      className="custom-btn"
      type={type}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button