import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';



interface User {
    id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    departmentId: string;

}

interface Props {
    user: User;
    people: User[];
    setPeople: React.Dispatch<React.SetStateAction<User[]>>;
}



export function Employee_Card(props: Props) {

    function deleteCard(){
        props.setPeople(props.people.filter((user) => {
            return user.id != props.user.id;
        }))
    }
    /*
    function addCard(){
        props.setPeople([...props.people, newEmployee])
    }

     */

    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.user.firstName} {props.user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.user.jobTitle}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">See More</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteCard}>
                    Delete
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}