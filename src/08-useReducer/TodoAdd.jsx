import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewtodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFromSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    };
    onNewtodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFromSubmit}>
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="form-control"
          name="description"
          onChange={onInputChange}
          value={description}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};
