import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {blue, red} from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import {CardMedia} from "@mui/material";


const card = (
    <React.Fragment>
        <Card sx={{ maxWidth: 300 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Employee Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Job Title
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">See More</Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Edit
                </Button>
            </CardActions>
        </Card>
    </React.Fragment>
);


export function Employee() {
    return (
        <div className="employee_container">
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
            <div className="grid-item">
                <Card variant="outlined">{card}</Card>
            </div>
        </div>
    )
}
