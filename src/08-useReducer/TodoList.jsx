import React from 'react';
import { TodoListItem } from './';

export const TodoList = ({ todos = [], onDeleteTodo, onToogleTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToogleTodo={onToogleTodo}
        />
      ))}
    </ul>
  );
};
