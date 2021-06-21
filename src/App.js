import React, {useState} from 'react';
import TodoItem from './components/TodoItem'
import './App.css';

const App = (props) => {
  const [todoItems, setTodoItems] = useState(props.items)
  const [newTodoItem, setNewTodoItem] = useState('')

  const addTodoItem = (event) => {
    event.preventDefault()
    const newTodo = {
      id: todoItems.length + 1,
      text: newTodoItem,
      completed: false,
    }
    setTodoItems(todoItems.concat(newTodo))
    setNewTodoItem('')
  }

  const handleTodoItemChange = (event) => {
    setNewTodoItem(event.target.value)
  }

  const toggleTodoCompletion = id => {
    const todoItem = todoItems.find(n => n.id === id)
    const changedItem = { ...todoItem, completed: !todoItem.completed }
    setTodoItems(todoItems.map(item => item.id !== id ? item : changedItem))
  }


  return (
    <div>
      <h1>TodoList</h1>
      <ul>
        {todoItems.map(item => <TodoItem key={item.id} item={item} toggleCompletion={() => toggleTodoCompletion(item.id)} />)}
      </ul>
      <form onSubmit={addTodoItem}>
        <input
          value={newTodoItem}
          onChange={handleTodoItemChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
}

export default App;
