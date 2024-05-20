
import styles from "./Button.module.css";

const Button = ({longBtn, icon, text}) => {
  return (
    <button className={longBtn?styles.long_btn:styles.primary_btn}>
      {icon}
      {text}
    </button>

  );
};

export default Button;
