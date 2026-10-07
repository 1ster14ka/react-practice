import clsx from "clsx";
import s from "./Button.module.css";

const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      className={clsx(s.btn, { [s.isSelected]: selected })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
