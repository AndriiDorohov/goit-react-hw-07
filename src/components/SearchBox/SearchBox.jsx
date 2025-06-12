import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../selectors/filtersSelectors";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

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
