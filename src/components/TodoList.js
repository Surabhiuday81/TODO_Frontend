import React from 'react';

const TodoList = ({ todos, deleteTodo }) => (
    <ul>
        {todos.map((todo) => (
            <li key={todo._id}>
                {todo.task}
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </li>
        ))}
    </ul>
);

export default TodoList;
