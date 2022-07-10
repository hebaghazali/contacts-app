import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListContacts = ({ contacts, onDeleteContact }) => {
  const [query, setQuery] = useState('');

  const updateQuery = q => {
    setQuery(q.trim());
  };

  const clearQuery = () => {
    updateQuery('');
  };

  const showingContacts =
    query === ''
      ? contacts
      : contacts.filter(c =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className='list-contacts'>
      <div className='list-contacts-top'>
        <input
          type='text'
          className='search-contacts'
          placeholder='Search Contacts'
          value={query}
          onChange={e => updateQuery(e.target.value)}
        />
        <Link to='/create' className='add-contact'>
          Add contact
        </Link>
      </div>

      {showingContacts.length !== contacts.length && (
        <div className='showing-contacts'>
          <span>
            Now showing {showingContacts.length} of {contacts.length}
          </span>
          <button onClick={clearQuery}>Show all</button>
        </div>
      )}

      <ol className='contact-list'>
        {showingContacts.map(contact => {
          const { id, name, handle, avatarURL } = contact;

          return (
            <li key={id} className='contact-list-item'>
              <div
                className='contact-avatar'
                style={{ backgroundImage: `url(${avatarURL})` }}
              ></div>
              <div className='contact-details'>
                <p>{name}</p>
                <p>{handle}</p>
              </div>
              <button
                className='contact-remove'
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
