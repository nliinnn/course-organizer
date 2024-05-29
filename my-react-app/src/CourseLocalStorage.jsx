import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CourseList } from './CourseList'
import { Course } from './Course'
uuidv4();

export const CourseLocalStorage = () => {

    const savedNames = localStorage.getItem("names") ? JSON.parse(localStorage.getItem("names")) : [];

    const [names, setNames] = useState(savedNames);

    const addName = name => {
        const newNames = [...names, { id: uuidv4(), task: name, completed: false }];
        setNames(newNames);
        if  (names.length !== 0) {
            localStorage.setItem('names', JSON.stringify(newNames));
        }
    }

    const deleteCourse = id => {
        const newNames = names.filter(name => name.id !== id);
        setNames(newNames);
        localStorage.setItem('names', JSON.stringify(newNames));
    }

    return (
        <div className='CourseListWrapper'>
            <CourseList addName={addName} />
                {names.map((name, index) => (
                    <Course task={name} key={index} deleteCourse={deleteCourse}/>
                ))} 
        </div>
     )
}