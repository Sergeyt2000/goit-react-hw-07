import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector} from "react-redux";
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactBox} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
