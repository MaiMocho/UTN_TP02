import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactItem.css';

const ContactItem = ({ contact }) => {
    return (
        <NavLink to={`/contact/${contact.id}/messages`} className='list-of-contacts'>
            <div className='contact-item-photo'>
                <img src={contact.avatar} />
            </div>
            <div>
                <span>{contact.name}</span>
                <span>{contact.id.día}</span>
                <div>
                    <p>{contact.lastMessage}</p>
                </div>
            </div>

            {/* <p>Last Connection: {contact.lastConnection}</p>
            <p>Connection Status: {contact.connectionStatus}</p> */}
        </NavLink>
    );
};

export default ContactItem;