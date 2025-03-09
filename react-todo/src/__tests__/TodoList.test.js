import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component with demo todos', () => {
  render(<TodoList />);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems.length).toBeGreaterThan(0);
});

test('adds a new todo', () => {
  render(<TodoList />);

  const inputField = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByText(/add/i);

  fireEvent.change(inputField, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles the completion status of a todo', () => {
  render(<TodoList />);

  const todoItem = screen.getByText('Demo Todo');
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass('completed');
});

test('deletes a todo', () => {
  render(<TodoList />);

  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);

  const todoItem = screen.queryByText('Demo Todo');
  expect(todoItem).not.toBeInTheDocument();
});
