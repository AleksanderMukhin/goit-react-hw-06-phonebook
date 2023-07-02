import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

const { Component } = require('react');

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value, id: nanoid() });
  };

  handleAddContact = e => {
    e.preventDefault();
    this.props.handleSubmitForm(this.state);
    this.setState({ id: '', name: '', number: '' });
    console.log(this.state);
  };

  render() {
    const { id, name, number } = this.state;
    // console.log(name);
    return (
      <form onSubmit={this.handleAddContact} className={css.form}>
        <label>
          Name
          <input
            className={css.input}
            onChange={this.handleChange}
            id={id}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={css.input}
            onChange={this.handleChange}
            id={id}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn_add} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
