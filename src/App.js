import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Update the URL to your deployed backend
        axios.get('https://todo-ih72.onrender.com/todos')
            .then((res) => setTodos(res.data))
            .catch((err) => console.error(err));
    }, []);

    const addTodo = (task) => {
        // Update the URL to your deployed backend
        axios.post('https://todo-ih72.onrender.com/todos', { task, completed: false })
            .then((res) => setTodos([...todos, res.data]))
            .catch((err) => console.error(err));
    };

    const deleteTodo = (id) => {
        // Update the URL to your deployed backend
        axios.delete(`https://todo-ih72.onrender.com/todos/${id}`)
            .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
