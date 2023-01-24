import PropTypes from "prop-types";
const Button = ({
  children,
  backgroundColor,
  color,
  primary = true,
  ...props
}) => {
  const mode = primary
    ? "btn btn-first"
    : "btn btn-second";
  return (
    <button
      type="button"
      className={["btn", mode].join(" ")}
      style={backgroundColor && { backgroundColor, color }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.proptypes = {
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Button contents
   */
  children: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  onClick: undefined,
};

export default Button;
