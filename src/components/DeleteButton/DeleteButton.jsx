import styles from "./DeleteButton.module.css";

export default function DeleteButton({ onClick }) {
  return (
    <button className={styles.deleteButton} onClick={onClick}>
      Delete
    </button>
  );
}
