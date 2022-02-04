import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './Components/AddContact/AddContact';
import ContactContext from './Components/Context/ContactContext';
import EditContact from './Components/EditContact/EditContact';
import Contacts from "./Components/Contacts/Contacts";

const MyRoutes = () => {
    return (
            <ContactContext>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Contacts/>} />
                        <Route path="/add" element={<AddContact/>} />
                        <Route path="/edit/:familyName/:id" element={<EditContact/>} />
                    </Routes>
                </BrowserRouter>    
            </ContactContext>
    );
};

export default MyRoutes;