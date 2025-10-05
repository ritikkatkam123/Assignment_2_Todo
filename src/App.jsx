import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const AddTodo = (todo) => {
    if (todo.trim() === "") {
      alert("⚠️ Please enter a task!");
      return;
    }
    setTodos([...todos, { text: todo, completed: false }]);
    alert("Task added successfully!");
  };

  const toggleComplete = (index) => {
    setTodos(todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo));
  }
  return (
    <div className="app-container">
      <h1 className="title"> My To-Do List</h1>
      <TodoInput onAdd={AddTodo} />
      <TodoList todos={todos} onToggle={toggleComplete} />
    </div>
  )
}


export default App
