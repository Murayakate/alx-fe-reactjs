import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from '../components/TodoItem'

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false,
  }

  test('renders todo text', () => {
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })

  test('renders checkbox', () => {
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()
  })

  test('renders delete button', () => {
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    const deleteButton = screen.getByRole('button', { name: /delete/i })
    expect(deleteButton).toBeInTheDocument()
  })

  test('calls onToggle when checkbox is clicked', async () => {
    const user = userEvent.setup()
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)
    
    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  test('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup()
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    const deleteButton = screen.getByRole('button', { name: /delete/i })
    await user.click(deleteButton)
    
    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })

  test('displays completed todo with strikethrough', () => {
    const completedTodo = { ...mockTodo, completed: true }
    const mockOnToggle = jest.fn()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={completedTodo}
        onToggle={mockOnToggle}
        onDelete={mockOnDelete}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    
    const todoItem = checkbox.closest('li')
    expect(todoItem).toHaveClass('completed')
  })
})
