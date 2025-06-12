import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.info}>
        <p className={styles.contactRow}>
          <IoPerson className={`${styles.icon} ${styles.userIcon}`} />
          {name}
        </p>
        <p className={styles.contactRow}>
          <BsFillTelephoneFill
            className={`${styles.icon} ${styles.phoneIcon}`}
          />
          {number}
        </p>
      </div>
      <DeleteButton
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      />
    </div>
  );
}
