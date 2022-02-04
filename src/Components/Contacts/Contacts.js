import React from 'react';
import { Link } from 'react-router-dom';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
    return (
        <div>
            <h1>Main page</h1>
            <Link to="/add">
                <button>Add</button>
            </Link>
            <ContactList />
        </div>
    );
};

export default Contacts;