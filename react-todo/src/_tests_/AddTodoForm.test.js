import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodoForm from '../components/AddTodoForm'

describe('AddTodoForm Component', () => {
  test('renders input and button', () => {
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  test('calls onAddTodo with input value on submit', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    await user.type(input, 'New todo')
    await user.click(button)
    
    expect(mockOnAddTodo).toHaveBeenCalledWith('New todo')
  })

  test('clears input after successful submission', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })
    
    await user.type(input, 'New todo')
    await user.click(button)
    
    expect(input.value).toBe('')
  })

  test('displays error message for empty input', async () => {
    const user = userEvent.setup()
    const mockOnAddTodo = jest.fn()
    render(<AddTodoForm onAddTodo={mockOnAddTodo} />)
    
    const button = screen.getByRole('button', { name: /add todo/i })
    await user.click(button)
    
    expect(screen.getByText(/please enter a todo/i)).toBeInTheDocument()
  })

  test('displays error for input less than 2 characters', async () => {
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
