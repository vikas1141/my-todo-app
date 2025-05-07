import { useState } from 'react';
import TodoList from './todolist';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  function handleAddTodo() {
    if (todoText.trim() === '') return;
    setTodos([...todos, { id: uuidv4(), text: todoText, completed: false }]);
    setTodoText('');
  }

  function toggleTodo(id) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
