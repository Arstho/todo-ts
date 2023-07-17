import React from 'react'
import TodoItem from './TodoItem'

// type TodoListProps = {
//   todos: ITodo[]
//   onToggle(id: number): void
//   onRemove: (id: number) => void
// }

const TodoList = () => {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'vhkbjlnm', completed: false },
    { id: 2, title: 'vhkbjlnm', completed: false },
    { id: 3, title: 'vhkbjlnm', completed: false }
  ])

  const removeClick = (id) => {
    console.log('delete', id);
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div>
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} handleClick={removeClick} />
      })}
    </div>
  )
}

export default TodoList
