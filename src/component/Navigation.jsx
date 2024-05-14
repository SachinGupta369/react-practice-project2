import styles from "./Navigations.module.css";

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <div>
        <img src="/image/Frame.png" alt="logo" />
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navigation;
