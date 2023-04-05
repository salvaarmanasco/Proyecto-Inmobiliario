import axios from "axios";

const getProperties = async () => {
  const properties = await axios.get("http://localhost:3001/properties");
  return properties.data;
};
const getUsers = async () => {
  const properties = await axios.get("http://localhost:3001/users");
  return properties.data;
};

export { getProperties, getUsers };
