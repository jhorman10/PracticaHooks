import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'ADD_TODO',
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: id,
    });
  };
  const handleToogleTodo = (id) => {
    dispatch({
      type: 'TOGGLE_TODO',
      payload: id,
    });
  };

  let pending = todos.filter((todo) => todo.done !== true).length;
  let done = todos.filter((todo) => todo.done === true).length;

  return {
    todos,
    done,
    pending,
    handleNewTodo,
    handleDeleteTodo,
    handleToogleTodo,
  };
};
