import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from "../../redux/contactsSelectors";
import { deleteContact } from "../../redux/contactsOps";
import Contact from "../Contact/Contact";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;
  if (contacts.length === 0) return <p>No contacts found.</p>;

  const sortedContacts = [...contacts].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );

  return (
    <ul>
      {sortedContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={phone}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}
