import Classes from "./button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={Classes.button}>
      {props.text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
