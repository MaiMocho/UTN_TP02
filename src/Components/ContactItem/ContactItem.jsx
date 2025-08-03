import React from 'react';
import { NavLink } from 'react-router-dom';
import './ContactItem.css';

const ContactItem = ({ contact, lastMessageDay }) => {
    return (
        <div className='contact-list'>
            <NavLink to={`/contact/${contact.id}/messages`} className='individual-contact'>
                <div className='contact-item-photo'>
                    <img src={contact.avatar} />
                </div>
                <div>
                    <span>{contact.name}</span>
                    <span>{lastMessageDay}</span>
                    <div>
                        <p>{contact.lastMessage}</p>
                    </div>
                </div>

            </NavLink>
        </div>

    );
};

export default ContactItem;