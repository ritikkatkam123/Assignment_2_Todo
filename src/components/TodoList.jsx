
import TodoItem from "./TodoItem";
import React from 'react';
export default function TodoList({ todos, onToggle }) {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onToggle={() => onToggle(index)} />
            ))}
        </ul>
    );
}   