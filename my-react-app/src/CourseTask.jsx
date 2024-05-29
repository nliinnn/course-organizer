import { TiDelete } from "react-icons/ti";
import React from 'react'

export const CourseTask = ({ purpose, deleteTodo }) => {

    return (
        <div className="Course">

            <p className='task-name'> {purpose.purpose} </p>
            <TiDelete className='icon-delete' onClick={() => deleteTodo(purpose.id)}/>
            
        </div>
    )
}