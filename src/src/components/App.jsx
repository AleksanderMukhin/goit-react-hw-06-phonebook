import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { useState, useEffect } from 'react';
import { save, load } from 'localStorage';

const key = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getLocalStorage = load(key);
    if (getLocalStorage) setContacts(getLocalStorage);
  }, []);

  useEffect(() => {
    save(key, contacts);
  }, [contacts]);

  const handleSubmitForm = contact => {
    const checkDuplicate = () => {
      return contacts.some(cnt => {
        return cnt.name.toLowerCase() === contact.name.toLowerCase();
      });
    };

    if (checkDuplicate()) {
      return alert(`${contact.name} is already in contacts.`);
    } else {
      setContacts(prevState => {
        console.log(prevState);
        return [...prevState, contact];
      });
    }
  };

  const handelDelet = id => {
    setContacts(prevState => {
      return prevState.filter(contact => contact.id !== id);
    });
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleFilterContact = () => {
    // console.log(filter)
    // const { filter, contacts } = state;
    // console.log(contacts);
    if (filter === null || filter === '') {
      return contacts;
    }

    return contacts.filter(contact => {
      // console.log(contact.name);
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const contactList = handleFilterContact();

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm handleSubmitForm={handleSubmitForm} />

      <h2>Contacts</h2>
      <Filter value={filter} handleFilterChange={handleFilterChange} />

      <ContactList contactList={contactList} handelDelet={handelDelet} />
    </div>
  );
};

// =======================================
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//       { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//       { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//       { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     name: '',
//     filter: '',
//   };

//   componentDidMount() {
//     const data = JSON.parse(localStorage.getItem('contacts'));
//     this.setState({ contacts: data ?? this.state.contacts });
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleSubmitForm = contact => {
//     const checkDuplicate = () => {
//       return this.state.contacts.some(cnt => {
//         return cnt.name.toLowerCase() === contact.name.toLowerCase();
//       });
//     };

//     if (checkDuplicate()) {
//       return alert(`${contact.name} is already in contacts.`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//   };

//   handelDelet = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   handleFilterChange = e => {
//     this.setState({ filter: e.target.value });
//   };

//   handleFilterContact = () => {
//     const { filter, contacts } = this.state;
//     // console.log(contacts);
//     if (filter === null || filter === '') {
//       return contacts;
//     }

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   };

//   render() {
//     const contactList = this.handleFilterContact();
//     return (
//       <div
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           color: '#010101',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm handleSubmitForm={this.handleSubmitForm} />

//         <h2>Contacts</h2>
//         <Filter
//           value={this.state.filter}
//           handleFilterChange={this.handleFilterChange}
//         />

//         <ContactList contactList={contactList} handelDelet={this.handelDelet} />
//       </div>
//     );
//   }
// }
