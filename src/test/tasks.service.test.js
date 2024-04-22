import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import taskService from "../features/tasks/tasks.service";

const mockAxios = new MockAdapter(axios);

describe('task services', () => {
  afterEach(() => {
    mockAxios.reset();
  })

  test('fetches tasks successfully', async () => {
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

    mockAxios
      .onGet(
        '/api/tasks/',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .reply(200, tasks);
  
    const response = await taskService.getTasks(token);
    expect(response).toEqual(tasks);
  })
})