import { PropTypes } from 'prop-types';

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <ol className='contact-list'>
      {contacts.map(contact => {
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
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ListContacts;
