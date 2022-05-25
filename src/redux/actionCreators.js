import { actionTypes } from "./actionTypes";
import { bindActionCreators } from "redux";
import { store } from "./index";

const addTodo = (value) => ({
  type: actionTypes.TODO_ADD,
  payload: { value },
});

const removeTodo = (id) => ({
  type: actionTypes.TODO_DELETE,
  payload: { id },
});

const toggleFieldIsCompleted = (id) => ({
  type: actionTypes.TODO_DONE,
  payload: { id },
});

const changeValueTodo = (id, text) => ({
  type: actionTypes.TODO_CHANGE,
  payload: { id, text },
});

const todoFilterChange = (option) => ({
  type: actionTypes.FILTER_CHANGE,
  payload: { currentFilter: option },
});

const searchQueryChange = (text) => ({
  type: actionTypes.FILTER_QUERY_SEARCH,
  payload: { filterText: text },
});

export default bindActionCreators(
  {
    addTodo,
    removeTodo,
    toggleFieldIsCompleted,
    changeValueTodo,
    todoFilterChange,
    searchQueryChange,
  },
  store.dispatch
);
