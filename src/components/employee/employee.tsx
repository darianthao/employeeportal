import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {blue, red} from "@mui/material/colors";


const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Employee Name
            </Typography>
        </CardContent>
        <CardActions >
            <Button size="small">View</Button>
        </CardActions>
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
