import React from 'react';
import { Link } from 'react-router';

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <h2>{contact.name}</h2>
            <img src={contact.avatar} alt={contact.name} width={100} />
            <p>Last Connection: {contact.lastConnection}</p>
            <p>Connection Status: {contact.connectionStatus}</p>
        </Link>
    );
};

export default ContactItem;