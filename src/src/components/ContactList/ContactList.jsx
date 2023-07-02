import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contactList, handelDelet }) => {
  // console.log(contactList);

  if (!contactList || contactList.length === 0) {
    return <p>No contacts available.</p>;
  }

  return (
    <ul>
      {contactList.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <span className={css.item_name}>{name}:</span>
            <span className={css.item_number}>{number}</span>
            <button onClick={() => handelDelet(id)} type="button">
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array.isRequired,
  handelDelet: PropTypes.func.isRequired,
};
