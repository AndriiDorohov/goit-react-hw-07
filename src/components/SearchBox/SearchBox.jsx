import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/contactsSelectors";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Find contacts by name</label>
      <input
        className={styles.input}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Type a name..."
      />
    </div>
  );
}
