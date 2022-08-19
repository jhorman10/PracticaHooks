import { useTodos } from '../hooks/useTodos';
import { TodoAdd, TodoList } from './';
import { Badges } from './Badges';

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo,
    pending,
    done,
  } = useTodos();

  return (
    <>
      <h1>TodoApp</h1>
      <Badges done={done} pending={pending} />
      <hr />
      <div className="row">
        <div className="col-6">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToogleTodo={handleToogleTodo}
          />
        </div>
        <div className="col-6">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewtodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
