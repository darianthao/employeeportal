import * as React from 'react';
import Card from '@mui/material/Card';
import {Employee_Card} from "@/components/employee/Employee_Card";
import UserData from '../../userdata.json';
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import {TextField} from "@mui/material";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    jobTitle: string;
    departmentId: string;
}

interface Department {
    id: string;
    name: string;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#778da9',
    border: '4px solid #778da9',
    p: 4,
};

export function Employee() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const[people, setPeople] = useState<User[]>([]);
    const[departments, setDepartments] = useState<Department[]>([]);
    useEffect(()=> {
        setPeople([...UserData.people])
        setDepartments([...UserData.departments])
    }, [])

    return (
        <>
            <div className="add_employee_button">
            <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
                Add A New Employee
            </Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Add A New Employee
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                <TextField id="outlined-basic" label="First Name" variant="outlined" className="text-field"/>
                                <TextField id="outlined-basic" label="Last Name" variant="outlined" className="text-field"/>
                                <TextField id="outlined-basic" label="Job Title" variant="outlined" className="text-field"/>
                                <TextField id="outlined-basic" label="Department" variant="outlined" className="text-field"/>
                            </Typography>
                            <Button variant="outlined" startIcon={<AddIcon />} onClick={handleClose} className="add_employee_button_modal">
                                Add
                            </Button>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        <div className="employee_container">
            {people && people.map((users, index) => {
                return(
                <div key={index} className="grid-item">
                    <Employee_Card user={users} setPeople={setPeople} people={people} departments={departments}/>
                </div>
                )
            })}
        </div>
            </>
    )

}
