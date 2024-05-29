import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task'
import { CourseTask } from './CourseTask'
uuidv4();

export const TaskLocalStorage = () => {

    const savedTodos = (localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const [todos, setTodos] = useState(savedTodos);

    const addTodo = todo => {
        const newTodos = [...todos, { id: uuidv4(), purpose: todo }];
        setTodos(newTodos);
        if  (todos.length !== 0) {
            localStorage.setItem('todos', JSON.stringify(newTodos));
        }
    }

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setNames(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    return (
        <div className='CourseListWrapper'>
            <Task addTodo={addTodo}/>
                {todos.map((todo, index) => (
                    <CourseTask purpose={todo} key={index} deleteTodo={{deleteTodo}}/>
                ))}
        </div>
    )
}