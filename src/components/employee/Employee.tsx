import * as React from 'react';
import Card from '@mui/material/Card';
import {Employee_Card} from "@/components/employee/Employee_Card";
import UserData from '../../userdata.json';
import {useEffect, useState} from "react";

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

export function Employee() {
    const[people, setPeople] = useState<User[]>([]);
    const[departments, setDepartments] = useState<Department[]>([]);
    useEffect(()=> {
        setPeople([...UserData.people])
        setDepartments([...UserData.departments])
    }, [])

    return (
        <div className="employee_container">
            {people && people.map((users, index) => {
                return(
                <div key={index} className="grid-item">
                    <Employee_Card user={users} setPeople={setPeople} people={people}/>
                </div>
                )
            })}
        </div>
    )
}
