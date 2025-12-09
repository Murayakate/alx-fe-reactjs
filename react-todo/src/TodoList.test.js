import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TodoList from './components/TodoList'

describe('TodoList Component', () => {
  test('renders heading', () => {
    render(<TodoList />)
    expect(screen.getByRole('heading', { name: /my todo list/i })).toBeInTheDocument()
  })

  test('renders initial todos', () => {
    render(<TodoList />)
    expect(screen.getByText('Learn React')).toBeInTheDocument()
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument()
    expect(screen.getByText('Master Testing')).toBeInTheDocument()
  })

  test('adds a new todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const input = screen.getByPlaceholderText(/add a new todo/i)
    const button = screen.getByRole('button', { name: /add todo/i })

    await user.type(input, 'New todo')
    await user.click(button)

    expect(screen.getByText('New todo')).toBeInTheDocument()
  })

  test('toggles todo completion', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const checkbox = screen.getByTestId('todo-checkbox-1')
    expect(checkbox).not.toBeChecked()

    await user.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  test('deletes a todo', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const deleteButton = screen.getByTestId('delete-button-1')
    await user.click(deleteButton)

    expect(screen.queryByText('Learn React')).not.toBeInTheDocument()
  })

  test('shows validation error for empty input', async () => {
    const user = userEvent.setup()
    render(<TodoList />)

    const button = screen.getByRole('button', { name: /add todo/i })
    await user.click(button)

    expect(screen.getByText(/please enter a todo/i)).toBeInTheDocument()
  })

  test('displays todo statistics', () => {
    render(<TodoList />)

    expect(screen.getByText(/completed: 0/i)).toBeInTheDocument()
    expect(screen.getByText(/remaining: 3/i)).toBeInTheDocument()
  })
})
