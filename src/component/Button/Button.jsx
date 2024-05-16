import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <Button className={styles.primary_btn}>
    <MdMessage />
    VIA SUPPORT CHAT
  </Button>
  );
};

export default Button;
