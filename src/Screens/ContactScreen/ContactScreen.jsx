import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService.js';
import './ContactScreen.css';
const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className='contact-screen'>
            <ContactList contacts={contactsState} />
    </div>
    );
};

export default ContactScreen;