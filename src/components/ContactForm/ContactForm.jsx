import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    const form = e.target.elements;
    dispatch(addContact(form.name.value, form.number.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleAddContact} className={css.form}>
      <label>
        Name
        <input
          className={css.input}
          id={'nameInput'}
          type="text"
          name="name"
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.input}
          id={'phoneInput'}
          type="tel"
          name="number"
          pattern="^[0-9]+$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btn_add} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
