import { render, screen } from "@testing-library/react";

import { Provider } from "react-redux";
import TaskItem from "../components/TaskItem";
import configureMockStore from 'redux-mock-store';

describe('Task Item', () => {
  const task = {
    _id: 'task-123',
    createdAt: '2023-07-09T10:00:00',
    text: 'Learn Blockchain',
  }

  const mockStore = configureMockStore([]);
  const store = mockStore({})

  test('renders task details correctly', () => {
    render(
      <Provider store={store}>
        <TaskItem task={task} />
      </Provider>
    );

    expect(screen.getByText(task.text)).toBeInTheDocument();
    expect(screen.getByText(new Date(task.createdAt).toLocaleString('en-US'))).toBeInTheDocument();
  })
})