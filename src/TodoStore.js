import { createStore } from "redux";

// Action(추가, 삭제, 수정): 명령어
const ADD_TODO = "todo/ADD_TODO";
const REMOVE_TODO = "todo/REMOVE_TODO";
const UPDATE_TODO = "todo/UPDATE_TODO";

// State
const initialState = {
  todoList: [],
};

// Dispatch
export const addTodo = () => ({ type: ADD_TODO });
export const removeTodo = (index) => ({ type: REMOVE_TODO, index });
export const updateTodo = (todo) => ({ type: UPDATE_TODO, todo });
// Todo -> 수정할 Index, value
/*
  todo: {
    index,
    value
  }
*/

// Reducer: Action을 받아서 수행하는 역할
// 새로운 State를 반환
const todoReducer = (state, action) => {
  let newTodoList;

  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, ""],
      };
    case REMOVE_TODO:
      newTodoList = [...state.todoList];
      newTodoList.splice(action.index, 1);
      return {
        ...state,
        todoList: newTodoList,
      };
    case UPDATE_TODO:
      newTodoList = [...state.todoList];
      newTodoList[action.todo.index] = action.todo.value;
      return {
        ...state,
        todoList: newTodoList,
      };
    default:
      return {
        ...state,
      };
  }
};

// Store
export const todoStore = createStore(todoReducer, initialState);
