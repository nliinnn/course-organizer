import React, { useState } from 'react'

export const CourseList = ({addName}) => {
    console.log(addName)

    const [value, setValue] = useState("");


    const submitHandler = e => {
        e.preventDefault();

        addName(value);

        setValue("")
    }


    return (
        <form onSubmit={submitHandler} className='CourseList'>
            <div className="main">
                <h1 className="main-title"> Course Organizer </h1>
                <input type='text' className='add-course' value={value} placeholder='Add a course...' onChange={(e) => setValue(e.target.value)}/>            
                <button type='submit' className='add-button'> + </button>
            </div>
        </form>
    )
}