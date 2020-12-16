import { CLOSE_TASK, OPEN_TASK } from "./types";

const InitialState = {
  isOpenTask: false,
  content: {}
}

export function reducer(state = InitialState, { type, payload }) {
  switch (type) {
    case OPEN_TASK:
      return {
        ...state,
        content: payload,
        isOpenTask: true

      }
    case CLOSE_TASK:
      return {
        ...state,
        isOpenTask: false
      }
    default:
      return state
  }
}