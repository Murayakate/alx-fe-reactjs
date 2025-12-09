import React, { useState } from 'react'
import TodoItem from './TodoItem'
import AddTodoForm from './AddTodoForm'
import '../styles/TodoList.css'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
    { id: 3, text: 'Master Testing', completed: false },
  ])

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="todo-list-container">
      <h1>My Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      
      <div className="todos-section">
        <h2>Total Todos: {todos.length}</h2>
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one to get started!</p>
        ) : (
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="stats">
        <p>Completed: {todos.filter(t => t.completed).length}</p>
        <p>Remaining: {todos.filter(t => !t.completed).length}</p>
      </div>
    </div>
  )
}

export default TodoList
