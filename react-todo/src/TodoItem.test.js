import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoItem from './components/TodoItem'

describe('TodoItem Component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test todo',
    completed: false,
  }

  test('renders todo text and checkbox', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
      />
    )
    
    expect(screen.getByText('Test todo')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('renders delete button', () => {
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
      />
    )
    
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
  })

  test('calls onToggle when checkbox clicked', async () => {
    const user = userEvent.setup()
    const mockOnToggle = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={mockOnToggle}
        onDelete={jest.fn()}
      />
    )
    
    await user.click(screen.getByRole('checkbox'))
    expect(mockOnToggle).toHaveBeenCalledWith(1)
  })

  test('calls onDelete when delete button clicked', async () => {
    const user = userEvent.setup()
    const mockOnDelete = jest.fn()
    
    render(
      <TodoItem
        todo={mockTodo}
        onToggle={jest.fn()}
        onDelete={mockOnDelete}
      />
    )
    
    await user.click(screen.getByRole('button', { name: /delete/i }))
    expect(mockOnDelete).toHaveBeenCalledWith(1)
  })

  test('shows completed state', () => {
    const completedTodo = { ...mockTodo, completed: true }
    
    render(
      <TodoItem
        todo={completedTodo}
        onToggle={jest.fn()}
        onDelete={jest.fn()}
      />
    )
    
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeChecked()
    expect(checkbox.closest('li')).toHaveClass('completed')
  })
})
