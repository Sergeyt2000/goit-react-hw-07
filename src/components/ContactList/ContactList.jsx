import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const filterContacts = (contacts, filterValue) => {
  if (!filterValue) {
    return contacts;
  }    
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
}
 
export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);
  const filteredContacts = filterContacts(contacts, filterValue);

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
