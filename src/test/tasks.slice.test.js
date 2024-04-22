import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import configureMockStore from 'redux-mock-store';
import { getTasks } from '../features/tasks/tasks.slice';
import taskService from '../features/tasks/tasks.service';
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);
const mockAxios = new MockAdapter(axios);

describe('task redux slice', () => {
  let store;
  
  beforeEach(() => {
    store = mockStore({
      task: {
        tasks: [],
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: '',
      },
      auth: {
        user: { token: 'mock_token_key' }
      }
    });
  });

  afterEach(() => {
    mockAxios.reset();
    store.clearActions();
  });

  test('calls the taskService to fetch tasks', async () => {
    const token = 'mock_token_key';
    const tasks = [
      {
        _id: "661d7f7e2a717d004a5ce90e",
        text: "Learn TailwindCss",
        createdAt: "2024-04-15T19:26:54.215+00:00",
        updatedAt: "2024-04-15T19:26:54.215+00:00",
        __v: 0
      }
    ]

    const getTasksSpy = jest.spyOn(taskService, 'getTasks').mockResolvedValue(tasks);
    await store.dispatch(getTasks());
    expect(getTasksSpy).toHaveBeenCalledWith(token);
  });
})