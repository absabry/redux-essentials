import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice'
import postReducer from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    counter: counterReducer,
    user: userReducer,
  },
});
