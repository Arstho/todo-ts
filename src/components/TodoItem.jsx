import React from 'react'
import styles from './styles.module.scss';


const TodoItem = ({ todo, index, removeClick, handleDone }) => {

  return (
    <li className={styles.li}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleDone(todo.id)}/>
      <span className={todo.completed ? styles.done : undefined}>{index + 1}&nbsp;{todo.title}</span>
      <button onClick={() => removeClick(todo.id)}>&times;</button>
    </li>
  )
}

export default React.memo(TodoItem)
