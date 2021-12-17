import "./Button.css";

const Button = ({ title, bgColor, borderColor }) => {
  const btnStyle = {
    backgroundColor: bgColor,
    borderColor: borderColor,
  };

  return (
    <div className="Button" style={btnStyle}>
      {title}
    </div>
  );
};

export default Button;
