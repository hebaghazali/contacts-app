import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../css/App.css';
import ListContacts from './ListContacts';
import * as ContactsAPI from '../utils/ContactsAPI';
import CreateContact from './CreateContact';

const App = () => {
  const removeContact = contact => {
    ContactsAPI.remove(contact);

    setContacts(contacts.filter(c => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await ContactsAPI.getAll();
      setContacts(res);
    };

    getContacts();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <ListContacts contacts={contacts} onDeleteContact={removeContact} />
        }
      />
      <Route path='/create' element={<CreateContact />} />
    </Routes>
  );
};

export default App;
