import React, {useState} from 'react';
export default function TodoInput({ onAdd }) {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(todo);
        setTodo("");
    }
    return (
        <form onSubmit={handleSubmit} className="todo-input-form">
            <input
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Enter a new task"
                className="todo-input"
            />
            <button type="submit" className="add-button">Add</button>
        </form>
    );
}