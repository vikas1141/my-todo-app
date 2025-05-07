function Todo({ todo, toggleTodo }) {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </label>
      </div>
    );
  }
  
  export default Todo;
  