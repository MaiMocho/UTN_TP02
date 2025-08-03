import React, { useState } from 'react';
import ICONS from '../../assets/Icons';
import './ContactScreen.css';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <div className='search-container'>
                <label className='search-bar'>
                    <ICONS.search className='search-icon'/>
                    <input type="text" value={searchQuery} onChange={handleSearch} placeholder= "Buscar un chat o iniciar uno nuevo" />
                </label>
            </div>
    );
};

export default SearchBar;