import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: null,
  isLoading: false,
  error: null,
};

const todosReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    getAllTodos: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    getAllTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    getAllTodosFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getTodo: (state, action) => {
      state.todo = action.payload;
    },
    deleteTodo: (state, action) => {
        state.isLoading = true;
        state.error = null;
      },
      deleteTodoSuccess: (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
        state.error = null;
      },
      deleteTodosFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      updateTodo: (state, action) => {
        state.isLoading = true;
        state.error = null;
      }
  },
});

export const { getAllTodos, getAllTodosSuccess, getAllTodosFailure, getTodo, deleteTodo, deleteTodoSuccess, deleteTodosFailure, updateTodo} =
  todosReducer.actions;

export default todosReducer.reducer;
