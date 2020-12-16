import { ADD_TASK, REMOVE_TASK, EDIT_TASK } from "./types";

export const addTask = payload => ({
  type: ADD_TASK,
  payload
})

export const removeTask = payload => ({
  type: REMOVE_TASK,
  payload
})

export const editTask = payload => ({
  type: EDIT_TASK,
  payload
})