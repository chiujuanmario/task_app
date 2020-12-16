import { OPEN_TASK, CLOSE_TASK } from './types'

export const openTask = (payload) => ({
  type: OPEN_TASK,
  payload
})

export const closeTask = () => ({
  type: CLOSE_TASK
})
