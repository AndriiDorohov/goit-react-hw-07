import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !number.trim()) return;
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <div className="card">
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}
