import React from 'react';
import TodoItem from './TodoItem';
import styles from './styles.module.scss';

const TodoList = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'vhkbjlnm', completed: true },
    { id: 2, title: 'vhkbjlnm', completed: false },
    { id: 3, title: 'vhkbjlnm', completed: false },
  ]);
  const [txtTodo, setTxtTodo] = React.useState('');

  const inputRef = React.useRef(null);

  const removeClick = React.useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const changeHandler = (e) => {
    setTxtTodo(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === 'Enter' && txtTodo.trim() !== '') {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: txtTodo,
          completed: false,
        },
      ]);
      setTxtTodo('');
    }
  };

  const handleChange = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={txtTodo}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <ul className={styles.ul}>
        {todos.map((todo, i) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={i}
            removeClick={removeClick}
            handleChange={handleChange}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;