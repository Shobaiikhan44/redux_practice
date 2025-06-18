// TodoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: 'idle',
};

const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.status = 'succeeded';
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      state.status = 'succeeded';
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.text = text;
        state.status = 'succeeded';
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
