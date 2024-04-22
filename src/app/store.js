import authReducer from '../features/auth/auth.slice'
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasks.slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer
  },
});
