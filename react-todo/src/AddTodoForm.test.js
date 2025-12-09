import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from './components/AddTodoForm'

describe('AddTodoForm Component', () => {
  test('renders input and button', () => {
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    expect(screen.getByPlaceholderText(/add a new todo/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument()
  })

  test('submits form with input value', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    await user.type(input, 'Test todo')
    await user.click(button)
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('Test todo')
  })

  test('clears input after submission', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    await user.type(input, 'Test todo')
    await user.click(button)
    
    expect(input.value).toBe('')
  })

  test('shows error for empty input', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const button = screen.getByRole('button', { name: /add todo/i })
    await user.click(button)
    
    expect(screen.getByText(/please enter a todo/i)).toBeInTheDocument()
  })

  test('validates minimum length', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    await user.type(input, 'A')
    await user.click(button)
    
    expect(screen.getByText(/todo must be at least 2 characters long/i)).toBeInTheDocument()
  })
})
