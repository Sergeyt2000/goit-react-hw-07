import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 
  
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
