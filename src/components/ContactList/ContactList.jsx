import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { getContacts, deleteContact } from '../../redux/contactSlice';
import { getFilter } from '../../redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const dispatch = useDispatch();

  if (!contacts || contacts.length === 0) {
    return <p>No contacts available.</p>;
  }

  const contactsToRender = filterContact.trim()
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterContact.toLowerCase())
      )
    : contacts;

  return (
    <ul>
      {contactsToRender.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.item_name}>{name}:</span>
            <span className={css.item_number}>{number}</span>
            <button onClick={() => dispatch(deleteContact(id))} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
