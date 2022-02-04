import { Button, Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';

const EditContact = () => {
    const params = useParams()
    const { getContactToEdit, contactToEdit, saveEditedContact} = useContext(contactContext)
    const [form, setForm] = React.useState({
        familyName: "",
        lastName: "",
        phoneNumber: "",
        email: ""
    })
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if(contactToEdit) {
            setForm(contactToEdit)
        }    
    }, [contactToEdit])
    
    useEffect(() => {
        getContactToEdit(params.id)
    }, [])
    
    function handleSubmit (e) {
        let editedContact = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(editedContact)
    }
    
    function handleSave () {
        saveEditedContact(form)
        navigate("/")
    }
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: '40px auto',
                maxWidth: 1000,
                height: 'auto',
                p: '10px'
                },
            }}>
            <Paper elevation={3}>
                <h1 style={{textAlign: "center" }}>Update contact</h1>
                <div style={{dispay: "flex", justifyContent: "space-around", color: "black"}}>
                    <div style={{
                        width: "450px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <form noValidate autoComplete='off' style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <TextField 
                                style={{padding: "10px"}}
                                name="familyName"
                                onChange={handleSubmit}
                                value={form.familyName}
                                variant="outlined"
                                label="Family name"
                                />
                            <TextField 
                                style={{padding: "10px"}}
                                name="firstName"
                                onChange={handleSubmit}
                                value={form.firstName}
                                variant="outlined"
                                label="First name"
                                />
                            <TextField 
                                style={{padding: "10px"}}
                                name="phoneNumber"
                                onChange={handleSubmit}
                                value={form.phoneNumber}
                                variant="outlined"
                                label="Phone number"
                                />
                            <TextField 
                                style={{padding: "10px"}}
                                name="email"
                                onChange={handleSubmit}
                                value={form.email}
                                variant="outlined"
                                label="Email"
                                />
                            <Button onClick={handleSave} variant="contained">Save</Button>
                        </form>
                    </div>
                </div>
                
            </Paper>    
            
        </Box>
    );
};

export default EditContact;