import { TiDelete } from "react-icons/ti";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Course = ({task, deleteCourse}) => {

    const [course, setCourses] = useState("");

    return (
        <div className='Course'>
            <p className='task-name'> {task.task} </p>

            <TiDelete className='icon-delete' onClick={() => deleteCourse(task.id)}/>

            <p className='task-access' onClick={() => setCourses(task.id)}> <Link to={`/${task.id}`} className="link-task"> View Tasks </Link> </p>
        </div>
    )

}