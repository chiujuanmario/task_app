import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./types";

const InitialState = {
  tasks: []
}

export function reducer(state = InitialState, { type, payload }) {
  switch (type) {

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      }

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== payload)
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(item => item.id === payload.id ? item = payload : item)
      };

    default:
      return state
  }
};