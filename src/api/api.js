import axios from "axios";

const API_URL = "http://localhost:5000";

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const fetchRoles = async () => {
  const response = await axios.get(`${API_URL}/roles`);
  return response.data;
};

export const addUser = async (user) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

export const addRole = async (role) => {
  const response = await axios.post(`${API_URL}/roles`, role);
  return response.data;
};
