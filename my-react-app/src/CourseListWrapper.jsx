import React, { useState } from 'react'
import { CourseList } from './CourseList'
import { Course } from './Course';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const CourseListWrapper = () => {
    const [names, setNames] = useState([]);

    const addName = name => {
        setNames([
            ...names,
            { id: uuidv4(), task: name, completed: false }]
            );

    }

    const deleteCourse = id => {
        setNames(names.filter(name => name.id !== id));
    }

    return (
        <div className='CourseListWrapper'>
            <CourseList addName={addName}/>
            {names.map((name, index) => (
                <Course task={name} key={index} deleteCourse={deleteCourse}/>
            ))}
        </div>
    )
}