import { createSelector } from "reselect";
import { FILTER_TYPE } from "../constants/filter";
export const selectTodos = (state) => state.todos.todos;
export const selectFilter = (state) => state.todos.currentFilter;
export const selectFilterText = (state) => state.todos.filterText;

export const selectFilteredTodos = ({ todos: { todos, currentFilter } }) =>
  todos.filter(
    (todo) =>
      (todo.isCompleted && currentFilter === FILTER_TYPE.done) ||
      (!todo.isCompleted && currentFilter === FILTER_TYPE.undone) ||
      currentFilter === FILTER_TYPE.all
  );

export const selectFilteredTodosByQueryString = createSelector(
  selectFilteredTodos,
  selectFilterText,
  (todos, filteredText) =>
    todos.filter((todo) => todo.text.includes(filteredText))
);
