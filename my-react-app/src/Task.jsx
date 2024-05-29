import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export const Task = ({ addTodo }) => {

    const [val, setVal] = useState("");

    const enterForm = e => {
        e.preventDefault();

        addTodo(val);

        setVal("");
    }


    return (
        <form onSubmit={ enterForm } className='CourseTaskWrapper'>
            <div className="main">

                <Link to='/' className="arrow-link"> <FaArrowLeftLong className='task-arrow'></FaArrowLeftLong> </Link>
                <h1 className="main-title"> Tasks </h1>

                <input type='text' className='add-course' placeholder='Add a task...' value={val} onChange={(e) => setVal(e.target.value)}/>        
                <button type='submit' className='add-button'> + </button>
                
            </div>
        </form>
    )
}