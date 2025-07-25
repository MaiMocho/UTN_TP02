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
		{/* 		<nav>
					<li><NavLink to="/contact/1/messages"></NavLink> </li>
					<li><NavLink to="/contact/2/messages"></NavLink> </li>
					<li><NavLink to="/contact/3/messages"></NavLink> </li>
				</nav> */}
    </div>
    );
};

export default ContactScreen;