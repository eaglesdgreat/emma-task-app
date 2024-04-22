import authReducer from './../features/auth/auth.slice'
import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './../features/tasks/tasks.slice'

describe('global store', () => {
  test('creates the store with the correct reducers', () => {
    const store = configureStore({
      reducer: {
        auth: authReducer,
        tasks: tasksReducer,
      }
    })

    const storeReducers = store.getState();
    expect(storeReducers).toHaveProperty('auth');
    expect(storeReducers).toHaveProperty('tasks');
  })
})