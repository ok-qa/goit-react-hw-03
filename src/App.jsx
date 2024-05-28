import { useState, useEffect } from "react";
import initialContacts from "./contacts.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import css from "./App.module.css";

const CONTACTS_LOCALSTORAGE_KEY = "contacts";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem(CONTACTS_LOCALSTORAGE_KEY);
    return savedContact ? JSON.parse(savedContact) : initialContacts;
  });

  useEffect(() => {
    if (contacts) {
      localStorage.setItem(CONTACTS_LOCALSTORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
