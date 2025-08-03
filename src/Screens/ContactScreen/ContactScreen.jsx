import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService.js';
import './ContactScreen.css';
import SearchBar from './ContactsSearch.jsx';
import ContactFilterSection from './ContactFilterSection.jsx';

const ContactScreen = () => {

    const [filteredContacts, setFilteredContacts] = useState(getContactList());

    const handleSearch = (searchQuery) => {
        const contacts = getContactList()
        const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredContacts(filteredContacts);
    };

    return (
        <div className='contact-section'>
            <SearchBar onSearch={handleSearch}></SearchBar>
            <ContactFilterSection></ContactFilterSection>
            <div>
                <ContactList contacts={filteredContacts} />
            </div>
        </div>
    );
};

export default ContactScreen;