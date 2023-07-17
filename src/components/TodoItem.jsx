import React from 'react'
import './styles.css'

const TodoItem = ({ todo, handleClick }) => {

  return (
    <div className='todo'>
      <input type="checkbox" />
      {todo.id}{' '}{todo.title}
      <button onClick={() => handleClick(todo.id)}>x</button>
    </div>
  )
}

export default TodoItem
