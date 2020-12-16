import axios from './axios';

export const addTask = async (payload) => {
  const { data } = await axios.post('/task/lead_59a79b6cb211449f9698bad058a593e4', payload);

  return data;
};

export const getAllTask = async () => {
  const { data } = await axios.get('/task/lead_59a79b6cb211449f9698bad058a593e4');

  return data;
};

export const getSingleTask = async (taskId) => {
  const { data } = await axios.get(`/lead_59a79b6cb211449f9698bad058a593e4/${taskId}`);

  return data;
};

export const updateTask = async ({ id, ...payload }) => {
  const { data } = await axios.put(`/task/lead_59a79b6cb211449f9698bad058a593e4/${id}`, payload);

  return data;
};

export const removeTask = async (taskId) => {
  const { data } = await axios.delete(`/task/lead_59a79b6cb211449f9698bad058a593e4/${taskId}`);

  return data;
};
