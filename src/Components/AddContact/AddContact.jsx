import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';
import "./AddContact.css"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function AddContact () {
    const [form, setForm] = React.useState({
        firstName: "",
        familyName: "",
        phoneNumber: "",
        email: ""
    })
    
    const navigate = useNavigate()
    const { addContact } = React.useContext(contactContext)
    
    const handleChange = (e) => {
        const values = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(values)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.familyName || !form.firstName || !form.phoneNumber || !form.email) {
            alert("Fill in fields")
            return
        }
        addContact(form)
        console.log("worked");
        navigate("/")
    }
    
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)' : { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >      
        <div className='form-block'>
            <h2>Add new contact</h2>
            <TextField onChange={handleChange} name="familyName" value={form.familyName} className="filled-basic" label="Family name" variant="filled"/>
            <TextField onChange={handleChange} name="firstName" value={form.firstName} className="filled-basic" label="First name" variant="filled"/>
            <TextField onChange={handleChange} name="phoneNumber" value={form.phoneNumber} className="filled-basic" label="Phone number" variant="filled"/>
            <TextField onChange={handleChange} name="email" value={form.email} className="filled-basic" label="email" variant="filled"/>
            <Button onClick={handleSubmit} variant="outlined">Add</Button>
        </div>
        </Box>
    );
}