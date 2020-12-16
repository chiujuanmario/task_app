import { USER_ID } from '../../constants';
import * as taskApi from '../../api/task';
import { GET_ALL_TASK, ADD_TASK, REMOVE_TASK, EDIT_TASK } from './types';

export const getAllTask = () => async (dispatch) => {
  try {
    const { results } = await taskApi.getAllTask();

    dispatch({
      type: GET_ALL_TASK,
      payload: results,
    })
  } catch (error) {
    alert(error.response.message);
  }
};

export const addTask = payload => async (dispatch) => {
  try {
    const { message, results } = await taskApi.addTask({
      ...payload,
      assigned_user: USER_ID,
    });

    if (message === 'Validation error') {
      return;
    }
    
    dispatch({
      type: ADD_TASK,
      payload: results,
    });

  } catch (error) {
    alert(error.response.message);
  }
};

export const removeTask = payload => async (dispatch) => {
  try {
    await taskApi.removeTask(payload);

    dispatch({
      type: REMOVE_TASK,
      payload
    });

  } catch (error) {
    alert(error.response.message);
  }
};

export const editTask = payload => async (dispatch) => {
  try {
    const { results } = await taskApi.updateTask({
      ...payload,
      assigned_user: USER_ID,
    });

    dispatch({
      type: EDIT_TASK,
      payload: results
    });

  } catch (error) {
    alert(error.response.message);
  }
}