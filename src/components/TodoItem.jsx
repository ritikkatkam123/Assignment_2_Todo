export default function TodoItem({ todo, onToggle }) {
    return (
        <list className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle}
            />
            <span onClick={onToggle}>{todo.text}</span>
        </list>
    );
}
