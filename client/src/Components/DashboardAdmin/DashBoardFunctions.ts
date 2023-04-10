import axios from "axios";
const url = "http://localhost:3001/";

const getProperties = async () => {
  const result = await axios.get(`${url}properties`);
  return result.data;
};
const getUsers = async () => {
  const result = await axios.get(`${url}users`);
  return result.data;
};
const deleteUser = async (id: string) => {
  const result = await axios.delete(`${url}users/${id}`);
  return result.data;
};
const deleteProperty = async (id: string) => {
  const result = await axios.delete(`${url}properties/${id}`);
  return result.data;
};

export { getProperties, getUsers, deleteProperty, deleteUser };
