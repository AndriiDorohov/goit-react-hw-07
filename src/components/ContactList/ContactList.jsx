import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectContacts } from "../../selectors/contactsSelectors";
import { selectNameFilter } from "../../selectors/filtersSelectors";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(filter.toLowerCase()),
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} onDeleteContact={handleDelete} />
      ))}
    </ul>
  );
}
