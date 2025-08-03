import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService.js';
import './ContactScreen.css';
import ICONS from '../../assets/Icons';
const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };
    return (
        <div className='contact-screen'>
            <div className='search-container'>
                <label className='search-bar'>
                    <ICONS.search/>
                    <input type="text" value={searchQuery} onChange={handleSearch} placeholder= "Buscar un chat o iniciar uno nuevo" />
                </label>
            </div>
            <div>
                <ContactList contacts={contactsState} />
            </div>
        </div>
    );
};

export default ContactScreen;