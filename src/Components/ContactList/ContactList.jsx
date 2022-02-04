import { Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import { contactContext } from '../Context/ContactContext';

const ContactList = () => {
    
    const { contacts, getContacts } = useContext(contactContext)
    
    console.log(contacts, 'check')
    useEffect(() => {
        getContacts()
    }, [])
    
    return (
        <Grid container spacing={{xs: 2, md: 3}}
            columns={{xs: 4, sm: 8, md: 12}}
        >
            {
                contacts ? (
                    contacts.map((item, index) => (
                        <Grid key={item.id} style={{margin: "20px"}}>
                            <ContactCard item={item} key={index}/>
                        </Grid>
                    ))
                ): (<h1>Loading...</h1>)
            }
        </Grid>
    );
};

export default ContactList;