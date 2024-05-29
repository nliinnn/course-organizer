import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task'
import { CourseTask } from './CourseTask';
uuidv4();

export const Job = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), purpose: todo}])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    console.log(todos)


    return (
        <div className='CourseListWrapper'>
            <Task addTodo={addTodo}/>
            {todos.map((todo, index) => (
                <CourseTask purpose={todo} key={index} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}