import React from 'react'
import '../styles/TodoItem.css'

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="todo-checkbox"
          data-testid={`todo-checkbox-${todo.id}`}
          aria-label={`Toggle ${todo.text}`}
        />
        <span
          className="todo-text"
          onClick={() => onToggle(todo.id)}
          data-testid={`todo-text-${todo.id}`}
          role="button"
          tabIndex="0"
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        data-testid={`delete-button-${todo.id}`}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
