import React from 'react'
import './styles.css';

// type TodoListProps = {
//   todos: ITodo[]
//   onToggle(id: number): void
//   onRemove: (id: number) => void
// }

const TodosPage = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'vhkbjlnm', completed: false },
    { id: 2, title: 'vhkbjlnm', completed: false },
    { id: 3, title: 'vhkbjlnm', completed: false }
  ])

  return (
    <div className='todo'>
    <input type="checkbox" />
      {todos.map(todo => {
        return <div>{todo.id}{' '}{todo.title}</div>
      })}
      <button>x</button>
    </div>
  )
}

export default TodosPage
