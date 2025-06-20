import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/TodoSlice';
import productRedcer from '../product/productSlice'
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    products: productRedcer
  },
});
