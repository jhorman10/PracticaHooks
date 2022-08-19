const initialState = [
  {
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === '[TODO] Add todo') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Recolectar la piedra del poder',
  done: false,
};

const AddTodoAction = {
  type: '[TODO] Add todo',
  payload: newTodo,
};

todos = todoReducer(todos, AddTodoAction);

console.log({ state: todos });
