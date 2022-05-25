import { actionTypes } from "./actionTypes";
import { v4 as uuidv4 } from "uuid";
import { FILTER_TYPE } from "../constants/filter";

const initialState = {
  todos: [],
  filterText: "",
  currentFilter: FILTER_TYPE.all,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload.value, id: uuidv4(), isCompleted: false },
        ],
      };
    case actionTypes.TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case actionTypes.TODO_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isCompleted:
            action.payload.id === todo.id
              ? !todo.isCompleted
              : todo.isCompleted,
        })),
      };
    case actionTypes.FILTER_CHANGE:
      return {
        ...state,
        currentFilter: (state.currentFilter = action.payload.currentFilter),
      };
    case actionTypes.FILTER_QUERY_SEARCH:
      return {
        ...state,
        filterText: (state.filterText = action.payload.filterText),
      };
    case actionTypes.TODO_CHANGE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          text: action.payload.id === todo.id ? action.payload.text : todo.text,
        })),
      };
    default:
      return state;
  }
};
