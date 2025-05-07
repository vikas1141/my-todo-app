import Todo from './todo';

function TodoList({ todos, toggleTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList;
