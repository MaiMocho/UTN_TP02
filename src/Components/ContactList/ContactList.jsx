import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import Message from '../Message/Message';
import { getLastMessage } from '../../services/contactService';

const ContactList = ({ contacts }) => {
    return (
        <div>
            {contacts.map((contact, index) => {
                const lastMessage = getLastMessage(contact.id);
                const lastMessageDay = lastMessage ? lastMessage.día : '';
                return (
                    <ContactItem key={contact.id} contact={contact} onClick={() => onContactClick(contact)} lastMessageDay={lastMessageDay}/>
                )
            })}
        </div>
    );
};

export default ContactList;