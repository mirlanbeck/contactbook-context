import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { contactContext } from '../Context/ContactContext';

export default function ContactCard({item}) {
        const { deleteContact } = React.useContext(contactContext)
        
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    {item.familyName}
                </Typography>
                <Typography>
                    {item.firstName}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    {item.phoneNumber}
                </Typography>
                <Typography variant='body2' color="text.secondary">
                    {item.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => deleteContact(item.id)} size="small">Delete</Button>
                <Link to={`edit/${item.familyName}/${item.id}`}>
                    <Button size="small">Edit </Button>
                </Link>
            </CardActions>
        </Card>   
    )   
}
