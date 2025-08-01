import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import Message from '../Message/Message';

const ContactList = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact, message) => (
                <ContactItem key={contact.id} contact={contact}/>
            ))}
        </div>
    );
};

export default ContactList;