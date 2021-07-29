import styles from './Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Go back
  </button>
);

export default Button;
