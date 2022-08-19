export const TodoListItem = ({ todo, onDeleteTodo, onToogleTodo }) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${
            todo.done ? 'text-decoration-line-through text-secondary' : ''
          }`}
          onDoubleClick={() => onToogleTodo(todo.id)}
        >
          {todo?.description}
        </span>
        <button
          className="btn btn-danger btn-sm float-right"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
