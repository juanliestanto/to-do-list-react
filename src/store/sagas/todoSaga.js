import { call, put, takeEvery } from "redux-saga/effects";
import TodoService from "../../services/todoService";
import {
  deleteTodo,
  deleteTodoSuccess,
  getAllTodos,
  getAllTodosFailure,
  getAllTodosSuccess,
  updateTodo,
} from "../reducers/todoReducers";

function* getAllTodoSaga(action) {
  try {
    const data = yield call(TodoService().getAll, action.payload);
    yield put(getAllTodosSuccess(data));
  } catch (e) {
    yield put(getAllTodosFailure(e.message));
  }
}

function* deleteTodoSaga(action) {
  try {
    const data = yield call(TodoService().deleteTodo, action.payload);
    yield put(deleteTodoSuccess(data));
  } catch (e) {
    console.log(e.message);
    yield put(getAllTodosFailure(e.message));
  }
}

function* updateTodoSaga(action) {
  try {
    yield call(TodoService().update, action.payload);
    const data = yield call(TodoService().getAll, action.payload);
    yield put(getAllTodos(data));
  } catch (e) {
    yield put(getAllTodosFailure(e.message));
  }
}

export function* watchGetAllTodos() {
  yield takeEvery(getAllTodos.type, getAllTodoSaga);
  yield takeEvery(deleteTodo.type, deleteTodoSaga);
  yield takeEvery(updateTodo.type, updateTodoSaga);
}