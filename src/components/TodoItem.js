import React from 'react'

const TodoItem = ({ item, toggleCompletion }) => {
  const status = item.completed ? "unfinish" : "finish"

  return (
    <li className={item.completed ? "completed" : null}>
      {item.text}
      <button onClick={toggleCompletion}>{status}</button>
    </li >
  )
}

export default TodoItem
