import React, { useState } from 'react'
import '../styles/AddTodoForm.css'

function AddTodoForm({ onAddTodo }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!input.trim()) {
      setError('Please enter a todo')
      return
    }

    if (input.trim().length < 2) {
      setError('Todo must be at least 2 characters long')
      return
    }

    onAddTodo(input)
    setInput('')
    setError('')
  }

  const handleChange = (e) => {
    setInput(e.target.value)
    if (error) setError('')
  }

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a new todo..."
        className="todo-input"
        data-testid="todo-input"
      />
      <button type="submit" className="add-button" data-testid="add-button">
        Add Todo
      </button>
      {error && <p className="error-message" data-testid="error-message">{error}</p>}
    </form>
  )
}

export default AddTodoForm
