import React from 'react'
import TodoItem from './TodoItem'
import styles from './styles.module.scss'

// type TodoListProps = {
//   todos: ITodo[]
//   onToggle(id: number): void
//   onRemove: (id: number) => void
// }

const TodoList = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'vhkbjlnm', completed: true },
    { id: 2, title: 'vhkbjlnm', completed: false },
    { id: 3, title: 'vhkbjlnm', completed: false }
  ])
  const [txtTodo, setTxtTodo] = React.useState('')
  const inputRef = React.useRef(null)

  console.log(todos);

  const removeClick = React.useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }, [])

  const changeHandler = (e) => {
    e.preventDefault()
    setTxtTodo(e.target.value)
  }

  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: txtTodo,
          completed: false
        }]
      )
    }
  }

  const handleChange = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  return (
    <>
      <form action="">
        <input
          ref={inputRef}
          type="text"
          value={txtTodo}
          onChange={changeHandler}
          onKeyPress={keyPressHandler} />
      </form>
      <ul className={styles.ul}>
        {todos?.map((todo, i) => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            index={i}
            removeClick={removeClick}
            handleChange={handleChange}
          />
        })}
      </ul>
    </>
  )
}

export default TodoList
